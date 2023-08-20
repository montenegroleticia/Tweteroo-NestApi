import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'username is requerid',
  })
  username: string;

  @IsUrl()
  @IsNotEmpty()
  avatar: string;
}
