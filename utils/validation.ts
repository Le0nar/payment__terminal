export const validateTelephone = (value: string): boolean => {
  const reg = /^[7,8]/;
  return value.length === 11 ? reg.test(value) : false;
};
