# Coding Challenge - Full Stack Developer
- data graph using NodeJS, SASS, Express, HTML and JavaScript
- JEST Unit testing framework used to test the routes

# Usage
- `git clone https://github.com/karanjekaramruta/abn-amro-coding-challenge.git`
- `cd abn-amro-coding-challenge`
- cd api
- `npm install` >> this would install all necessary dependencies
- `touch .env` >> creates a .env file
- add 2 entries :
  	PORT=3000
  	MONGODB_URI=mongodb://localhost:27017/test
- `npm start` >> this would create a 'test' database in mongodb
- ctrl+c >> stop the server
- `npm run migrate` >> this would migrate data to database using migrations.js
- `npm test` >> this would ensure that /data GET route is working
- `npm start` >> start the server again
- view `index.html` in browser to see the graph data
 
