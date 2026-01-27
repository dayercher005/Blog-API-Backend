import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';
import { ReadIndividualUser } from '../lib/queries.ts';


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secret'
}

passport.use(new JwtStrategy(opts, async (payload, done) => {
  try{
    const user = await ReadIndividualUser(payload.id);
    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  } catch (error){
      return done(error, false)
  }
}))