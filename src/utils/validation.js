export const validatePhoneNumberError = (phone) => {
  const trimmedPhone = phone.trim();

  if (!trimmedPhone) {
    return "Phone number is required to login";
  }

  if (!/^\+\d{12}$/.test(trimmedPhone)) {
    return "Mobile number should start with a + followed by 12 digit";
  }

  return null; // No errors!
};