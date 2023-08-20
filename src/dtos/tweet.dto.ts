import { IsNotEmpty, IsString } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateTweetDto {
  @IsNotEmpty()
  user: User;

  @IsString()
  @IsNotEmpty()
  tweet: string;
}
