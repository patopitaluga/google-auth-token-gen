import 'dotenv/config'
import { getOTT } from '../ggl-auth-token-gen.js';

if (process.argv[process.argv.length - 1].endsWith('getott.js') && !process.env.GOOGLE_AUTH_SECRET) throw new Error('Missing secret param or env variable');

console.log(getOTT({ secret: process.argv[process.argv.length - 1] || process.env.GOOGLE_AUTH_SECRET }));
