# ScrumPoker-Frontend
Scrum poker is a consensus-based, gamified technique to estimate the complexity and effort of a software feature. Make estimates with your remote teammates with this simple and powerful app. To begin with, please log in with your email and create the user stories for estimation (if there is no story has been created yet). Then you may select the user story and rate your story point on a particular user story. To further secure the integrity of the vote, you will see the story point result only when you 
submitted your story point. 

## How to start my app
Development Environment: You may clone the code (both the frontend and backend) and start the application through the local host.  
Production Environment: You may deploy the application on the AWS cloud service, please see #How to deploy on cloud.

## How to deploy on cloud (frontend)
1. Clone my code to connect my repository
2. Open IDE and select show npm script (inside package.json)
3. After selecting "build", the file of "Build" will be generated 
4. Create an AWS S3 Bucket and go to Object Tag
5. Drag ALL the files inside the "Build" file
6. Open the Properties Tab and scroll down to get the link (Bucket website endpoint) in the Production Environment.
PS (You may encounter CORS issues, please change the CORS setting in your frontend and amend the code inside the "resource" file once you got the Bucket website endpoint from AWS S3)

## How to deploy on cloud (Backend)
1. Please change the CORS setting by adding the Bucket website endpoint in (@CrossOrigin)
2. Select build.gradle, build, and assemble the newly created jar file
3. Utilize the cross-platform FTP application and upload the jar file
4. You may rent a virtual machine via AWS EC2
5. Utilize SSH client to remote control the virtual machine
6. Select the correct depository and find out your file 
7. Run it by the Linux command such as {nohup java -Xmx200m -jar project_backend-0.0.1-SNAPSHOT.jar }
8. Done!
