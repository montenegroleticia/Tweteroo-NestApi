import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: User;
  private tweets: Tweet;

  username: string;
  avatar: string; // url

  user: User;
  tweet: string; // text

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
