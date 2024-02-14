import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUsuarioRepository } from '../../domain/repositories/iusuario.repository';

@Injectable()
export class AuthService {
  constructor(
    @Inject(IUsuarioRepository) private userRepo: IUsuarioRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findByEmail(email);
    if (user && user.contrasenha === password) {
      delete user.contrasenha;
      return user;
    }
    return null;
  }

  async login(req: any) {
    const payload = { email: req.user.email, id: req.user.id };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
