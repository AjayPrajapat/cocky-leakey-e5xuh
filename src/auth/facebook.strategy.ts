import { Injectable } from '@nestjs/common';
import * as FacebookTokenStrategy from 'passport-facebook-token';
import { use } from 'passport';

@Injectable()
export class FacebookStrategy {
  constructor() {
    this.init();
  }
  init() {
    use(
      new FacebookTokenStrategy(
        {
          clientID: '406809050521190',
          clientSecret: '37a0cc4ae9aea9929a2fe07570334198',
        },
        async (
          accessToken: string,
          refreshToken: string,
          profile: any,
          done: any,
        ) => {
          const user = {};
          return done(null, user);
        },
      ),
    );
  }
}
