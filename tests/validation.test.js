import { describe, expect, it } from "vitest";
import { validatePhoneNumberError } from "../src/utils/validation";

describe("Phone Number Validation Logic", () => {
  it("should return an error if the phone number is empty", () => {
    const result = validatePhoneNumberError("");
    expect(result).toBe("Phone number is required to login");
  });

  it("should return an error if phone is only spaces", () => {
    const result = validatePhoneNumberError("   ");
    expect(result).toBe("Phone number is required to login");
  });

  it("should return an error if it does not start with +'", () => {
    const result = validatePhoneNumberError("254712345678");
    expect(result).toBe(
      "Mobile number should start with a + followed by 12 digit",
    );
  });

  it("should return an error if it has non-digits", () => {
    const result = validatePhoneNumberError("+254abc456789");
    expect(result).toBe(
      "Mobile number should start with a + followed by 12 digit",
    );
  });

  it("should return an error if the length is wrong", () => {
    const result = validatePhoneNumberError("+2547123456");
    expect(result).toBe(
      "Mobile number should start with a + followed by 12 digit",
    );
  });

  it("should return null (no errors) for a valid 12-digit number with a +", () => {
    const result = validatePhoneNumberError("+254712345678");
    expect(result).toBeNull();
  });

  it("should return null (no errors) for a valid input with extra spaces at the start and at the end", () => {
    const result = validatePhoneNumberError("   +254712345678   ");
    expect(result).toBeNull();
  });
});
