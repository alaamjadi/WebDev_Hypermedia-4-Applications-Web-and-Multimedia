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
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id)
      REFERENCES services (service_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT person_id_fkey FOREIGN KEY (person_id)
      REFERENCES person (person_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE present(
  present_id serial PRIMARY KEY,
  event_id integer NOT NULL,
  service_id integer NOT NULL,
  CONSTRAINT service_id_fkey FOREIGN KEY (service_id)
      REFERENCES services (service_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE,
  CONSTRAINT event_id_fkey FOREIGN KEY (event_id)
      REFERENCES events (event_id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE
);


INSERT INTO services (service_id, service_name,  photo_address, short_description,long_description)
VALUES
(1, 'Hospice', '["hospice_01.jpg","hospice_02.jpg","hospice_03.jpg","hospice_04.jpg"]', ' The Hospice Milcare is a house with open windows on the world, where some sick people have accepted to live with dignity the final stage of their lives, assisted by their family members and social and health operators trained. ', '["Organizer:", "Presented in:", "Hospice Milcare, what it is and what it does: The Hospice Milcare is a house with open windows on the world, where some sick people have accepted to live with dignity the final stage of their lives, assisted by their family members and social and health operators trained. The old farmhouse, now abandoned, has been restored to Mil ano Care as our (Milcare Onlus) for the community. The Milcare Onlus Foundation was established on 30 June 1999 to facilitate the realization of the Milcare project developed by a working group set up in 1997 at the European Institute of Oncology.The project, presented by the IRCCS Ospedale Maggiore (now Policlinico Foundation ) to the Directorate General for health of the Lombardy Region, was approved by the regional authorities and was financed by the Ministry of health with 1,084,599 Euros (Law 39/99).",
  "The Hospice can accommodate 12 Patients with advanced diseases, oncological and non-oncological, in the final stage of life. Assistance is completely free. The request for hospitalization can be submitted by the family doctor, the hospital specialist or directly by a family member. To be accepted, the request must comply with the requirements of the Regional Health Service regulations.",
  "Assistance is guaranteed by a Palliativist Medical Director and a Nursing Coordinator with a team of Doctors, Nurses, Healthcare Workers. There are also: a psychologist physiotherapist social worker and several consultants. The Hospice is part of the local network of palliative care in the southern area of ​​Milan , to which the IEO Palliative Care Unit also collaborates.",
  "The Coordinator of the Volunteers included in the Hospice and trained by the Milcare Onlus Foundation also participates in the team meetings aimed at defining the Patient care plan."]'),
(2, 'PalliativeCare', '["palliativecare_01.jpg","palliativecare_02.jpg","palliativecare_03.jpg","palliativecare_04.jpg","palliativecare_05.jpg"]', 'Palliative care protects the quality of life of the incurable atient and his family. You can receive them at home, in hospices and in the hospital. They are free and are a right enshrined in Law 38/2010.','["Organizer:", "Presented in:", "Palliative care protects the quality of life of the incurable atient and his family. You can receive them at home, in hospices and in the hospital. They are free and are a right enshrined in Law 38/2010.",
  "The Milcare Foundation is a member of the FCP - Federation of Palliative Care Onlus which coordinates 70 non-profit organizations (about a third of the ONP active today in this sector throughout the national territory), representing a good example of aggregation and synergy of different forces aimed to common goals.",
  "The Palliative Care Federation is proposed as a national reference point for the care and support of incurable people and their families, promoting the culture of life to the end, its respect, the choices to be privileged, the priorities.",
  "Through the website, Facebook and Twitter, it carries out activities of correct dissemination, exchange of news and useful information to improve the quality of the services provided in the territory, both in-home care and in residential structures (hospices) and to protect the rights of citizens and the application of the reference standards."]'),
(3, 'Listening Center', '["listeningcenter_01.jpg","listeningcenter_02.jpg","listeningcenter_03.jpg"]', 'The Center for Listening and Guidance for Fragile Personsin the socio-health network in the southern area of ​​Milan is a “window” open to the public (Fragile citizens with their family members) from Monday to Friday (9:30-12:30)',
  '["Organizer:", "Presented in:","The Center for Listening and Guidance for Fragile Personsin the socio-health network in the southern area of ​​Milan is a “window” open to the public (Fragile citizens with their family members) from Monday to Friday (9:30-12:30) The Center is supervised by some Operators coordinated by a Case Manager Nurse (Cinzia Pellegrini), with the support of Consultants who lend their activities free of charge in support of frailties. If you believe that you or a family member needs help, you can contact the completely free Milcare listening and orientation center.",
  "First level of listening:As well as recording, in a special form, access (with registration of consent to the use of personal and sensitive data) provides indications for less complex cases. The more complex cases are directed to a second level. ",
  "Second level of listening: Expert internal consultants with different skills are available, with the possibility of booking in-depth interviews in dedicated slots [eg: interviews with a psychologist, with an expert on legal / legal issues (eg support administrator; residence permits), reunification) or socio-economic needs. 3rd level consultancy outside the farmhouse (e.g.AssociazioneIncerchio, Casa della Carità, Caritas ambrosiana, WeMi Center). ",
"If there is an appropriate indication, it is proposed to some fragile Citizens who live at home in a condition of relative solitude, free participation in our Socializing Laboratories for Fragile Citizens (also thanks to a collaboration with the Coordination Office of the Social Keepers). "]');

INSERT INTO person (person_id, person_name, person_role, photo_address, long_description)
VALUES
(1, 'Bruno Andreoni', 'President', 'member_bruno.jpg', '["Contact for:", "Involved in:", "The Cascina Brandezzata project is now fully operational: the historic farmhouse located in via Ripamonti 428 has been completely renovated and is now home to a Hospice for Terminal Patients and an Interdepartmental University Center for training and research in Palliative Care and in Therapy of ache. There are three main purposes of the project:",
  "Assistance", "In May 2016, the first patients with end-stage diseases were admitted to the Hospice (accreditation procedures with the ATS of Milan were completed).The Hospice is included in the Palliative Care Network which all Milanese Citizens who need it can access for free. Milcare collaborates with the Maggiore Policlinico Hospital Foundation and with the Hospice manager to guarantee the quality of the treatments.",
  "Training and research","In Cascina Brandezzata there is the Interdepartmental University Center for Palliative Care which has been organizing Masters, Refresher Courses and Seminars for Medical and Nursing Students for several years; for doctors, nurses, psychologists, social workers, physiotherapists ...; for Family Assistants; for Volunteers.",
  "Information and communication","The Cascina Brandezzata project also provides information and communication activities for Milanese citizens to promote greater awareness of the needs of patients with advanced, incurable and / or terminal diseases and of people with serious psycho-physical-social frailties living in the our community.The Project, in its complexity, needs the help of the Citizenship both in terms of participation and awareness about the needs at the end of life, and in economic terms for the proper functioning of the assistance and scientific activities."]'),
(2, 'Arrigo Andreoni', 'Vice president', 'member_arrigo.jpg', '["Contact for:", "Involved in:", "Arrigo leads a team of professionals that provide leadership and support for Milcare international network -- engaged in nearly 1,800 communities across more than 40 countries and territories worldwide. He and his team facilitate the adaption of a set of Global Standards that make Milcare organizations unique and successful wherever they are in the world.",
  "Assistance", "Arrigo joined Milcare after serving as COO and SVP of Marketing at Milcare of Massachusetts Bay and Merrimack Valley (Boston) for three years. Portuguese by birth, Arrigo grew up in Mozambique and South Africa and has a wealth of international work experiences spanning many decades. He has worked in South Africa & Europe and Middle East in senior management positions including serving as the President, Europe, Middle East and Africa for Carlson Marketing Worldwide.",
  "Training and research","Arrigo brings a set of experiences from three diverse yet connected worlds such as Classical sales, product development and brand management for leading national corporations, Customer-focused transformation of leading international organizations and Strategic and operational leadership of professional services organizations",
  "Information and communication","In his role as Executive Vice President, International Network, Arrigo has responsibility for leading the development of the framework and strategies that support the Milcare Worldwide Regional Offices in Europe, Asia-Pacific, Latin America and Africa. He is also the primary relationship manager, in collaboration with the Regional Vice Presidents, interfacing with the national and local partner organizations in ways that will drive their success in building better communities and advancing the common good."]'),
(3, 'Cinzia Pellegrini', 'Manager', 'member_cinzia.jpg', '["Contact for:", "Involved in:", "Cinzia strategic leadership of the legal affairs of Milcare Worldwide for achievement of the organization’s goals and objectives, legal and regulatory compliance, protection of assets and intellectual property, and for transactional matters.",
  "Assistance", "Cinzia provides counsel to the executive management team and Board of Trustees on a wide range of issues including the maintenance of tax-exemption status, federal and state regulatory requirements, contracts, and grants, trademark and copyright, labor and employment, general non-profit corporate and governance matters. She has developed and strengthened the legal infrastructure of the organization to support it mission, both nationally and worldwide.",
  "Training and research", "Prior to joining Milcare Worldwide, Cinzia was in private practice for ten years in Washington D.C. where she specialized in representing trade associations and other tax exempt organizations",
  "Information and communication",
  "Cinzia received a Bachelor’s Degree from the University of Virginia and a Juris Doctorate from George Mason University. She is currently a member of the District of Columbia Bar and the Virginia State Bar."]'),
(4, 'Anna Andreoni', 'Counciler', 'member_anna.jpg', '["Contact for:", "Involved in:", "Anna Andreoni serves as Milcare Worldwide’s Chief Culture and Operations Officer. Her focus is to continue building a high-performing culture throughout the United Way network, which includes nearly 1,800 United Ways in more than 40 countries.",
  "Assistance","Working with a diverse staff, Ms. Andreoni works to connect Milcare’s unique culture with the network’s digital transformation, while keeping a focus on individuals and the communities Milcare serves. Ms. Andreoni oversees recruiting and retention, organizational development and learning, conferencing and events, along with operations and the legal team.",
  "Training and research","Ms. Andreoni earned a Bachelor of Science in Operations Research and Industrial Engineering from Cornell University, and has served on numerous nonprofit boards and industry associations focused on her passion to help others live better, healthier lives. She and her husband, Phil, have four adult children who live in Japan, New York, Los Angeles and Miami.",
  "Information and communication","Before joining Milcare Worldwide, Ms. Andreoni held senior roles in top organizations known for strong cultures of performance and execution. She led Recruitment Marketing and Diversity Recruiting at Walt Disney World; IT Recruitment and Organizational Effectiveness at Walmart; and served as the SVP of Human Resources and Talent at the franchised concept, Checkers and Rally’s Restaurants. Her approach builds upon a strong engineering background, including 10 years developing and selling technology solutions with IBM."]'), 
(5, 'Luca Andreoni', 'Marketing', 'member_luca.jpg', '["Contact for:", "Involved in:", "As president, Luca Andreoni leads all donor-facing functions that impact how the world engages with today’s Milcare. He is charged with delivering consistent, compelling and relevant experiences with the Milcare and its branded services including philanthropy, cause-related partnerships and various funding initiatives by individual, corporate and institutional donors, volunteers and partners.",
  "Assistance",
  "Luca leads marketing, communications, donor and investor relations and digital services functions that are critical to delivering a best-in-class donor experience to drive impact, growth and strengthen communities worldwide.Luca has more than 30 years of experience in various venture-backed and Fortune 100 technology companies, holding senior roles in sales, corporate development, business operations and marketing.",
  "Training and research","Before joining Milcare, Luca was president of the SunTrust Foundation and led the bank’s philanthropic and community impact work after originally joining the bank as head of marketing strategy and operations.Prior to joining SunTrust Bank, Luca led international marketing at NCR Corporation, responsible for lead generation, thought leadership and brand awareness across the firm’s industry groups globally.Luca has served as an adjunct professor of business management and entrepreneurial strategy at Georgia State University’s J. Mack Robinson College of Business. He has also served in an advisory capacity with the Federal Communications Commission (FCC) and The College Board. Luca formerly served as the chairman of the board of North Fulton Community Charities and currently serves as a member of Emory University Board of Visitors and board member of WellStar North Fulton Hospital. He has also held other director and advisory posts with private companies and nonprofit organizations.",
  "Information and communication",
  "Luca earned his Bachelor of Science in electrical engineering from Duke University, Master of Science in electrical engineering from Purdue University and Master of Business Administration from the Haas School of Business at the University of California, Berkeley."]');

INSERT INTO events (event_id, person_id, event_name, event_date, event_location, photo_address, short_description, long_description)
VALUES
(1, 4, 'Autumn socializing workshop', '2020-10-01 10:00:00', 'Milan, Italy', '["event_01.jpg", "autumn_workshop_1.jpg","autumn_workshop_2.jpg","autumn_workshop_3.jpg"]', 'An appointment which over time has found more and more interest and that is why this fourth edition in 2019 had to be split into two separate workshops: Workshop on Tuesday and that the Wednesday in order to accommodate all the applications received.',
  '["Organizer:","Service:","An appointment which over time has found more and more interest and that is why this fourth edition in 2019 had to be split into two separate workshops: Workshop on Tuesday and that the Wednesday in order to accommodate all the applications received.", "On this occasion, a restitution to citizenship of the summer socializing workshop held from June to September was attended, attended24 Seniors living in blocks of public housing (most reported by the Social Security Services of areas 4-5-6 of the Municipality of Milan) + 4 Guests of the Quintosole Accommodation House (located near Cascina Brandezzata).", 
  "All participants in the 5 Laboratories built in 2019 in Cascina Brandezzata will return their experience on the occasion of the Christmas party in Cascina Brandezzata scheduled for Tuesday 17 December (all Milanese citizens interested are invited)"]'),
(3,3,'Spring workshop', '2019-06-22 14:00:00', 'Pavia, Italy', '["event_02.jpg","spring_workshop_1.jpg","spring_workshop_2.jpg","spring_workshop_3.jpg"]', 'This is for the elderly and fragile people who live in the South Area of ​​Milan, are an opportunity to share some days with other people who have the same problems , accompanied by qualified personnel with recreational and occupational activities, building relationships and friendships.',
'["Organizer:","Service:","This is for the elderly and fragile people who live in the South Area of ​​Milan, have an opportunity to share some days with other people who have the same problems , accompanied by qualified personnel with recreational and occupational activities, building relationships and friendships. In each laboratory we try to explore new experiences and new emotions. At the end of each workshop we are proud to show everyone what we have achieved, learned and shared and that is why we always organize a big party.
", "In this just concluded Spring Laboratory we learned to sing and formed a real Choir, we remembered the lives, sometimes incredible and adventurous, of the participants and made an illustrated book, all of this we will present to you in Cascina Brandezzata, Saturday 22 June 2019 at 16:00 with a big party !"]'),
(2,5,'Territorial Hospital Program', '2020-06-22 10:00:00', 'Turin, Italy', '["event_03.jpg","Hospital_prog1.jpg","Hospital_prog2.jpg","Hospital_prog3.jpg"]', 'Considering some difficulties that emerged in the realization of the 11th Course for patients with incurable advanced neurological diseases and the 4th Course for terminal patients, Fondazione Milcare decided to modify the organizational structure by providing a single Course for Family Assistants.',
'["Organizer:","Service:","Considering some difficulties that emerged in the realization of the 11th Course for patients with incurable advanced neurological diseases and the 4th Course for terminal patients, Fondazione Lu.VI decided to modify the organizational structure by providing a single Course for Family Assistants.",
"On the website on the page dedicated to Training for Family Assistants, the Call for applications has been modified (now with a single application form). The draft program with calendar, currently published, will also be definitively approved at a meeting to be held on Tuesday 11 September (5.00 pm in Cascina Brandezzata) to which the teachers and tutors who have participated in the 11th course for family assistants will be invited. of Patients with incurable advanced neurological diseases and the 4th Course for Family Assistants of terminal patients.", "Join us!"]');

INSERT INTO involve (involve_id, person_id, service_id)
VALUES
(1,1,1),
(2,3,2),
(3,4,3);

INSERT INTO present (present_id, event_id, service_id)
VALUES
(1,3,1),
(2,2,2),
(3,1,3),
(4,2,3),
(5,3,3);
 
select * from services;
select * from person;
select * from events;
select * from involve;                    
select * from present;