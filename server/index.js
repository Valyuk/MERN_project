import express from 'express';
import mongoose from 'mongoose';

import { postCreateValidation, registerValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';
import * as UserController from './controllers/UserController.js';
import * as PostController from './controllers/PostController.js'

mongoose.connect(
    'mongodb+srv://valbalinskiy:KoKa13572-@cluster0.zqpsbbh.mongodb.net/blog'
).then(() => console.log('DB ok'))
.catch((err) => console.log('DB error', err));


const app = express();

app.use(express.json());

app.post('/auth/login', UserController.login);
app.post('/auth/register', registerValidation, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);

app.get('/posts', PostController.getAll);
app.get('/posts/:id', PostController.getOne);
app.post('/posts', checkAuth, postCreateValidation, PostController.create); 
app.delete('/posts/:id', checkAuth, PostController.remove);
app.patch('/posts', checkAuth,  PostController.update);


app.listen(4444, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('Server OK')
});