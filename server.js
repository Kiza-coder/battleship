/* MODULES */
const express = require('express')

/* ENVIRONNEMENT */
const app =  express()
const PORT = 5000
app.listen(PORT, () => console.log('Server started on port ${PORT}')
);