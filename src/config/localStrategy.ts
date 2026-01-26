import { Strategy as LocalStrategy } from 'passport-local';
import passport from 'passport';
import bcrypt from 'bcryptjs';
import { ReadIndividualUser } from '../lib/queries.ts';

passport.use(
    new LocalStrategy( async(username: any, password: any, done: any) => {
        try{
            const user = await ReadIndividualUser(username);

            if (!user){
                return done(null, false, {message: "Incorrect Username"})
            }

            const match = await bcrypt.compare(password, user.password);
            if (!match){
                return done(null, false, {message: "Incorrect password"})
            }
            return done(null, user);

        } catch(error){
            return done(error)
        }
    })
)