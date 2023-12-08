import express from 'express';


const express = require('express')

const app = express ();

const PORT = 5500;


// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// error handling middleware

app.use((err, req, res, next) => {
    res.status(err.status ?? 500).send(err.message ?? 'Error!');
})

// start the server

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});