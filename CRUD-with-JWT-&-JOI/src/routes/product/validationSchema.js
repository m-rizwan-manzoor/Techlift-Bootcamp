const Joi = require("joi");

const createProductSchema = (product) => {
  const schema = Joi.object().keys({
    productname: Joi.string().min(4).required(),
    category: Joi.string().email().required(),
    inStock: Joi.boolean().required(),
  });

  return schema.validate(product);
};

module.exports = createProductSchema;
