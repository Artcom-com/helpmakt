// eslint-disable-next-line import/prefer-default-export
export const validationField = (field: string): boolean => field === '' || field === ' ' || field === null || field === undefined || !field;
