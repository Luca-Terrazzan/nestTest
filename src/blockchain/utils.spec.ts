import { Block } from './block';
import { ChainAncestorBlock } from './chain-ancestor-block';
import { User } from './chain-user';
import { Transaction } from './transaction';
import { hashBlock } from './utils';

describe('Blockchain hash function', () => {

  it('Should be able to hash any block', () => {
    const transaction = new Transaction(new User('a'), new User('b'), 1);
    const aBlock = new ChainAncestorBlock(transaction);
    expect(hashBlock(aBlock)).toBeDefined();

    const bBlock = new Block(aBlock.getHash(), transaction);
    expect(hashBlock(bBlock)).toBeDefined();
  });

});
