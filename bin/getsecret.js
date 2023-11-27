import * as fs from 'fs';
import { getSecretFromQR } from '../ggl-auth-token-gen.js';

fs.readdir('./qr', (err, files) => {
  if (err) throw err;

  if (files.length > 0) {
    files.forEach(async(eachFile) => {
      if (eachFile === '.gitignore') return;
      if (eachFile === '.DS_Store') return;

      console.log(`File found: qr/${eachFile}`);
      const secret = await getSecretFromQR(`qr/${eachFile}`)
      console.log('');
      console.log('Secret:');
      console.log(secret);
    })
  }
});

