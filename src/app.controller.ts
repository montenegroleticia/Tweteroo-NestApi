import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTweetDto } from './dtos/tweet.dto';
import { CreateUserDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/tweets')
  getTweets() {
    try {
      return this.appService.getTweets();
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/tweets/:username')
  getTweetsByUser(@Param('username') usename: string) {
    try {
      return this.appService.getTweetsByUser(usename);
    } catch (error) {
      throw new HttpException('Username not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('/tweets')
  postTweets(@Body() body: CreateTweetDto) {
    try {
      return this.appService.postTweets(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/sign-up')
  signUp(@Body() body: CreateUserDto) {
    try {
      return this.appService.signUp(body);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
