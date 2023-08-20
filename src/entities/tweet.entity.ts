import { User } from './user.entity';

class Tweet {
  private user: User;
  private tweet: string; // text

  constructor(user: User, tweet: string) {
    this.user = user;
    this.tweet = tweet;
  }
}
