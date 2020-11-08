# githubviewer-be

## CAUTIION

app is not using credentials so after several Github's API consumption, it's going to start returning 403


## Instructions: 

Install dependencies:
```
npm install 
``` 

serve backend:
```
npm run start 
``` 
MongoDB is using an in-memory build in order to make the execution simplier.

## API:
- GET: /repositories/:orgName
- GET: /repositories/:orgName/:repoName
- POST: /tracked
- GET: /tracked



You can also use frontend for this app in:

https://github.com/puroboros/githubviewer-fe
