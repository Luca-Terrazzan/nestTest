import { Transaction } from './transaction';
import { Block } from './block';

export class ChainAncestorBlock extends Block {

  protected readonly hash: string;

  constructor(
    protected readonly transaction: Transaction
  ) {
    super(undefined, transaction);
  }

}
