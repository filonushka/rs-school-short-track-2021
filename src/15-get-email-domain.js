/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const arr = [];
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      arr.push(i);
    }
  }
  return email.substring(arr[arr.length - 1] + 1);
}

module.exports = getEmailDomain;
