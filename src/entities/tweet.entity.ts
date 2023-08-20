import { User } from './user.entity';

export class Tweet {
  private user: User;
  private tweet: string; // text

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }

  getUser(): User {
    return this.user;
  }
  getAvatar(): User {
    return this.user;
  }
  getTweet(): string {
    return this.tweet;
  }
}
