export interface IBusinessRule {
  message: string;
  isValid: () => boolean;
}
