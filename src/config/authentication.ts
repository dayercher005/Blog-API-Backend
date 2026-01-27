import passport from 'passport';

export async function Authentication(){
    await passport.authenticate("jwt", {session: false});
}