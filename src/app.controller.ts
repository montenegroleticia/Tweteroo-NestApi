import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTweetDto } from './dtos/tweet.dto';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('/tweets')
  getTweets() {
    try {
      return this.appService.getTweets();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/tweets/:username')
  getTweetsByUser(@Param('username') username: string) {
    try {
      return this.appService.getTweetsByUser(username);
    } catch (error) {
      throw new HttpException('Username not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('/tweets')
  postTweets(@Body() body) {
    try {
      const username = body.username;
      const tweet = body.tweet;

      const findUser = this.appService.getTweetsByUser(username);
      if (!findUser) {
        throw new HttpException('', HttpStatus.UNAUTHORIZED);
      }
      return this.appService.postTweets(username, tweet);
    } catch (error) {
      throw new HttpException(error, HttpStatus.UNAUTHORIZED);
    }
  }

  @Post('/sign-up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() body: CreateUserDto) {
    try {
      const result = this.appService.signUp(body);
      return result;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
