const rateValues = {
    High: 50,
    Medium: 30,
    Low: 10,
};

const statusValues = {
    Green: 10,
    Yellow: 7,
    Red: 5,
};
/**
 * Calculates the age score based on the player's age and the current year.
 * @param {number} playerAge - The player's age.
 * @param {number} currentYear - The current year.
 * @returns {number} The calculated age score.
 */
export const getAgeScore = (playerAge, currentYear) => {
    const age = (currentYear - playerAge)
    const slope = -2.5;
    const intercept = 140;

    const calculatedValue = slope * age + intercept;

    return (Math.max(0, Math.min(100, calculatedValue)))/10;
}

/**
 * Calculates the potential score based on player's overall and potential ratings.
 * @param {number} playerOverall - The player's overall rating.
 * @param {number} playerPotential - The player's potential rating.
 * @returns {number} The calculated potential score.
 */
export const getPotentialScore = (playerOverall, playerPotential) => {
    const growthRate = playerPotential - playerOverall;
    const slope = 3;
    const initialScore = 30;
    const maxScore = 100;

    let score = slope * growthRate + initialScore;

    return (Math.max(0, Math.min(maxScore, score)))/10;
}

/**
 * Calculates the contract score based on the player's contract duration and the current year.
 * @param {number} playerContract - The player's contract duration.
 * @param {number} currentYear - The current year.
 * @returns {number} The calculated contract score.
 */
export const getContractScore = (playerContract, currentYear) => {
    const yearsLeftInContract = playerContract - currentYear;
    const contractScore = (100 - (yearsLeftInContract * 15))/10;
    return (contractScore);
}

/**
 * Calculates the physical score based on various player attributes.
 * @param {Object} player - The player object containing various attributes.
 * @returns {number} The calculated physical score.
 */
export const getPhysicalScore = (player) => {
    const attackRateValue = rateValues[player.workRate.split('/')[0]];
    const defenseRateValue = rateValues[player.workRate.split('/')[1]];
    return ((
        (player.height - 100) +
        attackRateValue +
        defenseRateValue +
        (player.weakFoot * 20) +
        (player.skills * 20)) / 40);
}

/**
 * Calculates the overall hat score based on different player attributes.
 * @param {Object} player - The player object containing various attributes.
 * @returns {number} The calculated overall hat score.
 */
export const getOverallScore = (player) => {
    const paceScore = player.overallStats.pace * player.overallStats.pace;
    const passingScore = player.overallStats.passing * player.overallStats.passing;
    const dribblingScore = player.overallStats.dribbling * player.overallStats.dribbling;
    const physicalityScore = player.overallStats.physicality * player.overallStats.physicality;
    const shootingScore = player.overallStats.shooting * player.overallStats.shooting;
    const defendingScore = player.overallStats.defending * player.overallStats.defending;

    return ((paceScore * 13 + passingScore * 9 + dribblingScore * 8 + shootingScore * 10 + defendingScore * 10 + physicalityScore * 10) / 60) / 600;
}

/**
 * Calculates the hat score based on various player attributes and the current year.
 * @param {Object} player - The player object containing various attributes.
 * @param {number} currentYear - The current year.
 * @returns {number} The calculated hat score.
 */
export const getHatScore = (player, currentYear) => {
    const ageScore = getAgeScore(player.age, currentYear);
    const potentialScore = getPotentialScore(player.overall, player.potential);
    const contractScore = getContractScore(player.contract, currentYear);

    const realFaceScore = player.realFace ? 10 : 5;

    const physicalScore = getPhysicalScore(player)

    const overallScore = getOverallScore(player);

    const playStylesScore = (player.playStyles.length * 25)/10;

    const statusScore = statusValues[player.scoutStatus];

    const futzScore =
        ageScore*3 +
        potentialScore*5 +
        contractScore +
        realFaceScore +
        overallScore*2 +
        playStylesScore*2 +
        statusScore +
        player.overall/10 +
        physicalScore;

    return Number((futzScore/16).toFixed(2));
};

/**
 * Returns a text representation of the hat score.
 * @param {number} score - The hat score.
 * @returns {string} The text representation of the hat score.
 */
export const getHatScoreText = (score) => {
    if (score > 8) {
        return "Excellent";
    } else if (score > 7) {
        return "Great";
    } else if (score > 6) {
        return "Good";
    } else if (score > 5) {
        return "Okay";
    } else if (score >= 0) {
        return "Poor";
    } else {
        // Lidar com valores negativos, se necessário
        return "Invalid Score";
    }
};