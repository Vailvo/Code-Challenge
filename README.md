### Starting the Backend (backend must be done first to enable proper port assignment)

1. Navigate to /server/src, and run:
npm i 
to install backend dependencies

2. Install MongoDB on your machine. Run the service in the background.

3. Navigate to /server/data/db and initialize the database by running the following .js "script" (so to speak):

node create.mongodb.js

A message 'Database Initialized!' should appear.

4. Run the backend with 
npm dev

### Starting the Front end

1. Navigate to /client (up three levels from where you were in /server/data/db), and run:
npm i
to install frontend dependencies

2. Run:
npm start
to start the server.

3. When prompted if you want to switch to a different port, select 'yes.'

4. For development purposes, ensure your port 3001 is clear for React to assign to, as this one is whitelisted via CORS in the backend.

### Project Info:

1. Fully CRUD backend via PostMan App.

2. Front end partially completed, contains Index at home route, as well as a delete button for each trip
3. Frontend Index connected to backend route, others still need to be connected.

4. TODO's include:
- connect rest of React frontend CRUD to backend
- Abstract Trip into its own component to be reused
- Abstract CORS functionality to make it global, as opposed to repeated/file specific (in trips controller)
- Implement Elastic UI via Yarn
