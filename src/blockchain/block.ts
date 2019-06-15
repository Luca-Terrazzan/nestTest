import { Transaction } from './transaction';
import { ChainAncestorBlock } from './chain-ancestor-block';

export class Block extends ChainAncestorBlock {

  constructor(
    protected readonly previousBlockHash: string,
    protected readonly transaction: Transaction
  ) {
    super(transaction);
  }

}
