import type { Request, Response } from 'express';
import { ReadPosts } from '../../lib/queries.ts'

export async function renderDashboard(req: Request, res: Response){
    const allPosts = await ReadPosts()
    res.json({
        posts: allPosts,
        author: req.user
    });
}

