# Fixes logs

## Database:

#### 2020-05-16 @alaamjadi says:

    1. db.sql >> Try to use DATETIME, check this out https://www.w3schools.com/sql/sql_dates.asp
    2. db.sql >> Increase the photo_addres size
    3. db.sql >> service/staff they should be all connected, so each of them should have two foreign keys.
    4. db.sql >> Revise Involve/Has, present tables
    5. db.sql >> Event-Staff table missing

#### 2020-05-16 @j.aysa says:

    1. postgreSQL does not have it
    2. Done!
    3. No!! it is not like this, no need to have it!
    4. Done!
    5. No need to have it!

#### 2020-05-24 @mohammad says:

    After having tutoring lesson with @MattiaGianotti I think:
    6. db.sql >> line 22, remove staff_id key since we have it in Involve/Has table and it would be redundant.
    7. db.sql >> line 28, change "Involve/Has" to "Involve" since "/" character is not an acceptable character.
    8. db.sql >> Try it on development environment to see if it works!
    
#### 2020-05-25 @j.aysa says:

    6. db.sql >> line 22, remove staff_id key since we have it in Involve/Has table and it would be redundant.-->done
    7. db.sql >> line 28, change "Involve/Has" to "Involve" since "/" character is not an acceptable character. --> done
    8. db.sql >> Try it on development environment to see if it works! --> worked
    also I've changed the staff entity by deleting the event id


### 2020-06-04 @mohammad says:

    7. db.sql >> Rmove the static information from DB and add them into HTML. "Organizer:", "Presented in:", "Contact for:" and "Involved in:".

