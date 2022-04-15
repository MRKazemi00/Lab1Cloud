# Lab1Cloud
Lab 1 for Cloud course
Link to deployed application
https://mysterious-fortress-65470.herokuapp.com

URL to endpoint where my name is displayed:
https://mysterious-fortress-65470.herokuapp.com/RezaKazemi
First of i created my heorku account. 
I followed the guide in heorkus webiste and also followed this video:
https://www.youtube.com/watch?v=HIBVMhGO7wo
I created my application with express using npm and created my package.json. Then i created my index.js and added my endpoint "Reza kazemi" there. 
After that i tried my app locally and it worked. Then i created my git repo and added the my app to the repo. When that was done i logged in to heroku using the git bash.
I used the follwing commands to deploy my app to heroku:
heroku create
git push heroku main
heroku ps:scale web=1
heroku open.
This was done by following the guide by heroku : https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
