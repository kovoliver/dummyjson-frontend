import Joi from 'joi';
import type { Product } from './types';

export const productValidationSchema = Joi.object<Product>({
    id: Joi.number()
        .integer()
        .min(0),
        
    brand: Joi.string()
        .trim()
        .min(1)
        .max(100)
        .required()
        .messages({
            'string.empty': 'A márka megadása kötelező.',
        }),

    title: Joi.string()
        .trim()
        .min(1)
        .max(150)
        .required()
        .messages({
            'string.empty': 'A termék nevének megadása kötelező.',
        }),

    description: Joi.string()
        .trim()
        .max(1000)
        .allow('')
        .required(),

    price: Joi.number()
        .positive()
        .required()
        .messages({
            'number.base': 'Az ár csak szám lehet.',
        }),

    discountPercentage: Joi.number()
        .min(0)
        .max(100)
        .required(),

    rating: Joi.number()
        .min(0)
        .max(5)
        .required(),

    stock: Joi.number()
        .integer()
        .min(0)
        .required(),

    tags: Joi.array()
        .items(Joi.string().trim())
        .required(),

    images: Joi.array()
        .items(Joi.string().uri())
        .required(),

    thumbnail: Joi.string()
        .trim()
        .uri()
        .required()
        .messages({
            'string.uri': 'A borítóképnek érvényes URL-nek kell lennie.',
        }),
    reviews: Joi.array()
        .items(Joi.object())
        .required()
});