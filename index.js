const express = require('express')
const http = require('http')
const cors = require('cors')
const axios = require('axios')
const app = express()
const server = http.createServer(app)
const PORT = 5000
const botSettings = require('./file/bot.json')

app.use(express.json())
app.use(cors())

app.post('/api/send-test-to-telegram', (request, response) => {
    const text = `новый тест: <code>${JSON.stringify(request.body)}</code>`

    axios.get(`https://api.telegram.org/bot${botSettings.token}/sendMessage?chat_id=${botSettings.chatID}&text=${encodeURI(text)}&parse_mode=HTML`)
})

server.listen(PORT, () => console.log('server working'))