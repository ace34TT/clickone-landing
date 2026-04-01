import * as migration_20260331_145256 from './20260331_145256';
import * as migration_20260331_150250 from './20260331_150250';
import * as migration_20260331_185615 from './20260331_185615';
import * as migration_20260401_020208 from './20260401_020208';

export const migrations = [
  {
    up: migration_20260331_145256.up,
    down: migration_20260331_145256.down,
    name: '20260331_145256',
  },
  {
    up: migration_20260331_150250.up,
    down: migration_20260331_150250.down,
    name: '20260331_150250',
  },
  {
    up: migration_20260331_185615.up,
    down: migration_20260331_185615.down,
    name: '20260331_185615',
  },
  {
    up: migration_20260401_020208.up,
    down: migration_20260401_020208.down,
    name: '20260401_020208'
  },
];
