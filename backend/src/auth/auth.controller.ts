import { Controller, Post, Body, Get, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import * as express from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() _req: express.Request) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req: express.Request, @Res() res: express.Response) {
    const result = await this.authService.googleLogin(req);
    // Redirect back to frontend with token
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3001';
    return res.redirect(`${frontendUrl}/login?token=${result.access_token}`);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile(@Req() req: express.Request) {
    return req.user;
  }
}
