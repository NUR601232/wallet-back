import { UUID } from 'crypto';

export class GetUserAccountsQuery {
  constructor(public readonly userId: UUID) {}
}
