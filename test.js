// test.js

// We're assuming 'chai' is globally available from the CDN
const { expect } = chai;

describe('Calibration Sum Calculator', () => {
  it('should calculate the correct sum for the example input', () => {
    const input = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;
    expect(calculateCalibrationSum(input)).to.equal(142);
  });

  it('should handle empty input', () => {
    expect(calculateCalibrationSum('')).to.equal(0);
  });

  it('should handle input with no digits', () => {
    const input = `
abc
def
ghi
`;
    expect(calculateCalibrationSum(input)).to.equal(0);
  });

  // Add more test cases as needed
});
