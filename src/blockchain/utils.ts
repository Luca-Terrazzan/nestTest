import { Block } from './block';

/**
 * TODO
 */
export function hashBlock(block: Block): string {
  return JSON.stringify(block);
}
