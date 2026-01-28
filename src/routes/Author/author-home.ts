import { Router } from 'express';
import { renderHomepage } from '../../controllers/Author/author-home.ts';

export const AuthorHomeRouter = Router();

AuthorHomeRouter.get("/", renderHomepage);