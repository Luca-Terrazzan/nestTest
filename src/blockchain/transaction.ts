import { User } from './chain-user';

export class Transaction {
  constructor(
    private readonly giver: User,
    private readonly receiver: User,
    private readonly amount: number) {}
}
