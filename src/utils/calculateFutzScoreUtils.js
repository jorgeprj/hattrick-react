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

export const calculateFutzScore = (player, currentYear) => {
    const overallFactor = player.overall * 6;
    const ageDifference = (currentYear - player.age);
    const ageFactor = 100 - ageDifference * 10; 

    const growthPotential = Math.max(0, player.potential - player.overall) * 10;

    const yearsLeftInContract = player.contract - currentYear;
    const contractFactor = Math.max(0, 3 - yearsLeftInContract) * 12;
    const realFaceFactor = player.realFace === 'Yes' ? 50 : 0;

    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];

    const nationalityFactor = nationalityValues[player.nationality] || 0;

    const physicalFactors =
        (player.weight - 40) +
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 5) +
        (player.skills * 5);

    const financialFactors = -(player.wage/750);

    const futzScore =
        overallFactor +
        ageFactor +
        growthPotential +
        contractFactor +
        realFaceFactor +
        physicalFactors +
        financialFactors +
        nationalityFactor;

    return Math.max(0, 100 + futzScore / 10).toFixed(1);
};