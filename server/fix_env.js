const fs = require('fs');
const path = require('path');

try {
  const backupPath = path.resolve('.env.backup');
  const envPath = path.resolve('.env');
  
  if (!fs.existsSync(backupPath)) {
    console.error('Backup file .env.backup not found!');
    process.exit(1);
  }

  let content = fs.readFileSync(backupPath, 'utf8');
  console.log('Read backup content length:', content.length);
  
  // Replace DATABASE_URL line
  // Handle both CRLF and LF
  const newUrl = 'DATABASE_URL="mysql://root:botvecna47@localhost:3306/mh26_services"';
  
  if (content.includes('DATABASE_URL=')) {
    content = content.replace(/^DATABASE_URL=.*$/m, newUrl);
  } else {
    content = newUrl + '\n' + content;
  }

  // Add SMTP settings if missing or placeholder (using provided ones or generic instructions)
  // For now I will set the ones seen in the output earlier or leave them be if user wants to change them manually.
  // Actually, user said "email is not being sent". The previous dump showed:
  // SMTP_USER=mh26services@gmail.com
  // SMTP_PASS=xxdx iisn twmu mikg
  // These look like app passwords. I will ensure they are uncommented and present.
  
  const smtpLines = [
    'SMTP_HOST=smtp.gmail.com',
    'SMTP_PORT=587',
    'SMTP_USER=mh26services@gmail.com',
    'SMTP_PASS="xxdx iisn twmu mikg"',
    'SMTP_FROM="MH26 Services" <mh26services@gmail.com>'
  ];
  
  for (const line of smtpLines) {
    const key = line.split('=')[0];
    if (content.includes(key + '=')) {
      // replace
      const regex = new RegExp(`^${key}=.*$`, 'm');
      content = content.replace(regex, line);
    } else {
      // append
      content += '\n' + line;
    }
  }

  fs.writeFileSync(envPath, content, 'utf8');
  console.log('Successfully wrote to .env');
  console.log('New content preview:\n', content.substring(0, 100));

} catch (err) {
  console.error('Error fixing .env:', err);
  process.exit(1);
}
