# Main Learnings
* Deploying to Heroku is just like deploying to GitHub Pages.
* Similar to deploying a JavaScript app into a web browser using a live server or GitHub pages, we can deploy a backend JavaScript app like Node.js to Heroku server.

# Setup
* Similar to GitHub, Heroku also has a command line interface (CLI) to perform common actions like create app, deploy code, and run app.
* Similar to GitHub login on the terminal, Heroku login can also be performed.
* package.json is a file which is used by Node's dependency manager.

# Common Heroku commands
* `$ heroku login` - to log into Heroku account
* `$ heroku create` - to create app on heroku
* `$ git push heroku main` - to deploy code on heroku servers
* `$ heroku ps:scale web=1` - to run one instance of the app
* `$ heroku open` - to open app in browser
* `$ heroku logs --tail` - to view recent server logs in terminal
