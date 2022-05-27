const { Router } =require('express');
const router = Router();

router.get('/test', (req,res)=> {
    const data = {
        "name": "Andres",
        "email": "andres@gmail.com"

    }
    res.json({data});
});

module.exports = router;