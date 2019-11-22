export const required = (value) => {
    if (value) return undefined;
    return "Text required"
};

export const maxLengthCreator = (length) => (value) => {
    if (value.length < length) return undefined;
    return `Max length is ${length} symbols`
};