# MH26 Services - Nanded's Local Marketplace 🛠️🏡

![Project Status](https://img.shields.io/badge/Status-Active_Development-green)
![License](https://img.shields.io/badge/License-MIT-blue)

**MH26 Services** is a platform built for **Nanded (MH26)**. We're connecting local residents with trusted, skilled service providers like plumbers, electricians, and carpenters. No more calling around or asking neighbors for phone numbers—just find who you need, check their profile, and book them.

---

## Why we built this
Finding a good handyman in Nanded shouldn't be a hassle. We wanted to:
*   **Simplify the Search**: Find the right person for the job in seconds.
*   **Build Trust**: See real profiles and eventually reviews before you book.
*   **Help Locals Grow**: Give skilled workers in our city a better way to find customers.

## What you can do
*   **For Customers**: Search for services, book appointments, and chat with providers (simulated integration).
*   **For Providers**: Create a business profile, showcase your work in a gallery, and track your bookings.

## Under the Hood
We built this using a modern stack to make sure it's fast and reliable:
*   **Frontend**: React & Vite for a snappy experience.
*   **Styling**: Tailwind CSS for clean looks.
*   **Backend**: Node.js & Express.
*   **Database**: MySQL with Prisma ORM.

## Running it locally
If you want to play around with the code, here's how to get it running.

### You'll need:
*   Node.js (v16+)
*   MySQL installed and running locally.

### Steps:

1.  **Clone the repo**:
    
    **Option A: Using Command Line (Git)**
    If you have Git installed, open your terminal and run:
    ```bash
    git clone https://github.com/botvecna47/DBS-Project-2025-26.git
    cd DBS-Project-2025-26
    ```

    **Option B: No Git installed? (Download ZIP)**
    1.  Go to the repository page.
    2.  Click the **<> Code** button (green).
    3.  Select **Download ZIP**.
    4.  Extract the ZIP folder to your desktop.
    5.  Open that folder in VS Code.

2.  **Install everything**:
    ```bash
    cd server && npm install
    cd ../frontend && npm install
    ```

3.  **Setup the DB**:
    *   Create a `.env` file in `server/` with your database URL.
    *   Make sure your database URL allows MySQL connections.
    *   Run migrations:
        ```bash
        npx prisma migrate dev --name init
        npx prisma db seed
        ```

4.  **Start it up**:
    ```bash
    # From root
    npm run dev
    ```
    Frontend will be at `http://localhost:5173`, Backend at `http://localhost:3000`.

## 🎓 College Demo Setup (Portability Pack)

If you are running this on a new PC and want to restore your previous data:

1.  **Restore Environment**:
    - Rename `server/.env.demo` to `server/.env`.

2.  **Restore Database**:
    - Build the project first: `npx prisma generate`
    - Run the seed command:
    ```bash
    cd server
    npx prisma db seed
    ```
    - The script will automatically detect `demo_data.json` and restore your Users, Providers, Services, and Bookings exactly as they were.

### ⚠️ Important Checks for College PC
To make sure the demo goes smoothly, check these 3 things on the college computer:
1.  **Node.js Version**: Run `node -v`. It must be **v16 or higher**. (If it's v12 or v14, the app might crash).
2.  **MySQL is Installed**: The computer must have MySQL server installed. You cannot run this without it.
    *   *Tip*: If the college MySQL password is different (e.g., empty or 'root'), open `.env` and update the `DATABASE_URL` password section.
3.  **Internet Access**: You need internet for the **first step** (`npm install`) to download libraries. After that, the app runs offline.

## Documentation
We have more detailed guides if you're interested:
*   [Database Reference](docs/reference/DB.md) 🗄️
*   [Technical Architecture](docs/specs/ARCHITECTURE.md) 🏗️
*   [Setup & Troubleshooting](docs/guides/TROUBLESHOOTING.md) 🔧
*   [SQL Implementation Details](docs/reference/SQL_IMPLEMENTATION.md) 💻

---
*Made with ❤️ for Nanded.*
