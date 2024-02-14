import { MovimientoDto } from '../../../../dto/movimiento.dto';
export class CreateTransactionCommand {
  constructor(public readonly transaction: MovimientoDto) {}
}
