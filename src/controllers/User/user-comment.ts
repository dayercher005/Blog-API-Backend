import type { Request, Response, RequestHandler } from 'express';
import { body, validationResult, matchedData } from 'express-validator';
import type { ValidationChain } from 'express-validator';
import { CreateComments } from '../../lib/queries.ts';

export const validatorCommentForm: (ValidationChain | RequestHandler)[] = [
    body("content")
    .notEmpty()
    .withMessage("Please fill in a comment if you are going to submit one")
]

export async function renderCommentForm(req: Request, res: Response){
    res.json({
        message: 'success'
    })
}

export async function sendCommentForm(req: Request, res: Response){
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        res.status(404).json({
            error: "Error"
        })
    }
    const { content } = matchedData(req);
    await CreateComments(content, req.user?.id, req.params.post as string)
    res.json({hi: "hi"})
}