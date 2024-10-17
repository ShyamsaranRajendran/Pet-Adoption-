var express =require('express');
var router = express.Router();

router.get('/products',async function(req, res) {
    try {
        
        res.render('all_products', {
           
        });
    } catch (error) {
        console.error('Error finding :', error);
        res.status(500).send('Internal Server Error');
    }
});

//Exports 
module.exports=router;