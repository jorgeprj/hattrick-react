import { Team } from "./teamTypes";

export interface Player {
    id: number;
    name: string;
    age: number;
    nationality: string;
    position: string;
    overall: number;
    potential: number;
    modifier: number;
    height: number;
    weight: number;
    foot: string;
    skills: number;
    weakFoot: number
    workRate: number;
    realFace: boolean;
    value: number;
    wage: number;
    releaseClause: number;
    contract: number;
    teamHistory: [Team, "season"]
    nationalTeam: ["name", "season"]
    isStarter: boolean;
    isLoan: boolean;
    buyClause: number;
    isScouted: boolean;
    bio: string;
    analysis: string;
}