let express = require('express')
let products = require('./routes/products')

let app = express()
app.use(express.json())
// console.log(products)
app.use('/products',products)

app.get('/',(req,res)=>{
	res.json("Hello world!")
})


app.listen(5000,()=>console.log('Listening on PORT 5000'))