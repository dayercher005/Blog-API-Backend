import { prisma } from './prisma'

export async function CreateUsers(username: string, password: string){
    await prisma.user.create({
        data:{
            username: username,
            password: password
        }
    })
}

export async function CreateComments(content: string, userID: string){
    await prisma.comment.create({
        data:{
            content: content,
            user:{
                connect:{
                    id: userID
                }
            }
        }
    })
}

export async function CreateAuthors(username: string, password: string){
    await prisma.author.create({
        data:{
            username: username,
            password: password
        }
    })
}

export async function CreatePosts(title: string, content: string, duration: string, authorID: string){
    await prisma.post.create({
        data:{
            title: title,
            content: content,
            duration: duration,
            author:{
                connect:{
                    id: authorID
                }
            }
        }
    })
}

export async function ReadPosts(){
    const allPosts = await prisma.post.findMany();
    return allPosts
}

export async function ReadIndividualPost(postID: string){
    const individualPost = await prisma.post.findUnique({
        where:{
            id: postID
        }
    })
    return individualPost
}