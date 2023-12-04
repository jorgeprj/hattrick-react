import { Player } from './playerTypes';
import { Team } from './teamTypes';

export interface Transfer {
    id: number;
    player: Player;
    team: Team;
    value: number;
}