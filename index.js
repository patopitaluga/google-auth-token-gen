import * as crypto from 'crypto';
import base32 from 'base32.js';

const digest = (options) => {
  const secretAsBuffer = base32.decode(options.secret);
  const buf = Buffer.alloc(8);
  let tmp = Math.floor(Date.now() / 30 / 1000);
  for (let i = 0; i < 8; i++) {
    buf[7 - i] = tmp & 0xff; // mask 0xff over number to get last 8
    tmp = tmp >> 8; // shift 8 and get ready to loop over the next batch of 8
  }
  const hmac = crypto.createHmac('sha1', secretAsBuffer);
  hmac.update(buf);
  return hmac.digest();
};

export const getOTT = ({ secret }) => {
  const digits = 6;
  const digested = digest({ secret });
  const offset = digested[digested.length - 1] & 0xf;
  // calculate binary code (RFC4226 5.4)
  let code = (digested[offset] & 0x7f) << 24 |
    (digested[offset + 1] & 0xff) << 16 |
    (digested[offset + 2] & 0xff) << 8 |
    (digested[offset + 3] & 0xff);
  code = new Array(digits + 1).join('0') + code.toString(10); // left-pad code

  return code.substr(-digits); // return length number off digits
}
