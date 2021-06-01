export const validateTelephone = (value: string): boolean => {
  const reg = /^[7,8]/;
  return value.replace(/\D/g, "").length === 11 ? true : false;
};
