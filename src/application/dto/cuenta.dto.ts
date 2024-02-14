import { UUID } from 'crypto';
import { IsNotEmpty, IsString, IsUUID, Matches, MinLength } from "class-validator";

export class CuentaDto {
    @IsNotEmpty()
    nombre: string;
  
    @IsNotEmpty()
    usuario: UUID;

    saldo: number;
}
