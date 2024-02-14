import { UUID } from 'crypto';
import { IsNotEmpty, IsString, IsNumber, IsUUID, Matches, MinLength } from "class-validator";

export class UpdateTransaccionDto {
  id: UUID;

  da: UUID;

  recive: UUID;
 
  @IsNumber()
  monto: number;
}
