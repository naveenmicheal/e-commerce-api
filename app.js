let express = require('express')

let app = express()

app.get('/',(req,res)=>{
	res.json("Hello world!")
})

app.listen(5000,()=>console.log('Listening on PORT 5000'))