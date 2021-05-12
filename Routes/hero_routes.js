const express = require('express')
let router = express.Router()
const hero = require('../hero/hero')
const Hero = require('../models/hero_model')
const {heroValidators} = require('../Validation/hero.validation')

router.get('/hero', async (req,res) => {
    // const position = req.body.position

    // if (position) {
    //     const filteredData = hero.filter(data => {
    //         return data.position.toLowerCase() == position.toLowerCase()
    //     })
    //     res.status(200).send({
    //         data: filteredData,
    //         message: 'Success'
    //     })
    // }
    // res.status(200).send({
    //     data: hero,
    //     message: 'Success'
    // })
    try {
        const allData = await Hero.find({})
        res.status(200).send({
            data: hero,
            message: 'Success'
        })
    } catch (error) {
        res.status(400).send({
            message: error
        })
    }
    
})
router.post('/hero/position', async (req,res) => {
    const position = req.body.position

    // if (position) {
    //     const filteredData = hero.filter(data => {
    //         return data.position.toLowerCase() == position.toLowerCase()
    //     })
    //     res.status(200).send({
    //         data: filteredData,
    //         message: 'Success'
    //     })
    // }
    // res.status(400).send({
    //     message: 'Position is required'
    // })

    try {
        const findData = await Hero.find({position}).exec();
        res.status(200).send({
            data: findData,
            message: 'Success'
        })
    } catch (error) {
        res.status(400).send({
            message: error
        })
    }
})

router.get('/hero/:id', async (req,res) => {
    const id = req.params.id;
//     const findHero = hero.find(data => {
//         return data.id == id
//     })
//     console.log(findHero);
//    return res.status(200).send({
//         statusCode: 200,
//         data: findHero ? findHero : {},
//         message: 'Success'
//     });
try {
    const findData = await Hero.findOne().exec();
    res.status(200).send({
        data: findData,
        message: 'Success'
    })
} catch (error) {
    res.status(400).send({
        message: error
    })
}
})

router.post('/hero', async (req,res) => {
    try {
        const data = req.body

        // const result = await heroValidators.validateAsync(data);
        // if(data.id == undefined || data.name == undefined || data.position == undefined) {
        //     res.status(400).send({
        //         message: 'Missing parameters!'
        //     })
        // }hapi/joi validation
         // hero.push(req.body) -- for static storage

        const newHero = new Hero({
            id: data.id,
            name: data.name,
            position: data.position
        })
        await newHero.save()
 
        res.send({
            statusCode: 200,
            message: 'Success'
        });
        
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    }
   

})

router.delete('/hero/:id', async (req,res) => {
    const id = req.params.id;
//      this.hero = hero.filter(data => {
//         return data.id != id
//     })
//    return res.status(200).send({
//         statusCode: 200,
//         data: this.hero,
//         message: `Successfuly deleted Id: ${id}`
//     });
try {
    const findData = await Hero.findOneAndDelete({id}).exec()
    res.status(200).send({
        data: findData,
        message: 'Success'
    })
} catch (error) {
    res.status(400).send({
        message: error
    })
}
})

router.put('/hero', async (req,res) => {
    const {id,position} = req.body;
//      const index = hero.findIndex(data => {
//         return data.id == id
//     })

//    hero[index].position= position;
//    return res.status(200).send({
//         statusCode: 200,
//         data:hero,
//         message: `Successfuly deleted Id: ${id}`
//     });
try {
    const findData = await Hero.findOneAndUpdate({id}, {position}).exec()
    res.status(200).send({
        data: findData,
        message: 'Success'
    })
} catch (error) {
    res.status(400).send({
        message: error
    })
}
})

module.exports = router;