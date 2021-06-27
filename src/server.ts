import express from 'express'

const app = express()

app.get('/test', (request, response) => {
  return response.send('GET')
})

app.post('/test-post', (request, response) => {
  return response.send('POST')
})

app.listen(3000, () => console.log('✨ server started'));

