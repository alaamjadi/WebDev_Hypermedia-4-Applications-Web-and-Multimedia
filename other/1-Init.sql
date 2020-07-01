CREATE TABLE services(
  service_id serial PRIMARY KEY,
  service_name VARCHAR (150) UNIQUE NOT NULL,
  photo_address VARCHAR (1500) NOT NULL,
  short_description VARCHAR (500) Not NULL,
  long_description VARCHAR (15000) NOT NULL
);

CREATE TABLE person(
  person_id serial PRIMARY KEY,
  person_name VARCHAR (50) UNIQUE NOT NULL,
  person_role VARCHAR (50) NOT NULL,
  photo_address VARCHAR (1500) NOT NULL,
  long_description VARCHAR (15000) NOT NULL
);

CREATE TABLE events(
  event_id serial PRIMARY KEY,
  person_id serial REFERENCES person(person_id),
  event_name VARCHAR (150) UNIQUE NOT NULL,
  event_date TIMESTAMP NOT NULL,
  event_location VARCHAR (150) NOT NULL,
  photo_address VARCHAR (1500) NOT NULL,
  short_description VARCHAR (500) Not NULL,
  long_description VARCHAR (15000) NOT NULL
);

CREATE TABLE involve(
  involve_id serial PRIMARY KEY,
  person_id integer NOT NULL,
  service_id integer NOT NULL,
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id) REFERENCES services (service_id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT person_id_fkey FOREIGN KEY (person_id) REFERENCES person (person_id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE present(
  present_id serial PRIMARY KEY,
  event_id integer NOT NULL,
  service_id integer NOT NULL,
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id) REFERENCES services (service_id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT event_id_fkey FOREIGN KEY (event_id) REFERENCES events (event_id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE
);