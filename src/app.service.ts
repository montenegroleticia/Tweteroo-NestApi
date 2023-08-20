import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getTweets(): string {
    return 'work!';
  }

  getTweetsByUser(): string {
    return 'work!';
  }

  postTweets(): string {
    return 'work!';
  }

  signUp(): string {
    return 'work!';
  }
}
