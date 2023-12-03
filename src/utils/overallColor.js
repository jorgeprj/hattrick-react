export const getOverallColor = (overall) => {
    if (overall > 80) {
        return 'high-green';
    } else if (overall > 70) {
        return 'green';
    } else if (overall > 60) {
        return 'yellow';
    } else if (overall > 50) {
        return 'orange';
    } else {
        return 'red';
    }
};