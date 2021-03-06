serverless-spike
====================
A sandbox playground for testing out the serverless framework.

Currently contains a couple of microservices that intend to be deployed onto AWS Function-As-A-Service (lambda).

PREREQUISITES
--------------
* Install Node and NPM
* Install the serverless framework 
```javascript
npm install -g serverless
```
* Change directory to one of the api subdirectories
* Install node packages: "npm install"
```javascript
npm install
```
* Create an AWS account with VPC, Roles, Cognito and Security Groups all setup and ready to go

CREATE A NEW SERVICE
--------------------
```javascript
serverless create --template aws-nodejs --name [SERVICE_NAME]
```

TESTING
-------
```javascript
serverless invoke local --f functionName -l
```

DEPLOY
----------
```javascript
serverless deploy -v
```

TEAR DOWN (removes everything)
----------
```javascript
serverless remove -v
```
