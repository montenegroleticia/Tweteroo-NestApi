import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Tweet } from './entities/tweet.entity';
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

  getTweets(page: number) {
    const pageSize = 15;

    const startIndex = page ? (page - 1) * pageSize : 0;
    const endIndex = startIndex + pageSize;

    const tweetPage = this.tweets
      .slice(startIndex, endIndex)
      .reverse()
      .map((tweet) => ({
        username: tweet.getUser().getUsername(),
        avatar: tweet.getUser().getAvatar(),
        tweet: tweet.getTweet(),
      }));

    return tweetPage;
  }

  getTweetsByUser(username: string) {
    const tweetsByUser = this.tweets
      .filter((tweet) => tweet.getUser().getUsername() === username)
      .map((tweet) => ({
        username: tweet.getUser().getUsername(),
        avatar: tweet.getUser().getAvatar(),
        tweet: tweet.getTweet(),
      }));

    if (tweetsByUser) {
      return tweetsByUser;
    } else {
      return [];
    }
  }

  findUser(username: string) {
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
