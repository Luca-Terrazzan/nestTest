import { Block } from './block';
import { hashBlock } from './utils';
import { Transaction } from './transaction';
import { User } from './chain-user';

describe('Blockchain hash function', () => {

  it('Should be able to hash a block', () => {
    const transaction = new Transaction(new User('a'), new User('b'), 1);
    const aBlock = new Block('previousblockhash', transaction);

    expect(hashBlock(aBlock)).toBeDefined();
  });

});
