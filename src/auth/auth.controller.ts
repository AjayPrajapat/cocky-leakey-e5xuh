import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook-token'))
  @Get('facebook')
  async getTokenAfterFacebookSignIn(@Req() req) {
    return { data: req.user };
  }

  @Get('testd')
  testFunct(): string {
    return 'perfect';
  }
}
