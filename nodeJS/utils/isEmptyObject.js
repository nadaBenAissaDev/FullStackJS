const isEmptyObject = (value,score) => 
    value === undefined || score === undefined ||
    value === null || score === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) || (typeof score === 'object' && Object.keys(score) === 0) ||
    (typeof value === 'string' && value.trim().length === 0) || (typeof score === 'number' && value === 0);

module.exports = isEmptyObject;