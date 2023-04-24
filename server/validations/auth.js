import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Incorrect email').isEmail(),
    body('password', 'Password should be min 5 symbols').isLength({ min: 5 }),
    body('fullName', 'Enter your name').isLength({ min: 3}),
    body('avatarUrl', 'Incorrect link on your avatar').optional().isURL(),
];