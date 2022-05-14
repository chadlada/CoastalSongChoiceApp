-- createdb Songs
-- pgcli Songs


-- CREATE TABLE "Songs" (
--   "Title"          TEXT NOT NULL,
--   "Artist"  TEXT,
--   "Id"             SERIAL PRIMARY KEY
-- );

-- CREATE TABLE "SongsList" (
  
--   "SongId"  INT,
--   "UserId"  INT,
--   "Id"             SERIAL PRIMARY KEY
-- );

-- CREATE TABLE "Users" (
--   "Name"          TEXT NOT NULL,
--   "Email"  TEXT,
--   "Id"             SERIAL PRIMARY KEY,
--   "SongsListId" INT
-- );

TRUNCATE TABLE "Songs" RESTART IDENTITY;

Insert Into "Songs" ("Title", "Artist")
Values ('Cant Help Falling','Elvis Presley');
Insert Into "Songs" ("Title", "Artist")
Values ('1000 Years','Christina Perri');
Insert Into "Songs" ("Title", "Artist")
Values ('Better Together','Jack Johnson');
Insert Into "Songs" ("Title", "Artist")
Values ('Always Be My Baby','Mariah Carey');
Insert Into "Songs" ("Title", "Artist")
Values ('At Last','Etta James');
Insert Into "Songs" ("Title", "Artist")
Values ('Blackbird','The Beatles');
Insert Into "Songs" ("Title", "Artist")
Values ('Banana Pancakes','Jack Johnson');
Insert Into "Songs" ("Title", "Artist")
Values ('Beast of Burden','Rolling Stones');
Insert Into "Songs" ("Title", "Artist")
Values ('Barefoot Blue Jean Night','Jake Owen');
Insert Into "Songs" ("Title", "Artist")
Values ('Black Horse and the Cherry Tree','KT Tunstall');
Insert Into "Songs" ("Title", "Artist")
Values ('Brown Eyed Girl','Van Morrison');
Insert Into "Songs" ("Title", "Artist")
Values ('Budapest','George Ezra');
Insert Into "Songs" ("Title", "Artist")
Values ('Cant Always Get What You Want','Rolling Stones');
Insert Into "Songs" ("Title", "Artist")
Values ('Chasing Pavement','Adele');
Insert Into "Songs" ("Title", "Artist")
Values ('Chicken Fried','Zac Brown Band');
Insert Into "Songs" ("Title", "Artist")
Values ('Closer','Chainsmokers');
Insert Into "Songs" ("Title", "Artist")
Values ('Counting Stars','One Republic');
Insert Into "Songs" ("Title", "Artist")
Values ('Could You Be Loved','Bob Marley');
Insert Into "Songs" ("Title", "Artist")
Values ('Aint No Sunshine','Bill Withers');
Insert Into "Songs" ("Title", "Artist")
Values ('Aint No Mountain High Enough','Marvin Gaye & Tammi Terrell');
Insert Into "Songs" ("Title", "Artist")
Values ('A Whole New World','Alladin');
Insert Into "Songs" ("Title", "Artist")
Values ('Angel','Shaggy');
Insert Into "Songs" ("Title", "Artist")
Values ('Bad Moon Rising','Creedence Clearwater Revival');
Insert Into "Songs" ("Title", "Artist")
Values ('Billi Jean','Michael Jackson');
Insert Into "Songs" ("Title", "Artist")
Values ('Country Roads','John Denver');
Insert Into "Songs" ("Title", "Artist")
Values ('Crash Into Me','Dave Matthews Band');
Insert Into "Songs" ("Title", "Artist")
Values ('Creep','Radiohead');
Insert Into "Songs" ("Title", "Artist")
Values ('Cruisin Together','Huey Lewis & Gwyneth Paltrow');
Insert Into "Songs" ("Title", "Artist")
Values ('Cry Me A River','Justin Timberlake');
Insert Into "Songs" ("Title", "Artist")
Values ('Daughters','John Mayer');
Insert Into "Songs" ("Title", "Artist")
Values ('Dog Days Are Over','Florence and The Machine');
Insert Into "Songs" ("Title", "Artist")
Values ('Dont','Ed Sheeran');
Insert Into "Songs" ("Title", "Artist")
Values ('Dont Speak','No Doubt');
Insert Into "Songs" ("Title", "Artist")
Values ('Dont Stop Believing','Journey');
Insert Into "Songs" ("Title", "Artist")
Values ('Dont Know Why','Norah Jones');
Insert Into "Songs" ("Title", "Artist")
Values ('Dreams','Fleetwood Mac');
Insert Into "Songs" ("Title", "Artist")
Values ('Drunk On You','Luke Bryan');
Insert Into "Songs" ("Title", "Artist")
Values ('Drive','Incubus');
Insert Into "Songs" ("Title", "Artist")
Values ('Drops of Jupiter','Train');
Insert Into "Songs" ("Title", "Artist")
Values ('Electric Love','BORNS');
Insert Into "Songs" ("Title", "Artist")
Values ('Everlong','Foo Fighters');
Insert Into "Songs" ("Title", "Artist")
Values ('Exs and Ohs','Elle King');
Insert Into "Songs" ("Title", "Artist")
Values ('Fast Car','Tracy Chapman');
Insert Into "Songs" ("Title", "Artist")
Values ('Feel It Still','Portugal, The Man');
Insert Into "Songs" ("Title", "Artist")
Values ('Finess','Bruno Mars');
Insert Into "Songs" ("Title", "Artist")
Values ('Fly Like An Eagle','Steve Miller Band');
Insert Into "Songs" ("Title", "Artist")
Values ('Fly Me To The Moon','Frank Sinatra');
Insert Into "Songs" ("Title", "Artist")
Values ('Follow You Into The Dark','Death Cab For A Cutie');
Insert Into "Songs" ("Title", "Artist")
Values ('Folsom Prison Blues','Johnny Cash');
Insert Into "Songs" ("Title", "Artist")
Values ('Forget You','CeeLo Green');