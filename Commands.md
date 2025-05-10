# The Main Commands in Course

## Node.js and NPM Basic Commands
- `node -v` : Check Node.js version
- `npm -v` : Check NPM version
- `npm init` or `npm init -y` : Initialize a new Node.js project (creates package.json)
- `npm install <package-name>` : Install a package locally
- `npm install -g <package-name>` : Install a package globally
- `npm install --save-dev <package-name>` : Install a package as a development dependency
- `npm uninstall <package-name>` : Remove a package

## Project Running Commands
- `node <filename.js>` : Run a JavaScript file with Node.js
- `npm start` : Run the application (if defined in package.json)
- `npm run dev` : Run the application in development mode (if defined in package.json)

## Common Development Commands
- `npm install nodemon --save-dev` : Install nodemon for development
- `npm install express` : Install Express.js framework
- `npm install dotenv` : Install dotenv for environment variables
- `npm install mongoose` : Install Mongoose for MongoDB
- `npm install cors` : Install CORS middleware
- `npm install body-parser` : Install body-parser middleware

## Git Commands (Version Control)
- `git init` : Initialize a new Git repository
- `git add .` : Add all files to staging
- `git commit -m "message"` : Commit changes
- `git push` : Push changes to remote repository
- `git pull` : Pull latest changes from remote repository

## Database Commands (MongoDB)
- `mongod` : Start MongoDB server
- `mongo` : Open MongoDB shell
- `show dbs` : Show all databases
- `use <database-name>` : Switch to specific database

## Testing Commands
- `npm test` : Run tests (if configured)
- `npm run test:watch` : Run tests in watch mode (if configured)

## Additional Useful Commands
- `npm audit` : Check for package vulnerabilities
- `npm update` : Update all packages
- `npm list` : List installed packages
- `npm run build` : Build the application (if configured)
