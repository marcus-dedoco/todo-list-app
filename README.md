# Todo List App

###### This is a Todo List App showcasing MERN Full-stacks development.

**MongoDB Atlas | Express.js | React.js | Node.js**

## Application features

- Users can register / into the App
- Users are authenticated with JWT that allows access for 1 hour before the token expires
- Users are redirected to dashboard as long as token is valid
- Users have to option to logout
- Users can Add/Delete tasks to their list which will be stored to database
- Users have their own list tagged to their account
- Users will not be able to see other users list or tasks

## Prerequisite

**Must have**

- node.js - https://nodejs.org/en/
- MongoDB Atlas - https://www.mongodb.com/cloud/atlas

**Good to have**

- Git - https://git-scm.com/
- Github - https://github.com/
- Heroku - https://www.heroku.com/

## Setup

**Edit the file "/config/default.json" and replace the values for "mongoURI" and "jwtSecret"**

```
{
  "mongoURI": "<YOUR MONGODB ATLAS URI WITH CREDENTIALS>",
  "jwtSecret": "<YOUR JWT SECRET"
}
```

**Install server dependencies**

```
npm install
```

**Install client dependencies**

```
cd client
npm install
```

**Run Server and Client from "/"**

```
npm run dev
```

**Build for production**

```
cd client
npm run build
```

## Demo link

###### https://peaceful-ravine-04166.herokuapp.com/
