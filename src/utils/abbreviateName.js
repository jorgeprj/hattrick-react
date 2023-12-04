export const abbreviateName = (name) => {
    if (name.length > 11) {
        const [firstName, lastName] = name.split(' ');
        return `${firstName.charAt(0)}. ${lastName}`;
    }
    return name;
};