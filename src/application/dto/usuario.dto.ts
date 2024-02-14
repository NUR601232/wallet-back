import { UUID } from 'crypto';
import { IsNotEmpty, IsString,MaxLength, IsUUID, Matches, MinLength } from "class-validator";

export class UsuarioDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  correo: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
    message: 'La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un caracter especial.',
  })
  contrasenha: string;
}
  