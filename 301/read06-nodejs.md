# What Is Node.js?
Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google’s V8 JavaScript engine and libuv library.

## Node Is Built on Google Chrome’s V8 JavaScript Engine
The V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.

## Node Binaries vs Version Manager
Many websites will recommend that you head to the official Node download page and grab the Node binaries for your system. While that works, I would suggest that you use a version manager instead. This is a program that allows you to install multiple versions of Node and switch between them at will. There are various advantages to using a version manager. For example, it negates potential permission issues when using Node with npm and lets you set a Node version on a per-project basis.

## “Hello, World!” the Node.js Way
* Check Node is installed - node -v
* create a new file `hello.js`

## Introducing npm, the JavaScript Package Manager
As I mentioned earlier, Node comes bundled with a package manager called npm. To check which version you have installed on your system, type npm -v.

In addition to being the package manager for JavaScript, npm is also the world’s largest software registry. There are over 1,000,000 packages of JavaScript code available to download, with billions of downloads per week. Let’s take a quick look at how we would use npm to install a package.

### Installing a Package Globally
* `npm install -g jshint`
* `jshint index.js`

### Installing a Package Locally
* `npm init -y`
* `npm install lodash --save`
* run the script using `node test.js`

## What Is Node.js Used For?
After installing node and npm - These build tools come in all shapes and sizes, and you won’t get far in a modern JavaScript landscape without bumping into them. They can be used for anything from bundling your JavaScript files and dependencies into static assets, to running tests, or automatic code linting and style checking.

## What Are the Advantages of Node.js?
* Using JavaScript on a web server — as well as in the browser 
* Can do everything in the same language
* It speaks JSON