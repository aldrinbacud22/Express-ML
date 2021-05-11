const Joi = require('@hapi/joi')

const heroValidators = Joi.object({
    id: Joi.number().required(),
    name: Joi.string().min(4).required(),
    position: Joi.string().min(4).required()
})

module.exports = {
    heroValidators
}