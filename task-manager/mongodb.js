
// const mongodb = require ('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// // console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne ({ _id: new ObjectId("6197eec223bce18a9498f5bc")}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 23 }).toArray((error, users) => {
    //     console.log(users)
    // })

    db.collection('tasks').findOne({ _id: new ObjectId("61986f02c5cb59a9acf97849") }, (error, task) => {
        console.log(task)
    })
    db.collection('tasks').find({ completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
   
})