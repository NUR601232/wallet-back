import { CuentaDto } from '../../../../dto/cuenta.dto';

export class CreateAccountCommand {
  constructor(public readonly account: CuentaDto) {}
}
