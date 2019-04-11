'use strict';

const checkForBl = (strA) => {
  let isBalanced = true;
  for (let i = 0; i < (strA.length / 2); i++) {
    const isMatched = isMatchingPair(strA[i], strA[((strA.length) - i) - 1]);
    if (!isMatched) {
      isBalanced = false;
      break;
    }
  }
  return isBalanced;
};

const isMatchingPair = (c1, c2) => {
  {
    if (c1 == '(' && c2 == ')')
      return true;
    else if (c1 == '{' && c2 == '}')
      return true;
    else if (c1 == '[' && c2 == ']')
      return true;
    else
      return false;
  }
};

const isStringBalanced = (ip) => {
  const ipA = ip.split('');
  const len = ipA.length;
  if (len % 2 !== 0) return false;
  else return checkForBl(ipA);
};

const errorHandler = (err, req, res, next) => {
  if (typeof (err) === 'string') {
    // custom application error
    return res.status(400).json({message: err});
  }

  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({message: 'Invalid Token'});
  }

  // default to 500 server error
  return res.status(500).json({message: err.message});
};

module.exports = {
  isStringBalanced,
  errorHandler
};
