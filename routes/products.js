let express = require('express')
let router = express.Router()

// router.get('/',(req,res)=>{
// 	res.json(
// 		[
// 	{
// 		id:'001',
// 		name:'Acer predator',
// 		qty:100,
// 		price:3000
// 	},
// 	{
// 		id:'002',
// 		name:'Alianware',
// 		qty:80,
// 		price:2000
// 	},
// 	{
// 		id:'003',
// 		name:'Republic of Gamers',
// 		qty:70,
// 		price:2000
// 	},
// 	{
// 		id:'004',
// 		name:'MSI-Gamiing',
// 		qty:50,
// 		price:1000
// 	}
// 	]
// 	)
// })

router.post('/',(req,res)=>{
	let user_name = req.body.user
	let user_phone = req.body.number
	// let user_mail = req.body.mail
	let product_id = req.body.p_id
	console.log(`Name: ${user_name}, Phone: ${user_phone},Product: ${product_id}`)
	res.json({
		status:"Done"
	})
})

module.exports = router