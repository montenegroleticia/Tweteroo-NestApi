import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  getHealth() {
    return "I'm okay!";
  }

  getTweets() {
    return this.tweets;
  }

  getTweetsByUser(username: string) {
    return this.user.find((user) => user.getUsername() === username);
  }

  postTweets(username: string, tweet: string) {
    const findUser = this.user.find((user) => user.getUsername() === username);
    const newTweet = new Tweet(findUser, tweet);
    return this.tweets.push(newTweet);
  }

  signUp(body: CreateUserDto) {
    const user = new User(body.username, body.avatar);
    return this.user.push(user);
  }
}
