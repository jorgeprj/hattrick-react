const rateValues = {
    High: 50,
    Medium: 30,
    Low: 10,
};

const statusValues = {
    Green: 100,
    Yellow: 70,
    Red: 50,
};

const getAgeScore = (playerAge, currentYear) => {
    const age = (currentYear - playerAge)
    const slope = -2.5;
    const intercept = 140; 
  
    const calculatedValue = slope * age + intercept;
  
    return Math.max(0, Math.min(100, calculatedValue));
}

const getPotentialScore = (playerOverall, playerPotential) => {
    const growthRate = playerPotential - playerOverall;
    const slope = 4.6;
    const initialScore = 30;  
    const maxScore = 100;
  
    let score = slope * growthRate + initialScore;
  
    return Math.max(0, Math.min(maxScore, score));
}


export const calculateHatScore = (player, currentYear) => {
    const ageScore = getAgeScore(player.age, currentYear);

    const potentialScore = getPotentialScore(player.overall, player.potential);

    const yearsLeftInContract = player.contract - currentYear;
    const contractScore = (yearsLeftInContract * 20);

    const realFaceScore = player.realFace ? 100 : 50;

    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];
    const physicalScore =(
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 20) +
        (player.skills * 20))/4;
    
    const paceScore = player.overallStats.pace*player.overallStats.pace;
    const passingScore = player.overallStats.passing*player.overallStats.passing;
    const dribblingScore = player.overallStats.dribbling*player.overallStats.dribbling;
    const physicalityScore = player.overallStats.physicality*player.overallStats.physicality;
    const shootingScore = player.overallStats.shooting*player.overallStats.shooting;
    const defendingScore = player.overallStats.defending*player.overallStats.defending;

    const overallScore = ((paceScore*13 + passingScore*9 + dribblingScore*8 + shootingScore*10 + defendingScore*10 +  physicalityScore*10)/60)/55;
    
    const playStylesScore = (player.playStyles.length * 25);

    const statusScore = statusValues[player.scoutStatus];

    const futzScore =
        ageScore*3.5 +
        potentialScore*6 -
        contractScore*1.5 +
        realFaceScore*2 +
        overallScore*3 +
        playStylesScore*3 +
        statusScore*4 +
        player.overall*2;

    return (futzScore/220).toFixed(2);
};
