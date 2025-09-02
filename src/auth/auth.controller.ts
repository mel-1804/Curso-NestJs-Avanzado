import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  register(@Body() registerUserDto: CreateAuthDto) {
    return "register"
  }
  @Post()
  login(@Body() loginUserDto: any){
    return "login"
  }

  @Get()
  veriffy() {
    return "...verifing"
  }
}
