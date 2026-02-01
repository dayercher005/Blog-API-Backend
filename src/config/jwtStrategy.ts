import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { ReadIndividualUser } from '../lib/queries.ts';
import "dotenv/config";


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_OR_PUBLIC_KEY || ''
}

interface JwtPayload {
  id: string;
}

interface DoneCallback {
  (error: Error | null, user?: any | false): void;
}

passport.use(new JwtStrategy(opts, async (payload: JwtPayload, done: DoneCallback) => {
  try{
    const user = await ReadIndividualUser(payload.id);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (error){
      return done(error as Error, false)
  }
}))