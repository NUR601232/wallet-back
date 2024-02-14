import { UUID } from 'crypto';

export class UserAccountEvent {
  constructor(public readonly userId: UUID) {}
}
