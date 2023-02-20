var express = require('express');
const os = require('os');
var router = express.Router();

/* GET os listing. */

    //2. Ajoutez une route à votre projet: /os/
router.get("/st",function(req, res,next){
   res.json({
    hostname:os.hostname(),
    type:os.type(),
    platform:os.platform(),
   });
});

    //3. Ajoutez la route: /os/cpus/ : Affiche la liste des processeurs.

router.get("/cpus",function(req, res,next){
    res.json(
     os.cpus()
    );
 });

   //Ajoutez la route: /os/cpus/:id : Affiche les informations relative à un seul processeur.
   //Exemple : /os/cpus/0 Réponse :
 router.get("/cpus/:id",function(req, res,next){
    const id=req.params.id
    console.log("id : " + id)
    res.json(
        os.cpus()[id]
    );
 });
  module.exports = router;