const fs = require("fs");
const path = require("path");
const sqlDbFactory = require("knex");
const { newDb } = require("pg-mem");

let { eventsDbSetup } = require("../service/EventService");
let { personDbSetup } = require("../service/PersonService");
let { servicesDbSetup } = require("../service/ServiceService");
let { involveDbSetup } = require("../service/InvolveService");
let { presentDbSetup } = require("../service/PresentService");

let sqlDbLocal;

if (process.env.USE_PGMEM === "true") {
  console.log("⚡ Using in-memory PostgreSQL via pg-mem");

  const mem = newDb();

  // 🧩 Add a fake version() function to satisfy Knex
  mem.public.registerFunction({
    name: 'version',
    returns: 'text',
    implementation: () => 'PostgreSQL 15.0 (pg-mem)',
  });

  const pgMem = mem.adapters.createPg(); // this gives us fake pg Client/Pool

  // 🟢 Trick: override Knex's pg driver dynamically
  const knexPg = require("pg");
  Object.assign(knexPg, pgMem); // replace pg's Client/Pool with pg-mem's

  sqlDbLocal = sqlDbFactory({
    client: "pg",
    connection: {
      host: "localhost",
      database: "demo",
    },
    debug: true,
  });
} else {
  console.log("🐘 Using real PostgreSQL");

  sqlDbLocal = sqlDbFactory({
    client: "pg",
    ssl: true,
    debug: true,
    connection: process.env.DATABASE_URL,
  });
}

async function setupDataLayer() {
  console.log("Setting up the data layer");

  // Only create schema and insert demo data when using pg-mem
  if (process.env.USE_PGMEM === "true") {
    console.log("🌱 Creating in-memory schema and seeding data...");

    const schemaPath = path.join(__dirname, "../other/1-Init.sql");
    const dataPath = path.join(__dirname, "../other/2-data.sql");

    try {
      const schemaSQL = fs.readFileSync(schemaPath, "utf8");
      const dataSQL = fs.readFileSync(dataPath, "utf8");

      // Execute schema and data scripts sequentially
      await sqlDbLocal.raw(schemaSQL);
      await sqlDbLocal.raw(dataSQL);

      console.log("✅ Demo schema and data successfully loaded!");
    } catch (err) {
      console.error("❌ Error loading SQL files:", err);
    }
  }

  // 3️⃣ Then call your setup functions
  return (
    eventsDbSetup(sqlDbLocal) &&
    personDbSetup(sqlDbLocal) &&
    servicesDbSetup(sqlDbLocal) &&
    involveDbSetup(sqlDbLocal) &&
    presentDbSetup(sqlDbLocal)
  );
}

module.exports = { database: sqlDbLocal, setupDataLayer };
