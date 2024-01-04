const rateValues = {
    High: 50,
    Medium: 30,
    Low: 10,
};

const statusValues = {
    Green: 100,
    Yellow: 50,
    Red: 10,
};

export const calculateHatScore = (player, currentYear) => {
    const overallScore = (player.overall * player.overall) / 70; //0 to 100

    const age = (currentYear - player.age);
    const ageScore = ((200 - age * 2) / 1.8); //0 to 100

    const potentialScore = Math.max(0, player.potential - player.overall) * 20; // 0 to 400

    const yearsLeftInContract = player.contract - currentYear;
    const contractScore = (yearsLeftInContract * 20); //0 to 120

    const realFaceScore = player.realFace ? 100 : 0;

    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];

    const physicalScore =
        ((player.weight - 40) +
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 20) +
        (player.skills * 20)) * 0.25 +
        (player.overallStats.pace);

    const playStylesScore = (player.playStyles.length * 50);

    const valueScore = (player.value/100000);

    const statusScore = statusValues[player.scoutStatus];

    const futzScore =
        overallScore*8 +
        ageScore*5 +
        potentialScore*2 -
        contractScore*5 -
        valueScore*4 +
        realFaceScore +
        physicalScore*5 +
        playStylesScore*4 +
        statusScore*5;

    return (futzScore/350).toFixed(2);
};
