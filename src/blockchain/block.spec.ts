import { Block } from './block';
import { Transaction } from './transaction';
import { User } from './chain-user';

describe('Block', () => {

  it('Should have a hash code associated', () => {
    const transaction = new Transaction(new User('a'), new User('b'), 1);
    const aBlock = new Block('previousblockhash', transaction);

    expect(aBlock.getHash()).toBeDefined();
  });

});
