import express from 'express'

const PORT = 5000
const app = express()
app.get('/',(req,res)=>{
  res.status(200).json('Server is working')
})
app.listen(PORT,()=>console.log('Server started on port: '+PORT))
