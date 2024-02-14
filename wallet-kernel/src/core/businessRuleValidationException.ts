import { IBusinessRule } from './iBusinessRule';

export class BusinessRuleValidationException extends Error {
  private _brokenRule: IBusinessRule;

  private _details: string;

  public get brokenRule(): IBusinessRule {
    return this._brokenRule;
  }

  public get details() {
    return this._details;
  }

  constructor(rule: IBusinessRule | string) {
    super();
    this.name = 'Business Rule Exception';
    if (typeof rule === 'string') {
      this._details = rule;
      this.message = rule;
    } else {
      this._brokenRule = rule;
      this._details = rule.message;
      this.message = rule.message;
    }
  }
}
