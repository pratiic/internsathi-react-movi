export const getUnit = (val: number, strOne: string, strTwo: string) => {
    // val > 1 or val = 0, then plural unit
    // else singular unit

    if (val > 1 || val === 0) {
        return strTwo;
    }

    return strOne;
};
