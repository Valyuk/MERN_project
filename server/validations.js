import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Incorrect form of email').isEmail(),
    body('password', 'Password must be min 5 symbols').isLength({ min: 5}),
]

export const registerValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Password should be min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Enter your name').isLength({ min: 3}),
    body('avatarUrl', 'Incorrect link on your avatar').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Enter header of article').isLength({ min: 3}).isString(),
    body('text', 'Enter text of article').isLength({ min: 3 }).isString(),
    body('tags', 'Incorrect format of your tags').optional().isString(),
    body('imageUrl', 'Incorrect link on your image').optional().isString(),
];