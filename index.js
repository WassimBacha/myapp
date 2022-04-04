
const express = require('express')

const app = express();
app.use(express.json())

const event = require('./routes/api/event-api')
const user = require('./routes/api/user-api')
const auth = require('./routes/api/auth-api')
const reservation = require('./routes/api/reservation-api')
app.use('/api/event',event)
app.use('/api/user',user)
app.use('/api/auth',auth)
app.use('/api/reservation',reservation)

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))

