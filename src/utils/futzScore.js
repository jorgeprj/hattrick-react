const rateValues = {
    High: 50,
    Medium: 30,
    Low: 10,
};

const nationalityValues = {
    England: 50,
    Wales: 50,
    Scotland: 40,
    Ireland: 30,
    NorthernIreland: 30,
}

const leagueValues = {
    "Premier League (ENG)": 100,
    "Championship (ENG)": 75,
    "League One (ENG)": 50,
    "League Two (ENG)": 30,
    "Premiership (SCT)": 30,
}


export const calculateFutzScore = (player, currentYear) => {
    const overallScore = (player.overall * player.overall) / 80; //0 to 100

    const age = (currentYear - player.age);
    const ageScore = ((200 - age * 2) / 1.8); //0 to 100

    const potentialScore = Math.max(0, player.potential - player.overall) * 3.5;

    const yearsLeftInContract = player.contract - currentYear;
    const contractScore = (yearsLeftInContract * 3);

    const realFaceScore = player.realFace ? 50 : 0;


    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];

    const physicalScore =
        ((player.weight - 40) +
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 20) +
        (player.skills * 20)) * 0.25;

    const nationalityScore = nationalityValues[player.nationality] || 0;

    const leagueScore = leagueValues[player.teamHistory[0].team.league] || 0;

    const playStylesScore = (player.playStyles.length * 20);

    const futzScore =
        overallScore*4 +
        ageScore*3 +
        potentialScore*3 -
        contractScore*4 +
        realFaceScore +
        physicalScore +
        nationalityScore +
        playStylesScore +
        leagueScore;

    return (futzScore/100).toFixed(2);
};
