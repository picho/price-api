# price-api

This back-end app is meant to cover all the required functionalities described in ArcelorMittal's case study. Its focus is to provide values that are taken from a repository. An exchange rate is to be applied to these values.

## Installation

Use the following steps to make this app work.

1. Clone this repository or download it.
2. Put the app in a folder.
3. Using a terminal o cmd, go to the folder.
4. Once in the folder, write ```npm install``` and press enter. Wait until all the packages are installed.
5. Once the installation is finished, write ```npm start``` and press enter.

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

This api has two routes and you should use the http protocols to call their endpoints. The rountes are **prices** and **user**.

### prices

This route has many endpoints. It has to be called with the http protocols. The endpotins are:

get -> get all prices.
get -> sending a price id -> get a specific price.
post -> sending a new price object within the body -> create a new price.
patch -> sending a price id and the new values for the price within the body -> update an existing price.
delete -> sending a price id -> delete a specific price.

### user

This route only has one endpoint. It has to be called with the http protocol post. It is meant to call a repository that has all the available users. You will not be able to create, edit or delete a user.

**### Disclaimer **

- Please do not delete any price, the project does not have an interface for creating a new one.
- As the project does not have an interface to create a price, if you need to create a new one, please let me know and I will create the price in the data base.




