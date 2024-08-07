const express = require('express')
// const cors = require('cors');
const app = express()

// app.use(cors());

const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send("there you are logged In")
})
app.get('/jokes', (req, res) => {
    res.send([
      {
        "id": 1,
        "name": "Why did the scarecrow win an award?",
        "joke": "Because he was outstanding in his field!"
      },
      {
        "id": 2,
        "name": "What do you call fake spaghetti?",
        "joke": "An impasta!"
      },
      {
        "id": 3,
        "name": "Why don’t skeletons fight each other?",
        "joke": "They don’t have the guts."
      },
      {
        "id": 4,
        "name": "How does a penguin build its house?",
        "joke": "Igloos it together!"
      },
      {
        "id": 5,
        "name": "Why don’t some couples go to the gym?",
        "joke": "Because some relationships don’t work out."
      },
      {
        "id": 6,
        "name": "What do you call cheese that isn’t yours?",
        "joke": "Nacho cheese!"
      },
      {
        "id": 7,
        "name": "Why did the math book look sad?",
        "joke": "Because it had too many problems."
      },
      {
        "id": 8,
        "name": "What did one ocean say to the other ocean?",
        "joke": "Nothing, they just waved."
      },
      {
        "id": 9,
        "name": "Why don’t scientists trust atoms?",
        "joke": "Because they make up everything!"
      },
      {
        "id": 10,
        "name": "What’s orange and sounds like a parrot?",
        "joke": "A carrot!"
      }
    ]
    )
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})