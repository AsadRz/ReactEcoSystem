# ReactEcoSystem

Building a React Project with Modern Techniques Using Ecosystem tools like Redux, Thunk, Reselect, styled components, Testing alot more

Building Modern React Projects:

- React Ecosystem
  --- Why we use the React Ecosystem?
  Answer: - As in Basic React Projects, it is really hard to manage all the state As React Developers has made this in a way so React Developer make data management decisions by themselves which actually comes with a lot of experience and logical minds so that’s where React Ecosystem tools including:

. Building a React app from scratch without using create-react-app boilerplate generator
. Redux
. Thunk
. Reselect
. Styled Components
. Testing the React Ecosystem

and all of them are beneficial for you who are responsible for the data management and to make your components easily manageable and expandable. Without using them we will be left with Huge and Tangled Components who are actually managing all the states and say Data-Management themselves.

What Do we actually need for React ?

1- index.html (What is sent to Client and What React will render our app into)
2- support for ES6 (since we be using modern JS techniques and features)
3- webpack (take care of actually building the app and allows us to use things like CSS modules to style our app and for development)
4- root component (Base of our DOM tree | Container who is actually holding all of the elements inside it)
5- react-hot-loader (which allow us to see the changes immediately without having to refresh to see changes)

---

Building an React Application From Scratch

---

- Create a Folder and name it whatever you want
- run the command npm init -y in the terminal and make sure you are in the same directory that will create a package.json file
- create two directories inside out root directory 1- public 2- src
- create index.html file inside public folder having this code

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1,
    shrink-to-fit=no"
    />
    <title>React Eco System</title>
  </head>
  <body>
    <div id="root"></div>
    <noscript>Please Enable Javascript to view the website</noscript>
    <script src="../dist/bundle.js"></script>
  </body>
</html>

- Now to add support for ES6 open terminal and run command

npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react

- after installation we need to create .babelrc file in a root directory and that will tell Babel transpiler what presets and plugins to use to transpile our code

- inside .babelrc file we will define JSON object like this we wwill set presets in it like this
  {
  "presets": ["babel/preset-env", "babel/preset-react"]
  }

- Now to create three files inside of our source folder
  1- index.js
  2- App.js
  3- App.css

- Now in index.js we will include

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

- App.js includes

import React from 'react';
import './App.css';

const App = () =>
{

<div className="App">
<h1>Hello, World</h1>
</div>
}

export default App;

- App.css includes basic styling like
  .App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  }

* Install react and react dom packages too using this command

npm install react react-dom

- Buidling and Serving with webpack now
  - It will take code in source directory and perform operations on it like converting JSX to JS and ES6
    and host our public directory
