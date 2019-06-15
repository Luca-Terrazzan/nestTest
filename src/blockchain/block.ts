import { Transaction } from './transaction';
import { hashBlock } from './utils';

export class Block {

  protected readonly hash: string;

  constructor(
    private readonly previousBlockHash: string,
    protected readonly transaction: Transaction
  ) {
    this.previousBlockHash = previousBlockHash;
    this.hash = hashBlock(this);
  }

  public getHash(): string {
    return this.hash;
  }

}
