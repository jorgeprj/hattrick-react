export const isPlayerCompleted = (player) => {
    const playerTemplate = {
        "id": 0,
        "name": "",
        "age": 0,
        "nationality": "",
        "position": "",
        "overall": 0,
        "overallStats": {
          "pace": 0,
          "shooting": 0,
          "passing": 0,
          "dribbling": 0,
          "defending": 0,
          "physicality": 0
        },
        "potential": 0,
        "height": 0,
        "weight": 0,
        "foot": "",
        "skills": 0,
        "weakFoot": 0,
        "workRate": "",
        "realFace": "",
        "playStyles": [],
        "value": 0,
        "wage": 0,
        "releaseClause": null,
        "contract": 0,
        "teamHistory": [],
        "nationalTeam": [],
        "isStarter": false,
        "isLoan": false,
        "buyClause": null,
        "isScouted": false,
        "scoutStatus": "",
        "bio": "",
        "analysis": "",
        "stats": [],
        "awards": []
      };

      const keys = Object.keys(player);
      const templateKeys = Object.keys(playerTemplate);
    
      const hasOverallStats = player.overallStats && Object.keys(player.overallStats).length > 0;
    
      return (
        keys.length === templateKeys.length &&
        keys.every((key) => templateKeys.includes(key)) &&
        hasOverallStats
      );
}