import { FiltradoDto } from '../../../../dto/filtrado.dto';
export class GetFilteredTransactionQuery {
  constructor(public readonly filtersTransactionDto: FiltradoDto) {}
}
