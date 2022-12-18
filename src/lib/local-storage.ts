export const setItem = (prop: string, value: any): void => {
    window.localStorage.setItem(prop, JSON.stringify(value));
};

export const getItem = (prop: string): any => {
    const item = localStorage.getItem(prop);

    if (item) {
        return JSON.parse(item);
    }
};
