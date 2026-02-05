# Quick Start Guide - Phase 2

## Setup Instructions

### 1. Update Your Environment File

```bash
# Copy the example if you haven't already
cp .env.example .env
```

Edit `.env` and set:

```bash
# Your PostgreSQL database URL
DATABASE_URL="postgresql://user:password@host:5432/database"

# Generate a random secret for auth
# Run: openssl rand -base64 32
AUTH_SECRET="paste-your-generated-secret-here"
```

### 2. Run Database Migration

```bash
# Create the users table
npx prisma migrate dev --name add_user_model

# Generate Prisma Client
npx prisma generate
```

### 3. Start the Development Server

```bash
npm run dev
```

### 4. Test the Authentication

1. Open http://localhost:3000 (or your Codespace forwarded URL)
2. Click "Get Started"
3. Fill out the registration form
4. You'll be redirected to the dashboard
5. Test logout and login

## Database Options

### Option 1: Local PostgreSQL

Install PostgreSQL locally:
- Mac: `brew install postgresql@16`
- Windows: Download from postgresql.org
- Linux: `sudo apt install postgresql`

Then:
```bash
createdb gameday
# Use: postgresql://postgres:password@localhost:5432/gameday
```

### Option 2: Supabase (Free, Recommended for Codespaces)

1. Go to https://supabase.com
2. Create a new project
3. Go to Settings → Database
4. Copy the "Connection string" (URI mode)
5. Paste into `.env` as `DATABASE_URL`

### Option 3: Neon (Free)

1. Go to https://neon.tech
2. Create a new project
3. Copy the connection string
4. Paste into `.env` as `DATABASE_URL`

## Troubleshooting

### "Invalid `prisma.user.create()` invocation"
→ You forgot to run `npx prisma migrate dev`

### "AUTH_SECRET environment variable is not set"
→ Add `AUTH_SECRET` to your `.env` file

### "Connection refused" or database errors
→ Check your `DATABASE_URL` is correct and the database is running

### Middleware redirect loop
→ Clear your browser cookies and try again

### Port 3000 not accessible in Codespaces
→ Check the PORTS tab in the bottom panel and click the globe icon

## What You Can Do Now

✅ Register new users
✅ Login with email/password
✅ Access protected dashboard
✅ Logout
✅ View session information

## What's Next

Phase 3 will add:
- League creation
- Multi-tenant isolation
- League memberships with roles
- League switching

---

Need help? Check `PHASE2_SUMMARY.md` for detailed technical documentation.
