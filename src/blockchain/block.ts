import { hashBlock } from './utils';
import { HttpAdapterHost } from '@nestjs/core';

export class Block {

  private readonly hash: string;

  constructor(private readonly previousBlockHash: string) {
    this.hash = hashBlock(this);
  }

  /**
   * getHash
   */
  public getHash(): string {
    return this.hash;
  }

}
