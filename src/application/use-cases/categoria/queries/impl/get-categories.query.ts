import { UUID } from 'crypto';

export class GetCategoriesQuery {
  constructor(public readonly userId: UUID) {}
}
