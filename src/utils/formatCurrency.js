export const formatCurrency = (value) => {
    if (value >= 1000000) {
        return `€${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
        return `€${(value / 1000).toFixed(0)}K`;
    } else if (value === null) {
        return `None`;
    } else if (value && typeof value === 'string'){
        return value;
    } else {
        return `€${value}`;
    }
};