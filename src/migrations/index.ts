import * as migration_20260331_145256 from './20260331_145256';
import * as migration_20260331_150250 from './20260331_150250';

export const migrations = [
  {
    up: migration_20260331_145256.up,
    down: migration_20260331_145256.down,
    name: '20260331_145256',
  },
  {
    up: migration_20260331_150250.up,
    down: migration_20260331_150250.down,
    name: '20260331_150250'
  },
];
