import { UUID } from 'crypto';
import { IsNotEmpty, IsString, IsNumber, IsUUID, Matches, MinLength } from "class-validator";

export class TransaccionDto {
  da: UUID;

  recive: UUID;

  @IsNumber()
  monto: number;

  categoria: UUID;

  fecha: Date;
}
