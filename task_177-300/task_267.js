
  //
  //  A lot of goods have an International Article Number (formerly known as "European Article Number") abbreviated "EAN". EAN is a 13-digit barcode consisting of 12 digits followed by a single-digit checksum (EAN-8 is not considered in this kata).
  //
  // The single-digit checksum is calculated as follows (based upon the first 12 digits):
  //
  // The digits at the first, third, fifth, etc. positions (i.e. at the odd positions) are multiplied by 1.
  // The digits at the second, fourth, sixth, etc. positions (i.e. at the even positions) are multiplied by 3.
  // Sum these results.
  // If this sum is divisible by 10, the checksum is 0. Otherwise the checksum has the following formula:
  //
  // checksum=10−(sum mod 10)

  // Your Task
  // Validate a given EAN-Code. Return True if the given EAN-Code is valid, otherwise False.
  //
  // Assumption
  // You can assume the given code is syntactically valid, i.e. it only consists of numbers and it exactly has a length of 13 characters.
  //
  // Examples
  // validateEAN("4003301018398") // true
  // validateEAN("4003301018392") // false
  //____________________________________________________________________________________________________________________

  function validateEAN(eanCode) {
      const eanCodeArr = eanCode.split('')
      const controlSum = +eanCodeArr.pop()
      const sum = eanCodeArr.reduce((a, b, i) => (+a + (i % 2 ? +b * 3 : +b)), 0)

      return controlSum === (sum % 10 ? 10 - sum % 10 : 0)
  }