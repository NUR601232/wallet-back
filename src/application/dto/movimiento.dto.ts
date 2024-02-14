import { UUID } from 'crypto';
import { IsNotEmpty, IsString, IsNumber, IsUUID, Matches, MinLength } from "class-validator";
import { TipoMovimiento } from '../../domain/enum/tipo-movimiento.enum';

export class MovimientoDto {

  @IsNumber()
  monto: number;

  cuenta: UUID;

  tipo: TipoMovimiento;

  categoria: UUID;

  fecha: Date;
  
}
