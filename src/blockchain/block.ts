import { hashBlock } from './utils';
import { HttpAdapterHost } from '@nestjs/core';
import { Transaction } from './transaction';

export class Block {

  private readonly hash: string;

  constructor(
    private readonly previousBlockHash: string,
    private readonly transaction: Transaction
  ) {
    this.hash = hashBlock(this);
  }

  /**
   * getHash
   */
  public getHash(): string {
    return this.hash;
  }

}
