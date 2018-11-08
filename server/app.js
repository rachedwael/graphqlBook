const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema=require('./schema/schema')
const app=express()
const mongoose= require ('mongoose')
mongoose.connect('mongodb://wael:wael30@ds253203.mlab.com:53203/gql-test',{ useNewUrlParser: true })
mongoose.connection.once('open',()=>{
    console.log('connected to DataBase')
})
app.use("/graphql",graphqlHTTP({
schema,
graphiql:true
}))
app.listen(4001,()=>{
    console.log('now listening for requests on port 4000');
})