# price-api

This back-end app is meant to cover all the functionalities that ArcelorMittal's exercise asked. Its focus is to provied values that are get from a repository, An exchange rate would be apply to these values.

## Installation

Use the following steps to make work this app.

1. Clone this repository or download it.
2. Put the app in a folder.
3. Using a terminal o cmd, go to the folder.
4. Being in the folder, write npm install and press enter, wait until all the packages are installed
5. Once the installation is finished, write npm start and press enter.

When the app is running, if everything is ok, you should see the following message.

```
price-api@1.0.0 start
> nodemon server.js

[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Listening on port 3001...
database connection success
```

## Components

This api has two routes and you should you the http protocal to call their endpoints. the rountes are **prices** and **user**

### prices

This route only has many endpoints, it has to be call with the http protocols. the endpotins are:

get -> get all prices
get -> passing a price id -> get a specific price
post -> passing a new price object within the body -> create a new price
patch -> passing a price id and the new values of a prices within the body -> update a existing price.
delete -> passing a price id -> delete a specific price

### user

This route only has one endpoint, it has to be call with the http protocol post, it is meant to call a repository that has all the users avialable in this project. You will not be able to create, edit or delete a user.

**### Disclaimer **

- Please do not delete any price, the project does not have a interface for creating a new one.
- As the project does not have a interface to create a price, if you need to create a new one, please let me know and I will create the price in the data base.




