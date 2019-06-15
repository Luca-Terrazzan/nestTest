import { Transaction } from './transaction';
import { User } from './chain-user';
import { ChainAncestorBlock } from './chain-ancestor-block';

describe('Block', () => {

  it('Should have a hash code associated', () => {
    const transaction = new Transaction(new User('a'), new User('b'), 1);
    const aBlock = new ChainAncestorBlock(transaction);

    expect(aBlock.getHash()).toBeDefined();
  });

});
