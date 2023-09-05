import { Express } from "express";

const app = Express()

app.get('/', (req,res) => {
    res.send('Express vercel app response')
})

app.listen(5000, ()=> {
    console.log('App is running')
})