import { BossToken } from './bosses';
import { Location } from './../pages/bosses/model/boss-info';

export type BossConstLocation = { [key: BossToken]: Location };

export const constBossLocation: Record<BossToken, Location[]> = {
  'Rotworm Queen': new Array(
    new Location(
      'Rotworm Cave (Darashia)',
      '',
      'https://tibiamaps.io/map/embed#33046,32373,9:1'
    ),
    new Location(
      'Rotworm Cave (Liberty Bay)',
      '',
      'https://tibiamaps.io/map/embed#32263,32689,10:1'
    ),
    new Location(
      'Rotworm Cave (Edron)',
      '',
      'https://tibiamaps.io/map/embed#33238,31840,9:1'
    ),
    new Location(
      "Hellgate (Ab'Dendriel)",
      '',
      'https://tibiamaps.io/map/embed#32779,31604,12:1'
    )
  ),
} as const;
