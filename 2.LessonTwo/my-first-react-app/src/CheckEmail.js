// Email validation with a library
const validator = require('email-validator')
console.log(validator.validate('skjdf@lkdfvn.com'));

// Email validation with function
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
console.log(validateEmail('skjdf@lkdfvncom'));

export default validateEmail;