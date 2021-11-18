
const express = require("express")
const { Router } = express;
const arr = require("../arr");
const router = new Router()




router.get("/productos/:id", (req, res)=>{


    let idNum = req.params.id;

    let arrNew = arr.filter((x)=> x.id == idNum);
    console.log(arrNew);

    res.json({
        message: "Producto encontrado" 
    })
    })
   
let contador = 4

router.post("/productos?admin=true", (req, res)=>{

    if(req.query === "true"){

        let obj = {
            title: req.body.titile,
            price: req.body.price,
            thumbnail: req.body.thumbnail,
            id: contador +1,
            stock: true
        }
            arr.push(obj);
            res.send("Producto agregado!");

            console.log(req.body);
    

        res.send("Usuario no autorizado")
    }
})
   
        




router.put("/:id?admin=true", (req, res) =>{

        if(req.query === "true"){ 
    let index = arr.findIndex(x => {
        return x.id == req.params.id
    })
    arr[index]
    .title = req.body.titile
    .price = req.body.price
    
    
    
    

   res.send("Actualizado!")
        }
        res.send("Usuario no autorizado")
})


router.delete("/:id?admin=true", (req, res) =>{

        if(req.query === true){

     let newArr = arr.filter (x =>{
         return x.id == req.params.id

       res.send ({message: "Producto actualizado"})
    })

    arr = newArr
    console.log(newArr);
}
    res.send("Usuario no autorizado")
})

module.exports = router