import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
import { CreateTweetDto } from './dtos/tweet.dto';
import { CreateUserDto } from './dtos/user.dto';

@Injectable()
export class AppService {
  private user: User[];
  private tweets: Tweet[];

  constructor() {
    this.user = [
      new User(
        'spongebob',
        'https://avatars.akamai.steamstatic.com/d322ffa327f56fcebc08ac76b340742b930648c8_full.jpg',
      ),
    ];
    this.tweets = [];
  }

  getTweets() {
    return this.tweets;
  }

  getTweetsByUser(username: string) {
    return 'work!';
  }

  postTweets(body: CreateTweetDto) {
    const tweet = new Tweet(body.user, body.tweet);
    return this.tweets.push(tweet);
  }

  signUp(body: CreateUserDto) {
    const user = new User(body.username, body.avatar);
    return this.user.push(user);
  }
}
