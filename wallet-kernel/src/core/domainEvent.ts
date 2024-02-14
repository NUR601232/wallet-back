import { UUID } from 'crypto';

export abstract class DomainEvent {
  public occuredOn: Date;
  public id: UUID;

  public consumed: boolean;

  protected constructor(ocurredOn: Date) {
    this.occuredOn = ocurredOn;
    this.id = crypto.randomUUID();
    this.consumed = false;
  }

  public markedAsConsumed(): void {
    this.consumed = true;
  }
}
