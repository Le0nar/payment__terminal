export const validateTelephone = (value: string): boolean => {
  return value.replace(/\D/g, "").length === 10 ? true : false;
};
