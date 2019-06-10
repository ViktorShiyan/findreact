let numberAddSeven = (number) => {
    const prefix = '+7';
    let newNumber="";
    if (number.length === 1) {
        newNumber = number;
    } else if (number.length > 1) {
        newNumber = number.substring(2);
    }
    return `${prefix}${newNumber}`;
};
export default numberAddSeven;