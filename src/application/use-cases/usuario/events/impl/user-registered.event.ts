import { UUID } from 'crypto';

export class UserRegisteredEvent {
  constructor(public readonly userId: UUID) {}
}
