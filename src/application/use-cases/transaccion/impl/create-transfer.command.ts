import { TransaccionDto } from '../../../dto/transaccion.dto';

export class CreateTransferCommand {
  constructor(public readonly transfer: TransaccionDto) {}
}
