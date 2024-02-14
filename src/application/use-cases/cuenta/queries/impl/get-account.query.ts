import { UUID } from 'crypto';

export class GetAccountQuery {
  constructor(public readonly accountId: UUID) {}
}
