var express = require('express');
const products = require('../products');
var router = express.Router();


// 5 .Créez la route : /products/ : Affiche la liste des produits depuis products.json au format JSON.
router.get("/cpus",function(req, res,next){
    res.json(
     products,
    );
 });

   //7. Ajoutez la route : /products/:id : Affiche les détails du produit associé à id.
//Exemple : /products/LENOVOX230
 router.get("/cpus/:id",function(req, res,next){
    const id=req.params.id
    console.log("id : " + id)
    res.json(
        products[id]
    );
 });

 //8.Ajoutez la route : /products/:id/:qt : Affiche le prix total pour qt fois le prix du produit id.
//Exemple : /products/LENOVOX230/10 
router.get("/cpus/:id/:qt",function(req, res,next){
    const id=req.params.id
    const qt=req.params.qt
    console.log("id : " + id)
    res.json({
        "id":id,
        "qt":qt,
        "unit_price": products[id]["price"],
        "total_price": products[id]["price"]*qt,
       });
 });
//9. Ajoutez la route : /products/instock/:qt : Afficher seulement les produits dont le stock est supérieur ou égal à qt.
//Exemple : /products/instock/100
router.get("/instock/:qt",function(req, res,next){
    let ptab = [];
    for (prod in products){
        if (products[prod].stock >= req.params.qt) {
            ptab.push(products[prod]);
        }
    }
    res.json(ptab);
 });
  module.exports = router;