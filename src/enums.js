import { Object } from 'core-js';

const enums = Object.freeze({
  msgs: {
    TOKEN: "Token"
  },
  errs: {
    ERR: "Error",
    PASS_MIN_LEN: "pass should have minimum len of 6",
    PASS_NOT_MATCH: "pass and confirm pass should match",
    CALL_NOT_SUCCESS: "Call was not successful"
  }
});

export default enums;