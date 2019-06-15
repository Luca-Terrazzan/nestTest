import { hashBlock } from './utils';
import { Transaction } from './transaction';
import { IBlock } from './block-interface';

export class ChainAncestorBlock implements IBlock {

  protected readonly hash: string;

  constructor(
    protected readonly transaction: Transaction
  ) {
    this.hash = hashBlock(this);
  }

  public getHash(): string {
    return this.hash;
  }

}
