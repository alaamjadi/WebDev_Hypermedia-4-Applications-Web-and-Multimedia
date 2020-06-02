CREATE TABLE services(
  service_id serial PRIMARY KEY,
  service_name VARCHAR (150) UNIQUE NOT NULL,
  description VARCHAR (15000) NOT NULL,
  short_description VARCHAR (500) Not NULL,
  photo_address VARCHAR (50) not null
);

CREATE TABLE staff(
  staff_id serial PRIMARY KEY,
  staff_name VARCHAR (50) UNIQUE NOT NULL,
  staff_role VARCHAR (50) NOT NULL,
  photo_address VARCHAR (50) not null
);

CREATE TABLE events(
  event_id serial PRIMARY KEY,
  staff_id serial REFERENCES staff(staff_id) ,
  event_name VARCHAR (50) UNIQUE NOT NULL,
  description VARCHAR (15000) NOT NULL,
  short_description VARCHAR (500) Not NULL,
  location VARCHAR (150) NOT NULL,
  time_event TIMESTAMP NOT NULL,
  date_event date not null,
  photo_address VARCHAR (50) not null
);

CREATE TABLE Involve(
  staff_id integer NOT NULL,
  service_id integer NOT NULL,
  PRIMARY KEY (staff_id, service_id),
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id)
      REFERENCES services (service_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT staff_id_fkey FOREIGN KEY (staff_id)
      REFERENCES staff (staff_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE present(
  event_id integer NOT NULL,
  service_id integer NOT NULL,
  PRIMARY KEY (event_id, service_id),
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id)
      REFERENCES services (service_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT event_id_fkey FOREIGN KEY (event_id)
      REFERENCES events (event_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);
