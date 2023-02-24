import express from 'express'

const PORT = 5000
const app = express()
app.use(express.json())
app.get('/',(req,res)=>{
  console.log(req.query)
  res.status(200).json('Server is working!')
})
app.post('/',(req,res)=>{
  console.log(req.body)
  res.status(200).json('Server is working (post)')
})
app.listen(PORT,()=>console.log('Server started on port: '+PORT))

