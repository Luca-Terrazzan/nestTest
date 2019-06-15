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

    const transaction2 = new Transaction(new User('f'), new User('x'), 100);
    const bBlock = new Block(aBlock.getHash(), transaction2);

    expect(hashBlock(bBlock)).toBeDefined();
  });

  it('Should provide different hashes for different blocks', () => {
    const transaction = new Transaction(new User('a'), new User('b'), 1);
    const aBlock = new ChainAncestorBlock(transaction);
    const transaction2 = new Transaction(new User('f'), new User('x'), 100);
    const bBlock = new Block(aBlock.getHash(), transaction2);

    expect(hashBlock(aBlock) == hashBlock(bBlock)).toBeFalsy();
  });

});
