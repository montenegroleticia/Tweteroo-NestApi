import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/tweets')
  getTweets(): string {
    return this.appService.getTweets();
  }

  @Get('/tweets/:username')
  getTweetsByUser(): string {
    return this.appService.getTweetsByUser();
  }

  @Post('/tweets')
  postTweets(): string {
    return this.appService.postTweets();
  }

  @Post('/sign-up')
  signUp(): string {
    return this.appService.signUp();
  }
}
