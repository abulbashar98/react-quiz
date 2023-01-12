# React Quiz

## Private Route

The private Route part of this project[Private Route](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/auth?file=src%2FApp.tsx)## Available Scripts

## Steps of using Firebase Realtime Database..

1. Create Database on RealTime Database.
2. Add Database Credential in Firebase init file using .env.local
3. import .json file in Firebase db.
4. To use database import Database using getDatabase() function from firebase/database
5. create Reference of the Node from database using ref(), pass database stored variable as first parameter of ref(), and name of Node as string in 2nd parameter.... e.g :-ref(videoRef, "videos")
6. create query using query() function, pass ref variable as 1st parameter, and other queryConstraints as 2nd,3rd,4th.... parameters...
   e.g:- query(videoRef,orderByKey())
7. fetch videos using firebase/database built in function get(), pass query holding variable as parameter... e.g get(videoQuery)
8. as per Convention promise and return of get(query) is stored in a variable called as "snapshot"
9. we can check if the promise has returned using snapshot.exists() boolean
10. if it does we can use snapshot.val() function to use data from request as per our query...
