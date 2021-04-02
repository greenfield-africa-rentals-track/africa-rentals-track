const Joi = require('@hopi/joi');

// SIGNUP VALIDATION

const signupValidator = data => {
    const schema = {
        firstName: Joi.string().min(6).required(),
        lastName: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}

module.exports = signupValidator;