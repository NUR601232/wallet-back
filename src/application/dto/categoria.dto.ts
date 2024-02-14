import { UUID } from 'crypto';
import { IsNotEmpty, IsString, IsUUID, Matches, MinLength } from "class-validator";

export class CategoriaDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  usuario: UUID;
}
