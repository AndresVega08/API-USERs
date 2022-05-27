const { Router } = require('express');
const { route } = require('.');
const router = Router();
const _ = require('underscore');

const users = require('../sample');

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    const {name, email, password } = req.body;
    if(name && email && password){
        const id = users.length + 1;
        const newUsers = {id,...req.body};
        users.push(newUsers);
        res.json(users);
    } else {
        res.status(500).json({error: 'There was an error'});
    }
    
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const {name, email, password } = req.body;
    if( name && email && password) {
        _.each(users, (user, i) => {
            if(user.id == id ) {
                user.name = name;
                user.email = email;
                user.password= password;
               
            }
        });
        res.json(users);
    } else {
        res.status(500).json({error: 'There was an error'});
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    _.each(users, (user, i) => {
        if(user.id == id){
            users.splice(i, 1);
        }
        res.send(users);
    });
});


module.exports = router;
