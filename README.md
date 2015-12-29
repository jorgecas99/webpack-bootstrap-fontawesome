# webpack-bootstrap-fontawesome

Webpack Bootstrap FontAwesome template.
This template is just what you'll need to start a website. For some reason, I couldn't find one when I searched so here is the one that I put together.

This template has a lot of goodies so lets go over them:

- It comes with the latest version of [Bootstrap 3.3.5](http://getbootstrap.com)
- It comes with version 4.5 of [FontAwesome](https://fortawesome.github.io/Font-Awesome)
- It also comes with Ladda, in case you don't know what that is, this is a super cool effect that allows you to have loading spinners inside your buttons when they are click. `jQuery Ladda` comes with an API so is easy to use. Check it out [here](https://github.com/hakimel/Ladda)
- It comes with HTML5 routes, which are also built-in onto Webpack. Shall you need to have more than 1 html page, it will be easy to manage via `webpack.config.js`. I added soccer.html and another.html files so you can test the urls and see that is working. NOTE: when you add/modify/remove a route, you must do a `Build` and run `Dev` in order to see the changes. Also get used to dumping the `public` folder everytime you build since it will preserve older files in there which may create a cache conflict when you are introducing new behavior.
- Bootstrap skin is easy to change, since shop for the right skin in [BootsWatch.com](https://bootswatch.com) and copy the variables and bootswatch LESS content to bootstrap.config.less. I have the two files in the same location but you can disjoin them and import one into another if you wish to have more granular control.


## How to Use
Clone the repo and type: 

```
$ npm install
```
This will bring all the modules we have listed in package.json so when you load the UI is not a long red list of 404s.

Open a terminal window and type:

```
$ npm run build
```
Open Another terminal window and type:

```
$ npm run dev
```

Now go `http://127.0.0.1:8000`. I defaulted the port to 8000 instead of 8080 because all apps usually run on 8080. You can change the port value to anything you want by going to the `webpack.config.js` file and location the `PORT` value.

Since you are running webpack with the `--watch` switch behind the scenes when you typed `npm run build`, this means all you need to do is make your change and save, and in the browser simply reload. No need to run webpack ever again.

This is the barebone to any app or site, if you feel like contributing or think I missed something out, please do a PR.




