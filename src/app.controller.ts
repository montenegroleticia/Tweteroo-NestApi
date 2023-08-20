import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHealth() {
    return this.appService.getHealth();
  }

  @Get('/tweets')
  getTweets(@Query('page', ParseIntPipe) page: number) {
    try {
      if (page < 1) {
        throw new HttpException(
          'Informe uma página válida!',
          HttpStatus.BAD_REQUEST,
        );
      }
      const tweets = this.appService.getTweets(page);
      return tweets;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('/tweets/:username')
  getTweetsByUser(@Param('username') username: string) {
    try {
      return this.appService.getTweetsByUser(username);
    } catch (error) {
      throw new HttpException('', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('/tweets')
  postTweets(@Body() body) {
    try {
      const username = body.username;
      const tweet = body.tweet;

      const findUser = this.appService.findUser(username);
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
