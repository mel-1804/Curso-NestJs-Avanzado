import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor() {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return registerUserDto;
  }
  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return loginUserDto;
  }

  @Get()
  verify() {
    return '...verifing';
  }
}
