import { Respawn } from '../pages/bosses/model/boss-info';
import { BossToken } from './bosses';

export type BossConstRespawn = { [key: BossToken]: Respawn };

export const constBossRespawn: Record<BossToken, Respawn> = {
  'Rotworm Queen': new Respawn(12, 15, 30, 4),
};
