import { IBlock } from './block-interface';

/**
 * TODO
 */
export function hashBlock(block: IBlock): string {
  return JSON.stringify(block);
}
