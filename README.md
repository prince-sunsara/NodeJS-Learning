# Node JS

    > An open source server environment
    > JavaScript can be used on the server
    > A single language for both frontend and backend

### What is NodeJs?

    > nodeJS is a JavaScript which execute on a server
    > it works on asynchronous non-blocking i/o model
    > in nodeJS single thread can manage multiple connections

### The basics of frontend and backend

### 1. Cliend Side

    > sent a request to server
    > call it frontend
    > html, css and js

### 2. Server Side

    > sent response to cliend
    > call it backend
    > nodeJS

### Asynchronous non-blocking i/o model

    > when you run nodejs on server then its perticular thread can manage multiple connections
    > it simply means, never block any code just continue reading

### NPM:

    > Node Package Manager
    > it manage package of node

### Commands:

    > node --version ---> to check version of node
    > npm --version --> to check version of npm
    > npm init ---> initialize project as node project
    > npm install package / npm i package ---> to install nodejs package
    > npm i -g package ---> it install package globally
    > npm uninstall package ---> uninstall package

### What is node module?

    > node module is a folder, that has all the dependencies that comes from internet
    > you can use them for your work

### What is dev dependencies?

    > there are some dependencies which we want to just use at development time
    > this type of dependencies known as dev dependencies

### package.json

    > contains all the information about your project
    > it has all the packages that you install as dependencies

### package-lock.json

    > it has dependencies tree as it is
    > its like all the dependencies that needed to run the dependencies you installed(for eg express)

### Synchronous JavaScript

    > As the name suggests synchronous means to be in a sequence,
    > i.e. every statement of the code gets executed one by one.
    > So, basically a statement has to wait for the earlier statement to get executed.
    > synchronous code will block further execution of the remaining code until it finishes the current one.

### Asynchronous JavaScript

    > Asynchronous code allows the program to be executed immediately

#### Comman Js module

    > it is import like this
        const fs = require("fs");

#### EchmaScript module

    > it is import like this
        import { readFile } from 'fs'
