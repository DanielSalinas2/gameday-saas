# GameDay

A multi-tenant SaaS platform for managing amateur sports leagues.

## Features (Planned)

- **Multi-tenant architecture**: Each league is isolated from others
- **Team management**: Create and manage teams within a league
- **Game scheduling**: Schedule games and record scores
- **Standings**: Automatic standings calculation with configurable point values
- **White-label**: Customizable branding per league
- **Invitation-only access**: Admins invite users by email

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js (Phase 2)
- **Email**: Resend (Phase 4)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database (local or hosted)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd gameday
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env`:
   - Add your PostgreSQL database URL to `DATABASE_URL`
   - Generate and add an auth secret:
     ```bash
     openssl rand -base64 32
     ```
     Copy the output to `AUTH_SECRET` in `.env`

4. Set up the database:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages (login, register)
│   ├── (dashboard)/       # Protected dashboard pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and configurations
│   ├── db.ts              # Prisma client singleton
│   └── utils.ts           # Helper functions
├── services/              # Business logic layer
└── types/                 # TypeScript type definitions
```

## Development Phases

- [x] Phase 1: Project Foundation
- [x] Phase 2: Authentication System
- [ ] Phase 3: League Management (Multi-Tenancy)
- [ ] Phase 4: Invitation System
- [ ] Phase 5: Team Management
- [ ] Phase 6: Game Management
- [ ] Phase 7: Standings & Calendar
- [ ] Phase 8: White-Label & Polish
- [ ] Phase 9: Production Readiness

## Testing the App

### Local Development

After setup, test authentication:

1. Start the dev server: `npm run dev`
2. Visit http://localhost:3000
3. Click "Get Started" to create an account
4. After registration, you'll be redirected to the dashboard
5. Test logout and login functionality

### GitHub Codespaces

1. Open your Codespace
2. Run `cp .env.example .env`
3. Edit `.env` and set `DATABASE_URL` (use Supabase or Neon for hosted PostgreSQL)
4. Generate auth secret: `openssl rand -base64 32` and add to `.env` as `AUTH_SECRET`
5. Run migrations: `npx prisma migrate dev --name init`
6. Start server: `npm run dev`
7. Open the forwarded port (shown in PORTS tab)

**Note**: In Codespaces, the dev server will be accessible via a forwarded URL like `https://[codespace-name]-3000.app.github.dev`

## License

Private - All rights reserved.
