# webpack-bootstrap-fontawesome
Webpack Bootstrap FontAwesome template 
This template is just what you'll need to start a website. For some reason, I couldn't find one when I search so here is the one that I put together.

This template has a lot of goodies so lets go over them:

1. It has the latest version of Bootstrap 3.35
2. It has version 4 of Fontawesome
3. It also comes with Ladda, this is super cool since it allows you to have loading spinners inside your buttons when they are click. Ladda comes with an API so is easy to use

# How to Use
Clone the repo and type: 
npm install
This will bring all the modules we have listed in package.json so when you load the UI is not a long red list of 404s.

Open a terminal window and type:
npm run build

Open Another terminal window and type:
npm run dev

Now go http://127.0.0.1:8000. I defaulted the port to 8000 instead of 8080 because all apps run on 8080. You can change the port value to anything you want by going to the webpack.config.js file and location the port.

Since you are running webpack with the --watch switch behind the scenes when you typed npm run build, this means all you need to do is make your change and save, and in the browser simply reload. No need to run webpack ever again.

This is the barebone to any app or site, if you feel like contributing or think I missed something out, please do a PR.



