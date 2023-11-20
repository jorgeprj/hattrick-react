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
    "Premier League (ING)": 100,
    "Championship (ING)": 75,
    "League One (ING)": 50,
    "League Two (ING)": 30,
    "Premiership (ESC)": 30,
}


export const calculateFutzScore = (player, currentYear) => {
    const overallFactor = player.overall * 5;
    const ageDifference = (currentYear - player.age);
    const ageFactor = 100 - ageDifference * 15;

    const growthPotential = Math.max(0, player.potential - player.overall) * 10;

    const yearsLeftInContract = player.contract - currentYear;
    const contractFactor = Math.max(0, 3 - yearsLeftInContract) * 12;
    const realFaceFactor = player.realFace === 'Yes' ? 50 : 0;

    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];

    const nationalityFactor = nationalityValues[player.nationality] || 0;

    const leagueFactor = leagueValues[player.team.league] || 0;

    const physicalFactors =
        (player.weight - 40) +
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 5) +
        (player.skills * 5);

    const financialFactors = -(player.wage / 750);

    const futzScore =
        overallFactor +
        ageFactor +
        growthPotential +
        contractFactor +
        realFaceFactor +
        physicalFactors +
        financialFactors +
        nationalityFactor +
        leagueFactor;

    const x = Math.max(0, 100 + futzScore / 10).toFixed(1);
    var m = 0.05;
    var y = m * (x - 100) + 5;
    return Math.max(5, Math.min(y, 10)).toFixed(2);
};