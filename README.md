# ProjectSetup

# Demo API with Mocha and nyc
    
   Demo APIs Microservice having 3 endpoints 
     GET / 
     GET /hello/{slug} 
     POST /post 

#To Run project basic setup
 
  define your configuration in config/default file 
  run cmd "npm install" to install all dependencies

# To Run project in devevelopment mode

  run cmd "npm run devstart"
  You find swagger Documentation on url- "http://localhost:4000/api/v1/docs" 

#To build project 

  run cmd "npm run build" it will transpile project in es5
  run cmd "npm start" it will runs on "http://localhost:4000/api/v1/docs"
  

#To build docker image 

  use existing docker file 
  run cmd "docker build -t {imageName} ." 

# To test and build coverage report 

   Build the project using cmd "npm run build"
   Press contol c to exit program
   Run cmd "npm test"

# Creating a Pod
    use demoPod.yaml for creatind pod
    run cmd "kubectl create -f demoPod.yaml"

# For setting up API gateway 
   use base URI "http://localhost:4000/api"