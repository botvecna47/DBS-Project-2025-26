const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  console.log('Starting full database export...');

  const data = {};

  // 1. Users
  data.users = await prisma.user.findMany();
  console.log(`Exported ${data.users.length} users.`);

  // 2. Providers
  data.providers = await prisma.provider.findMany();
  console.log(`Exported ${data.providers.length} providers.`);

  // 3. Services
  data.services = await prisma.service.findMany();
  console.log(`Exported ${data.services.length} services.`);

  // 4. Bookings
  data.bookings = await prisma.booking.findMany();
  console.log(`Exported ${data.bookings.length} bookings.`);

  // Write to file
  const backupPath = path.join(__dirname, 'prisma/demo_data.json');
  fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));

  console.log(`✅ Database exported to ${backupPath}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
