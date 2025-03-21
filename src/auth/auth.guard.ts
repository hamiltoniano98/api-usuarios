import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { constants } from 'buffer';
import { Observable } from 'rxjs';
import { jwtSecretkey } from 'src/constant/constant';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtservice:JwtService){}
  async canActivate(context: ExecutionContext):Promise<boolean>{
    const request=context.switchToHttp().getRequest()
    const token=request.cookies.jwt
    if(!token){
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtservice.verifyAsync(
        token,{
          secret:jwtSecretkey.secret
        }
      )
    } catch (error) {
      throw new UnauthorizedException();
    }
    return true ;
  }
}
