# Login, Registration Jwt

## Getting Started
### Requirements
* Node js (Latest)
* MongoDb up and Running on port ```27017``` and Database name as ```bigApp```

## Available apis
#### 1 . Registration api
```
Methos : Post
http://localhost:3000/bigApp/register
body {
	"username":"cool",
	"password":"cool",
	"email":"cool@gmail.com",
	"DOB":"26-05-1995",
	"role":"user"
}
response {
    "Message": "Successfully Registered"
}
```
#### 2 . Authenticate api ( to generate access token)
```
Methos : Post
http://localhost:3000/bigApp/authenticate
body {
	"username":"cool",
	"password":"cool"
}
response {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2FmODkxMGFhZTNjMTQ0NmZjYmM0M2YiLCJ1c2VyTmFtZSI6ImNvb2wiLCJyb2xlIjoidXNlciIsImVtYWlsIjoiY29vbEBnbWFpbC5jb20iLCJpYXQiOjE1NTUwMDc3NjR9.BrNXFIW95lxuMGup5xvmbwnrNlrWSa2PduNAmARcxh8",
    "message": "success"
}
```
#### 3 . List all the register User ( Only Admin can access)
```
Method : GET
http://localhost:3000/bigApp/listAll
response [
    {
        "username": "subbu",
        "DOB": "26-05-1995",
        "email": "subbufrom@gmail.com",
        "role": "Admin"
    },
    {
        "username": "mani",
        "DOB": "26-05-1995",
        "email": "mani@gmail.com",
        "role": "Admin"
    },
    {
        "username": "cool",
        "DOB": "26-05-1995",
        "email": "cool@gmail.com",
        "role": "user"
    }
]
```

#### 4 . To check for balance of paranthesis
```
Method : Post
http://localhost:3000/bigApp/balanced
body {
"key":"{{}}"
}
response {
    "username": "cool",
    "message": "Success",
    "attempts": 5
}
```
#### 5 . To Delete the registered user ( only admin can access)
```
Method : Delete
http://localhost:3000/bigApp/delete
body {
	"username":"cool",

	"email":"cool@gmail.com"
}
response {
    "message": "Successfully Deleted"
}
```
