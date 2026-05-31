<div align="center">

<img src="https://33uee5uclf.ufs.sh/f/fa600f97-6cf2-4759-8641-3093d13591bf-6rrk6b.png" alt="Resonance" width="720" />

<br />
<br />

<h1>Resonance</h1>

<p><strong>The open-source ElevenLabs alternative.</strong></p>

<p>AI-powered text-to-speech and voice cloning platform built with Next.js 16, React 19, and Chatterbox TTS.</p>

<br />

[![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/SioRb1?referralCode=ANTONIO&utm_medium=integration&utm_source=template&utm_campaign=generic)

<br />

<p>
  <a href="https://clerk.com"><img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" /></a>&nbsp;
  <a href="https://polar.sh"><img src="https://img.shields.io/badge/Polar-000000?style=for-the-badge&logo=polar&logoColor=white" alt="Polar" /></a>&nbsp;
  <a href="https://railway.app"><img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" alt="Railway" /></a>&nbsp;
  <a href="https://sentry.io"><img src="https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=sentry&logoColor=white" alt="Sentry" /></a>&nbsp;
  <a href="https://cloudflare.com"><img src="https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare" /></a>&nbsp;
  <a href="https://www.prisma.io"><img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" /></a>
</p>

</div>

<br />

## 📚 Tutorial

[![Watch on YouTube](https://img.shields.io/badge/Watch_the_Full_Course-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://cwa.run/resonance-gh-yt)

Learn how to build this entire project from scratch in a **free 12-hour video course** on YouTube. The tutorial covers every aspect of the platform—authentication, text-to-speech generation, voice cloning, subscription billing, and production deployment.

Each chapter has a corresponding Git branch for easy reference:

| Branch                           | Chapter                                    |
| -------------------------------- | ------------------------------------------ |
| `main`                           | Complete project with all features         |
| `02-dashboard`                   | Dashboard layout and navigation setup      |
| `03-text-to-speech-ui`           | TTS interface and voice controls           |
| `04-backend-infrastructure`      | Backend setup (tRPC, R2, Prisma, database) |
| `05-voice-selection`             | Voice library and management               |
| `06-tts-generation-audio-player` | Audio generation and playback              |
| `07-tts-history-polish`          | History management and UI refinement       |
| `bonus-sentry-error-monitoring`  | Error tracking and monitoring              |

---

## 🎯 Project Overview

Resonance is a full-stack web application that provides an open-source alternative to commercial text-to-speech services. It enables users to generate natural-sounding speech from text and create custom voice profiles using their own audio samples. The platform features organization-based multi-tenancy, subscription billing, and a modern, responsive user interface.

**Key Capabilities:**

- Generate speech from text with 20+ built-in voices
- Create and manage custom voice clones
- Adjust audio characteristics (temperature, top-p, top-k, repetition penalty)
- View generation history and replay audio
- Manage subscriptions and track usage costs
- Organization-level access control

---

## ✨ Key Features

### Text-to-Speech Generation

- Convert any text (up to 5,000 characters) to natural-sounding speech
- Support for 20 pre-configured system voices with professional descriptions
- Adjustable synthesis parameters for fine-grained control over audio output
- Real-time audio preview with embedded player
- One-click audio downloads and playback

### Voice Management

- **System Voices**: Pre-built voice library with multiple categories
  - Audiobook, Conversational, Customer Service, General, Narrative
  - Characters, Meditation, Motivational, Podcast, Advertising
  - Voiceover, Corporate
- **Custom Voices**: Create personalized voice profiles by uploading sample audio
  - Voice cloning with minimum 10-second audio samples
  - Support for multiple audio formats (WAV, MP3, etc.)
  - Voice categorization and language selection
  - Up to 20 MB file size limit

### Generation History

- Complete history of all generated audio
- Searchable and organized by generation date
- Direct audio links with expiring signed URLs
- Metadata tracking (voice used, parameters, creation date)
- One-click deletion of generations

### Subscription Billing

- Usage-based pricing integrated with Polar
- Track estimated monthly costs in real-time
- Three metered billing dimensions:
  - Voice creation events
  - TTS generation requests
  - Character count processing
- Flexible subscription management and cancellation
- Customer portal for billing and subscription details

### Multi-Tenant Architecture

- Organization-based data isolation
- Separate custom voices per organization
- Shared access to system voices
- Organization-level subscription management
- Automatic authentication and authorization

---

## 🏗️ Tech Stack

### Frontend

- **Framework**: Next.js 16.1.6 with App Router
- **Language**: TypeScript 5
- **UI Library**: React 19.2.3
- **Styling**: Tailwind CSS 4 with PostCSS
- **Component Library**: Radix UI with Shadcn/ui
- **Forms**: React Hook Form 7.71.2 + TanStack React Form 1.28.3
- **State Management**: TanStack React Query 5.90.21
- **URL State Management**: Nuqs 2.8.8
- **Audio Visualization**: WaveSurfer.js 7.12.1
- **Audio Recording**: RecordRTC 5.6.2
- **Charts**: Recharts 2.15.4
- **UI Components**: Embla Carousel, React Resizable Panels
- **Notifications**: Sonner 2.0.7
- **Icons**: Lucide React 0.575.0
- **Avatars**: DiceBear 9.3.2

### Backend

- **Framework**: Next.js 16.1.6 (API Routes & Server Components)
- **RPC**: tRPC 11.10.0 with TanStack React Query integration
- **Database ORM**: Prisma 7.4.1 with PostgreSQL adapter
- **Database**: PostgreSQL (via Prisma Accelerate)
- **Validation**: Zod 4.3.6
- **Data Transform**: SuperJSON 2.2.6

### Authentication & Authorization

- **Auth Provider**: Clerk 6.38.1
- **Session Management**: Built-in via Clerk
- **Organization Management**: Clerk Organizations

### External Services

- **Text-to-Speech Engine**: Chatterbox TTS (deployed on Modal)
- **Billing**: Polar 0.45.0 (metered subscriptions)
- **File Storage**: Cloudflare R2 (S3-compatible object storage)
- **Error Tracking**: Sentry 10.40.0

### Build & Development Tools

- **Package Manager**: npm with TypeScript tooling
- **Linting**: ESLint 9
- **Schema Management**: Prisma schema with migrations
- **API Client Generation**: OpenAPI Fetch 0.17.0 + OpenAPI TypeScript 7.13.0
- **Database Driver**: PostgreSQL adapter (pg 8.18.0)
- **Build Tools**: Tailwind CSS compiler, PostCSS 4

---

## 📁 Architecture & Folder Structure

```
resonance/
├── src/
│   ├── app/                           # Next.js App Router
│   │   ├── api/                       # API route handlers
│   │   │   ├── audio/[generationId]/  # Audio retrieval endpoint
│   │   │   ├── voices/create/         # Voice creation endpoint
│   │   │   └── trpc/[trpc]/           # tRPC endpoint
│   │   ├── (dashboard)/               # Protected dashboard routes
│   │   │   ├── layout.tsx             # Sidebar layout
│   │   │   ├── page.tsx               # Dashboard homepage
│   │   │   ├── text-to-speech/        # TTS page
│   │   │   └── voices/                # Voice management page
│   │   ├── org-selection/             # Organization selection
│   │   ├── sign-in/                   # Authentication pages
│   │   ├── sign-up/
│   │   ├── global-error.tsx           # Error boundary
│   │   ├── layout.tsx                 # Root layout with providers
│   │   └── globals.css                # Global styles
│   │
│   ├── features/                      # Feature modules
│   │   ├── billing/                   # Billing & subscription
│   │   │   ├── components/            # Billing UI components
│   │   │   ├── hooks/                 # useCheckout hook
│   │   │   └── views/                 # Billing views
│   │   ├── dashboard/                 # Dashboard home
│   │   │   ├── components/            # Dashboard components
│   │   │   └── views/
│   │   ├── text-to-speech/            # TTS generation
│   │   │   ├── components/            # Form, input, settings panels
│   │   │   ├── contexts/              # Voice context provider
│   │   │   ├── data/                  # Constants (max length, cost)
│   │   │   ├── hooks/                 # Custom hooks
│   │   │   └── views/                 # Main TTS views
│   │   └── voices/                    # Voice library
│   │       ├── components/            # Voice list, toolbar
│   │       ├── data/                  # Voice categories, scoping
│   │       ├── hooks/
│   │       ├── lib/                   # Search params handling
│   │       └── views/
│   │
│   ├── components/                    # Shared UI components
│   │   ├── page-header.tsx
│   │   └── ui/                        # Shadcn/Radix components
│   │       ├── accordion, alert, avatar, badge, button
│   │       ├── card, carousel, checkbox, dialog, drawer
│   │       ├── form, input, label, pagination, sidebar
│   │       ├── table, tabs, tooltip, and more...
│   │
│   ├── hooks/                         # Global custom hooks
│   │   ├── use-app-form.ts            # Form wrapper hook
│   │   ├── use-audio-playback.ts      # Audio playback control
│   │   ├── use-mobile.ts              # Mobile detection
│   │
│   ├── lib/                           # Utilities and clients
│   │   ├── chatterbox-client.ts       # TTS API client
│   │   ├── db.ts                      # Prisma client singleton
│   │   ├── env.ts                     # Environment validation
│   │   ├── polar.ts                   # Polar SDK client
│   │   ├── r2.ts                      # Cloudflare R2 storage
│   │   └── utils.ts                   # Helper functions
│   │
│   ├── trpc/                          # tRPC setup
│   │   ├── client.tsx                 # React Query provider
│   │   ├── init.ts                    # tRPC router initialization
│   │   ├── query-client.ts            # React Query config
│   │   ├── server.tsx                 # Server component wrapper
│   │   └── routers/
│   │       ├── billing.ts             # Subscription management
│   │       ├── generations.ts         # TTS history & generation
│   │       ├── voices.ts              # Voice CRUD operations
│   │       └── _app.ts                # Root router
│   │
│   ├── types/                         # TypeScript definitions
│   │   └── chatterbox-api.d.ts        # Generated TTS API types
│   │
│   ├── instrumentation.ts             # Sentry registration hook
│   ├── instrumentation-client.ts      # Client-side Sentry
│   └── proxy.ts                       # Request proxying utility
│
├── prisma/
│   ├── schema.prisma                  # Database schema
│   └── migrations/                    # Database migrations
│
├── scripts/
│   ├── seed-system-voices.ts          # Initialize system voices
│   ├── sync-api.ts                    # Sync Chatterbox API
│   └── system-voices/                 # Voice sample audio files
│
├── public/                            # Static assets
│
├── configuration/
│   ├── next.config.ts                 # Next.js configuration with Sentry
│   ├── tsconfig.json                  # TypeScript configuration
│   ├── tailwind.config.mjs            # Tailwind CSS config
│   ├── postcss.config.mjs             # PostCSS plugins
│   ├── eslint.config.mjs              # ESLint rules
│   ├── components.json                # Shadcn component registry
│   ├── sentry.server.config.ts        # Server-side error tracking
│   ├── sentry.edge.config.ts          # Edge function error tracking
│   └── prisma.config.ts               # Prisma configuration
│
├── .env.example                       # Environment variables template
├── package.json                       # Dependencies and scripts
├── package-lock.json                  # Locked dependencies
├── README.md                          # This file
└── chatterbox_tts.py                  # Modal TTS deployment script

```

### Directory Pattern Explanation

- **`(dashboard)` parentheses**: Next.js route groups—visual organization without affecting URL structure
- **`[[...sign-in]]` brackets**: Catch-all dynamic routes for Clerk authentication
- **`[trpc]`, `[generationId]`**: Dynamic route segments matched to request parameters
- **`views/`**: Page-level component containers
- **`components/`**: Reusable UI building blocks
- **`hooks/`**: Custom React hooks
- **`lib/`**: Utility functions and client instances
- **`data/`**: Constants and static data

---

## 🚀 Installation & Setup

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: 18.17+ (check with `node --version`)
- **npm**: 9+ (included with Node.js)
- **Git**: Latest version
- **PostgreSQL**: 14+ (for local development or remote database)
- **Accounts Created**:
  - [Clerk](https://dashboard.clerk.com) – Authentication
  - [Polar](https://dashboard.polar.sh) – Billing management
  - [Cloudflare R2](https://dash.cloudflare.com) – File storage
  - [Chatterbox TTS](https://modal.com) – Text-to-speech engine
  - [Sentry](https://sentry.io) – Error tracking
  - [Railway](https://railway.app) (optional) – Deployment

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/resonance.git
cd resonance
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all frontend and backend dependencies, and run the Prisma post-install script to generate the database client.

### Step 3: Set Up Environment Variables

Copy the example environment file and configure it with your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration (see [Environment Variables](#-environment-variables-required) section below).

### Step 4: Set Up the Database

```bash
# Run migrations to create tables
npm run prisma migrate deploy

# Seed the database with system voices
npm run prisma db seed
```

The seed script uploads 20 system voices to your Cloudflare R2 bucket and creates entries in your database.

### Step 5: Start the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

### Step 6: Create Your First Account

1. Navigate to http://localhost:3000
2. Click "Sign Up"
3. Complete the Clerk registration
4. You'll be redirected to organization selection—create or join an organization
5. Start using the application!

---

## 🔐 Environment Variables Required

Create a `.env.local` file in the root directory with the following variables:

### Database Configuration

```env
DATABASE_URL=postgresql://user:password@host:port/resonance
```

- PostgreSQL connection string for your database

### Clerk Authentication

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

- Get these from [Clerk Dashboard](https://dashboard.clerk.com)
- The NEXT*PUBLIC*\* variables are safely exposed to the browser

### Polar Billing

```env
POLAR_ACCESS_TOKEN=your_access_token
POLAR_SERVER=sandbox  # or 'production'
POLAR_PRODUCT_ID=product_id
POLAR_METER_VOICE_CREATION=voice_creation
POLAR_METER_TTS_GENERATION=tts_generation
POLAR_METER_TTS_PROPERTY=characters
```

- Create a product in [Polar Dashboard](https://dashboard.polar.sh)
- Configure usage-based pricing with three metered dimensions

### Chatterbox TTS (Text-to-Speech Engine)

```env
CHATTERBOX_API_URL=https://your-modal-endpoint.com
CHATTERBOX_API_KEY=your_api_key
HF_ACCESS_TOKEN=your_huggingface_token
```

- Deploy the Modal application (see [chatterbox_tts.py](./chatterbox_tts.py))
- Get HF token from [Hugging Face](https://huggingface.co/settings/tokens)

### Cloudflare R2 (Object Storage)

```env
R2_ACCOUNT_ID=your_account_id
R2_ACCESS_KEY_ID=your_access_key
R2_SECRET_ACCESS_KEY=your_secret_key
R2_BUCKET_NAME=your_bucket_name
R2_TOKEN=your_r2_token  # For optional deployment scripts
```

- Create a bucket in [Cloudflare R2](https://dash.cloudflare.com/login?to=/:account/r2)
- Generate credentials via "Create API Token"

### Sentry Error Tracking

```env
SENTRY_AUTH_TOKEN=your_sentry_token
```

- Get from [Sentry Project Settings](https://sentry.io/settings/account/api/auth-tokens/)
- Optional but recommended for production monitoring

### Application Configuration

```env
APP_URL=http://localhost:3000  # For production: https://yourdomain.com
SKIP_ENV_VALIDATION=false  # Set to true to skip environment checks during build
```

### Complete Example

See [.env.example](./.env.example) for a full template with all variables.

---

## 🗄️ Database Setup

### Schema Overview

The database uses PostgreSQL with two main models:

#### Voice Model

Stores both system voices and custom user-created voices.

```prisma
model Voice {
  id              String          @id @default(cuid())
  orgId           String?         # null for system voices
  name            String
  description     String?
  category        VoiceCategory   # 12 categories available
  language        String          @default("en-US")
  variant         VoiceVariant    # SYSTEM or CUSTOM
  r2ObjectKey     String?         # S3 path to audio sample

  generations     Generation[]    # Related TTS outputs
  createdAt       DateTime        @default(now())
  updatedAt       DateTime        @updatedAt

  @@index([variant])
  @@index([orgId])
}

enum VoiceCategory {
  AUDIOBOOK, CONVERSATIONAL, CUSTOMER_SERVICE, GENERAL,
  NARRATIVE, CHARACTERS, MEDITATION, MOTIVATIONAL,
  PODCAST, ADVERTISING, VOICEOVER, CORPORATE
}

enum VoiceVariant {
  SYSTEM    # Available to all users
  CUSTOM    # Organization-specific
}
```

#### Generation Model

Tracks all TTS generation requests and outputs.

```prisma
model Generation {
  id                  String    @id @default(cuid())
  orgId               String    # Organization that created it

  voiceId             String?   # Reference to voice used
  voice               Voice?    @relation(fields: [voiceId])

  text                String    # Input text (up to 5000 chars)
  voiceName           String    # Snapshot of voice name
  r2ObjectKey         String?   # S3 path to audio output

  # TTS Parameters
  temperature         Float     # 0.0-2.0: creativity
  topP                Float     # 0.0-1.0: nucleus sampling
  topK                Int       # 1-10000: diversity
  repetitionPenalty   Float     # 1.0-2.0: avoid repetition

  createdAt           DateTime  @default(now())
  updatedAt           DateTime  @updatedAt

  @@index([orgId])
  @@index([voiceId])
}
```

### Initial Setup

1. **Create Database**: PostgreSQL instance (local or hosted)
2. **Run Migrations**: `npm run prisma migrate deploy`
3. **Seed Voices**: `npm run prisma db seed`
   - Uploads 20 system voice samples to R2
   - Creates voice records in the database
4. **Verify**: Check your database with `npm run prisma studio`

### Development Workflow

```bash
# Create new migration after schema changes
npm run prisma migrate dev --name description_of_change

# View and edit data in browser GUI
npm run prisma studio

# Reset database (development only!)
npm run prisma migrate reset
```

---

## 🔌 API Endpoints

### tRPC Endpoints

The application uses tRPC for type-safe API communication between frontend and backend. All endpoints require authentication via Clerk.

#### Voices Router (`trpc.voices.*`)

**Get All Voices**

```typescript
trpc.voices.getAll.query({ query?: string })
```

- Returns system and custom voices
- Optional text search by name or description
- Results organized as `{ custom: Voice[], system: Voice[] }`

**Delete Custom Voice**

```typescript
trpc.voices.delete.mutate({ id: string });
```

- Deletes voice from database and R2 storage
- Only organization owners can delete custom voices
- Returns `{ success: boolean }`

#### Generations Router (`trpc.generations.*`)

**Get Generation by ID**

```typescript
trpc.generations.getById.query({ id: string });
```

- Retrieves a single TTS generation
- Returns generation metadata and audio URL
- Audio URL: `/api/audio/{generationId}`

**Get All Generations**

```typescript
trpc.generations.getAll.query();
```

- Retrieves entire generation history for organization
- Sorted by creation date (newest first)
- Returns array with metadata and audio URLs

**Create Generation (Generate Speech)**

```typescript
trpc.generations.create.mutate({
  text: string,
  voiceId: string,
  temperature?: number,
  topP?: number,
  topK?: number,
  repetitionPenalty?: number,
})
```

- Input text: 1-5000 characters
- Requires active subscription
- Temperature: 0.0-2.0 (default: 0.8)
- topP: 0.0-1.0 (default: 0.95)
- topK: 1-10000 (default: 1000)
- repetitionPenalty: 1.0-2.0 (default: 1.2)
- Returns generation ID and audio URL

#### Billing Router (`trpc.billing.*`)

**Get Subscription Status**

```typescript
trpc.billing.getStatus.query();
```

- Returns billing status and estimated monthly cost
- Response: `{ hasActiveSubscription: boolean, customerId?: string, estimatedCostCents: number }`

**Create Checkout Session**

```typescript
trpc.billing.createCheckout.mutate();
```

- Initiates Polar subscription flow
- Returns checkout URL to redirect user
- Response: `{ checkoutUrl: string }`

**Create Billing Portal**

```typescript
trpc.billing.createPortalSession.mutate();
```

- Opens customer billing management portal
- Allows viewing invoices and managing subscriptions
- Response: `{ portalUrl: string }`

### REST API Endpoints

#### Generate Audio

```http
GET /api/audio/{generationId}
```

- Streams generated audio file
- Returns audio/wav with 1-hour cache
- Requires valid organization ownership
- Uses signed URLs for secure S3 access

#### Create Custom Voice

```http
POST /api/voices/create?name=VoiceName&category=GENERAL&language=en-US&description=Optional
Content-Type: audio/*
Body: Audio file binary
```

- Creates a custom voice from audio sample
- Required: name, category, language
- Optional: description
- Audio validation:
  - Minimum 10 seconds duration
  - Maximum 20 MB file size
  - Supported formats: WAV, MP3, FLAC, etc.
- Returns voice metadata on success

---

## 💬 Usage Guide

### Text-to-Speech Generation Workflow

1. **Navigate to Text-to-Speech**
   - From dashboard, click "Text to Speech" in sidebar
   - Or navigate to `/text-to-speech`

2. **Enter Text**
   - Type or paste content in the text input panel (up to 5,000 characters)
   - Character count displays in real-time

3. **Select Voice**
   - Choose from system voices (built-in) or custom voices (organization-created)
   - Voice selector shows voice name, category, and language
   - Search available using the voice dropdown

4. **Adjust Parameters** (Optional)
   - **Temperature** (0.0-2.0): Lower = more consistent, Higher = more creative
   - **Top P** (0.0-1.0): Controls diversity of vocabulary
   - **Top K** (1-10000): Limits vocabulary to top K most likely tokens
   - **Repetition Penalty** (1.0-2.0): Higher = less repetition

5. **Generate Audio**
   - Click "Generate" button
   - Requires active subscription (will prompt if needed)
   - Generation appears in history upon completion

6. **Play & Download**
   - Audio player embedded in results
   - Controls: play/pause, volume, playback speed
   - Click download icon to save audio file

### Voice Management Workflow

#### Using Built-in Voices

1. Navigate to "Voices" in sidebar
2. "Built-in Voices" section shows 20 professional voices
3. Each voice displays:
   - Voice name and category
   - Language and description
   - Use in TTS by selecting from dropdown

#### Creating Custom Voices

1. Click "Create Voice" button in voices toolbar
2. Fill in voice details:
   - **Name**: Identify your custom voice
   - **Category**: Select primary use case
   - **Language**: Set audio language
   - **Description**: Add notes about the voice
3. Upload audio sample:
   - Minimum 10 seconds of clean audio
   - Maximum 20 MB file size
   - Supported formats: WAV, MP3, FLAC, OGG, etc.
4. Click "Upload"
5. Voice is immediately available for TTS generation

#### Managing Custom Voices

1. Navigate to "Voices" page
2. "Team Voices" section shows your organization's custom voices
3. Actions available:
   - Use in TTS generation (via selector)
   - Delete voice (click delete icon)
4. Search voices by name or description

### Subscription & Billing

1. **Check Current Status**
   - Dashboard shows current subscription status
   - View estimated monthly cost based on usage

2. **Subscribe to Start**
   - If no active subscription, click "Subscribe" button
   - Redirects to Polar checkout
   - Complete payment to activate

3. **Manage Subscription**
   - Click "Billing" or account menu
   - Opens customer portal
   - View invoices, update payment method, cancel subscription

4. **Track Usage**
   - Estimated cost updates in real-time
   - Based on three meters:
     - Voice creation events
     - TTS generation requests
     - Character count processed

### Generation History

1. Navigate to "Text to Speech" or view sidebar
2. Generation history panel shows all previous generations
3. Click any generation to:
   - Replay audio
   - View generation parameters
   - Download audio file
   - Regenerate with same text

---

## 🖼️ Screenshots

> **Note**: Screenshots are currently not available. Below are placeholder sections describing each view.

### Dashboard

The home page provides:

- Quick statistics on account activity
- Recent generations preview
- Quick action buttons (Generate, Create Voice)
- Usage and cost overview

### Text-to-Speech Interface

- Large text input area with character counter
- Voice selector with search and filtering
- Advanced parameter controls with sliders
- Real-time generation status and progress
- Embedded audio player with playback controls
- Generation history sidebar

### Voice Library

- Organized sections: Custom Voices (Team) and Built-in Voices
- Search across all voices
- Voice card display with metadata
- One-click voice selection for TTS
- Create new voice button with file upload modal

### Billing Dashboard

- Current subscription status
- Estimated monthly cost breakdown
- Usage metrics for each metered dimension
- Buttons to manage billing and update payment information

---

## 🚀 Deployment Instructions

### Railway Deployment (Recommended)

The simplest way to deploy—one-click Railway integration:

1. **Click Deploy Button**

   ```
   [![Deploy on Railway](https://railway.com/button.svg)](https://railway.com/deploy/SioRb1?referralCode=ANTONIO)
   ```

2. **Configure Environment Variables**
   - Railway will prompt for all required env variables
   - Input values from your account configurations (Clerk, Polar, etc.)

3. **Deploy Database**
   - Railway handles PostgreSQL provisioning
   - Migrations run automatically via postinstall script

4. **Run Seed Script**
   - Execute in Railway terminal: `npm run prisma db seed`
   - Uploads system voices to R2

### Manual Deployment (Any Platform)

#### Step 1: Prepare Production Build

```bash
npm run build
npm run start
```

Verify build succeeds locally before deploying.

#### Step 2: Deploy Application

**Option A: Vercel**

```bash
npm install -g vercel
vercel --prod
```

- Automatically detects Next.js
- Configures build and runtime settings

**Option B: Docker**

```dockerfile
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
```

**Option C: Traditional Server (VPS)**

1. SSH into server
2. Clone repository
3. Install Node.js 18+
4. Run `npm install` and `npm run build`
5. Use PM2 for process management: `pm2 start npm --name "resonance" -- start`

#### Step 3: Configure Environment

1. Create `.env.local` with production values
2. Set `APP_URL` to your production domain
3. Update Clerk/Polar/R2 credentials for production
4. Enable Sentry for error monitoring

#### Step 4: Database & Seed

```bash
# Run migrations
npm run prisma migrate deploy

# Seed system voices
npm run prisma db seed
```

#### Step 5: Verify Deployment

1. Visit your production URL
2. Test authentication (sign up)
3. Test TTS generation
4. Verify voice uploads to R2
5. Check Sentry for errors

### Environment Configuration for Production

Update these for production:

```env
# Use production URLs
APP_URL=https://yourdomain.com
NEXT_PUBLIC_CLERK_SIGN_IN_URL=https://yourdomain.com/sign-in

# Switch to production Polar
POLAR_SERVER=production

# Use production Chatterbox endpoint
CHATTERBOX_API_URL=https://production-modal-endpoint.com

# Disable validation bypass
SKIP_ENV_VALIDATION=false
```

### Scaling Considerations

**Database**:

- Use connection pooling (Prisma handles this)
- Monitor query performance with Sentry
- Increase read replicas if needed

**Storage**:

- Cloudflare R2 automatically scales
- Consider CDN for audio distribution
- Monitor bandwidth costs

**Chatterbox TTS**:

- Scale Modal endpoint concurrency
- Monitor generation queue depth
- Use caching for repeated prompts

**Billing**:

- Polar handles subscriptions at scale
- Monitor metered usage accuracy
- Review pricing tiers regularly

---

## ⚡ Challenges Solved & Technical Highlights

### 1. Type-Safe Full-Stack Communication

**Challenge**: Building type-safe APIs without maintaining separate schema definitions.

**Solution**: Implemented tRPC with strict input validation using Zod. This enables:

- Automatic TypeScript inference on both client and server
- Zero-runtime overhead for type checking
- Automatic API documentation
- Compile-time safety for API contracts

### 2. Organization-Based Multi-Tenancy

**Challenge**: Isolating user data while maintaining organization contexts.

**Solution**: Leveraged Clerk's native organization system:

- Each user belongs to organizations
- `orgProcedure` middleware enforces organization context
- Custom voices scoped to organizations
- Automatic data isolation in queries
- System voices shared across all organizations

### 3. Usage-Based Metered Billing

**Challenge**: Accurately tracking and charging for variable-rate usage (voice creation, TTS generation, character processing).

**Solution**: Integrated Polar's metered billing:

- Three independent usage meters synchronized with database events
- Real-time cost estimation displayed to users
- Prevents operations without active subscription
- Automatic usage aggregation in customer portal

### 4. Audio Processing Pipeline

**Challenge**: Handling file uploads, validation, conversion, and storage at scale.

**Solution**: Built a robust pipeline:

- Client-side file validation (size, format)
- Server-side duration validation using `music-metadata`
- Async upload to Cloudflare R2 with error handling
- Signed URLs for secure audio delivery
- Background cleanup on generation failure

### 5. Real-Time Parameter Adjustment

**Challenge**: Enabling fine-grained control over TTS output quality and characteristics.

**Solution**: Exposed advanced TTS parameters with:

- Temperature for creativity control (0.0-2.0)
- Top-P and Top-K for vocabulary diversity
- Repetition penalty for preventing repetitive speech
- Real-time slider controls with parameter descriptions
- Server-side validation and range checking

### 6. Error Tracking in Production

**Challenge**: Monitoring application health across frontend, backend, and API integrations.

**Solution**: Integrated Sentry for:

- Automatic error capture on client and server
- Source map uploads for readable stack traces
- tRPC middleware integration for API error context
- User PII capture for better issue investigation
- Custom Sentry logging throughout the application

### 7. Efficient State Management

**Challenge**: Managing complex client state across authentication, TTS parameters, and subscription status.

**Solution**: Layered approach:

- Clerk for authentication state (handled externally)
- TanStack React Query for server state (auto-caching, pagination)
- React Hook Form for form state (minimal bundle impact)
- Context API for feature-specific state (voices, TTS settings)
- URL parameters for navigation state (via Nuqs)

### 8. Audio Synthesis with Chatterbox

**Challenge**: Integrating with an external TTS service (Modal-deployed Chatterbox).

**Solution**: Created abstraction layer:

- OpenAPI schema generation from Chatterbox
- Type-safe client with `openapi-fetch`
- Error handling and retry logic
- Logging and tracing via Sentry
- Fallback mechanisms for service unavailability

---

## 🔮 Future Improvements

### Planned Features

1. **Voice Cloning Enhancement**
   - Multi-sample voice training for better quality
   - Real-time voice preview before TTS generation
   - Voice similarity scoring and recommendations

2. **Advanced Audio Editing**
   - Waveform-based audio trimming and splitting
   - Pitch and speed adjustment post-generation
   - Audio concatenation and multi-voice synthesis

3. **Batch Processing**
   - Upload CSV with text and voice mappings
   - Schedule batch generation jobs
   - Download all outputs as ZIP archive
   - Cost estimation before processing

4. **API for Developers**
   - RESTful API with API key authentication
   - Webhook notifications for generation completion
   - Rate limiting and usage quotas
   - Official SDKs (Node.js, Python, JavaScript)

5. **Advanced Analytics**
   - Generation success rate and performance metrics
   - Most-used voices and parameters
   - Cost analysis and optimization recommendations
   - User engagement tracking

6. **Multi-Language Support**
   - Localization for major languages
   - Character detection for language-specific processing
   - Regional voice selection

7. **Real-Time Streaming**
   - Stream audio as it's being generated (instead of waiting)
   - Reduced latency for interactive use cases
   - Client-side audio buffering

8. **Team Collaboration**
   - Share generations within organization
   - Collaborative voice library management
   - Role-based access controls (admin, editor, viewer)

9. **Advanced Voice Management**
   - Voice comparison tool
   - Voice quality scoring
   - Voice similarity search
   - Voice versioning and rollback

10. **Monitoring & Observability**
    - Custom dashboards for generation metrics
    - Performance profiling for TTS quality
    - Detailed usage reports and forecasting

---

## 🤝 Contributing Guidelines

We welcome contributions to make Resonance better! Here's how to get started:

### Code of Conduct

- Be respectful and inclusive
- Constructive feedback only
- No harassment or discrimination

### How to Contribute

1. **Fork the Repository**

   ```bash
   git clone https://github.com/yourusername/resonance.git
   cd resonance
   ```

2. **Create a Feature Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**
   - Follow the existing code style
   - Keep commits atomic and well-described
   - Add tests for new functionality
   - Update documentation as needed

4. **Follow Code Standards**

   ```bash
   # Run linter
   npm run lint

   # Fix formatting issues
   npm run lint -- --fix
   ```

5. **Test Your Changes**

   ```bash
   npm run dev
   # Manually test in the browser
   ```

6. **Commit and Push**

   ```bash
   git commit -m "feat: add descriptive message"
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Use clear title describing the change
   - Reference related issues
   - Include screenshots for UI changes
   - Describe motivation and test results

### Development Workflow

- **Frontend Changes**: Develop in `src/` with Next.js dev server (`npm run dev`)
- **Database Changes**: Create migration, test with `npm run prisma migrate dev`
- **API Changes**: Update routers in `src/trpc/routers/`, test with tRPC DevTools
- **Dependencies**: Run `npm install`, update both `package.json` and `package-lock.json`

### Areas for Contribution

- Bug fixes and error handling improvements
- Feature implementations from the roadmap
- Documentation and tutorial improvements
- Performance optimizations
- Test coverage
- UI/UX enhancements
- Localization/internationalization

---

## 📄 License

This project is licensed under the **MIT License**—you are free to use, modify, and distribute this software with proper attribution.

See [LICENSE](./LICENSE) for the full license text.

### Key License Terms

✅ **You can**:

- Use this software commercially or personally
- Modify and create derivative works
- Distribute your modified versions
- Use privately or publicly

❌ **You must**:

- Include the original license and copyright notice
- State changes made to the code

### Attribution

When using or distributing Resonance, please include:

```
Based on Resonance, the open-source ElevenLabs alternative
https://github.com/yourusername/resonance
Licensed under MIT License
```

---

## 📞 Support & Community

- **Issues**: Report bugs on [GitHub Issues](https://github.com/yourusername/resonance/issues)
- **Discussions**: Join conversations in [GitHub Discussions](https://github.com/yourusername/resonance/discussions)
- **Documentation**: Full docs available in this README and [GitHub Wiki](https://github.com/yourusername/resonance/wiki)
- **Video Tutorial**: [12-hour free course on YouTube](https://cwa.run/resonance-gh-yt)

---

## 🙏 Acknowledgments

This project was built with these amazing open-source tools and services:

- **Next.js** – The React framework for production
- **Prisma** – Type-safe database ORM
- **tRPC** – Type-safe APIs made easy
- **Shadcn/UI** – Re-usable component library
- **Tailwind CSS** – Utility-first CSS framework
- **Clerk** – Authentication platform
- **Polar** – Creator billing platform
- **Cloudflare R2** – S3-compatible object storage
- **Modal** – Serverless Python functions
- **Sentry** – Error tracking and monitoring

---

## 📊 Project Statistics

- **Frontend Components**: 50+
- **API Endpoints**: 6 (tRPC) + 2 (REST)
- **Database Models**: 2
- **Lines of Code**: 5,000+
- **Dependencies**: 50+
- **System Voices**: 20
- **Supported Voice Categories**: 12
- **Max Text Length**: 5,000 characters
- **Max Audio Upload**: 20 MB

---

## 🔗 Quick Links

- [Repository](https://github.com/yourusername/resonance)
- [Live Demo](https://resonance.example.com)
- [Documentation](./README.md)
- [Issue Tracker](https://github.com/yourusername/resonance/issues)
- [Discussions](https://github.com/yourusername/resonance/discussions)
- [YouTube Tutorial](https://cwa.run/resonance-gh-yt)

---

**Made with ❤️ by [Your Name/Team]**

Last updated: May 2026
| `08-voice-management` | Voice management and cloning |
| `09-billing` | Billing and usage metering |

```bash
git checkout 04-backend-infrastructure  # example: jump to Chapter 4
```

## Features

- **Text-to-Speech** - Generate speech from text with adjustable creativity, variety, expression, and flow parameters
- **Zero-Shot Voice Cloning** - Upload or record a voice sample (10s minimum) and clone it instantly - no fine-tuning required
- **20 Built-in Voices** - Pre-seeded system voices across 12 categories and 5 locales
- **Waveform Audio Player** - WaveSurfer.js visualization with seek, play/pause, and download
- **Multi-Tenant** - Team-based access via Clerk Organizations with full data isolation
- **Usage-Based Billing** - Pay-as-you-go character metering with configurable pricing via Polar products and meters
- **Generation History** - Browse and replay past generations with preserved voice metadata
- **Fully Responsive** - Mobile-first with bottom drawers, compact controls, and adaptive layouts

## Getting Started

### Prerequisites

- Node.js **20.9** or later
- [Prisma Postgres](https://cwa.run/prisma) database
- [Clerk](https://cwa.run/clerk) account (with Organizations enabled)
- [Cloudflare R2](https://cwa.run/cloudflare-r2) bucket
- [Modal](https://cwa.run/modal) account (for GPU-hosted TTS)
- [Polar](https://cwa.run/polar) account (for billing)

### 1. Clone and install

```bash
git clone https://github.com/code-with-antonio/resonance.git
cd resonance
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Fill in the blank values in `.env`. Sensible defaults (Clerk routes, Polar meter names, `APP_URL`, etc.) are pre-filled.

### 3. Set up Polar billing

In your [Polar](https://cwa.run/polar) dashboard, create two **meters** under **Meters**:

1. **Voice Creation** meter
   - Filter: Name equals `voice_creation`
   - Aggregation: **Count**

2. **Text-to-Speech Characters** meter
   - Filter: Name equals `tts_generation`
   - Aggregation: **Sum** over `characters`

Then create a new **product** with **Recurring subscription** pricing. Under **Price Type**, add two metered prices:

1. Click **Add metered price** and select the **Text-to-Speech Characters** meter
   - Set the **Amount per unit** (price per character, e.g. `$0.003`)
   - Optionally set a **Cap amount** (e.g. `$100`)

2. Click **Add metered price** again and select the **Voice Creation** meter
   - Set the **Amount per unit** (price per voice generation, e.g. `$0.25`)
   - Optionally set a **Cap amount** (e.g. `$100`)

With only metered prices, the subscription starts at **$0/month** and scales with usage. If you want a baseline subscription fee (e.g. $20/month), add a third price to the same product — select a **fixed price** instead of a metered price. This requires no code changes since fixed prices are handled entirely by Polar.

Ensure **Allow multiple subscriptions** is turned **off** under **Settings > Billing** (this is the Polar default).

Copy the product ID into `POLAR_PRODUCT_ID`. The meter filter names and aggregation property must match the `POLAR_METER_*` env variables.

### 4. Set up the database

```bash
npx prisma migrate deploy
```

### 5. Deploy the TTS engine

The included `chatterbox_tts.py` is adapted from [Modal's official Chatterbox TTS example](https://cwa.run/modal-tts), modified to read voice reference audio directly from your R2 bucket instead of a Modal Volume.

Before deploying, update `chatterbox_tts.py` with your R2 credentials:

```python
R2_BUCKET_NAME = "<your-r2-bucket-name-here>"
R2_ACCOUNT_ID = "<your-r2-account-id-here>"
```

Then create the required secrets in your [Modal dashboard](https://cwa.run/modal-secrets):

| Secret Name          | Keys                                         | Description                                                       |
| -------------------- | -------------------------------------------- | ----------------------------------------------------------------- |
| `cloudflare-r2`      | `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | R2 API credentials (used for bucket mount)                        |
| `chatterbox-api-key` | `CHATTERBOX_API_KEY`                         | API key to protect the endpoint (use any strong random string)    |
| `hf-token`           | `HF_TOKEN`                                   | Hugging Face token (for downloading the Chatterbox model weights) |

Deploy to Modal:

```bash
modal deploy chatterbox_tts.py
```

This deploys Chatterbox TTS to a serverless NVIDIA A10G GPU on Modal. The container mounts your R2 bucket read-only for direct access to voice reference audio. Use the resulting Modal URL as `CHATTERBOX_API_URL` in your `.env.local`.

> **Note:** The first request after a period of inactivity may take longer due to cold starts as Modal provisions the GPU container.

Once deployed, generate the type-safe Chatterbox client from the OpenAPI spec:

```bash
npm run sync-api
```

### 6. Seed voices

```bash
npx prisma db seed
```

Seeds 20 built-in voices to the database and R2. The system voice WAV files are included in the repository and originate from [Modal's voice sample pack](https://modal-cdn.com/blog/audio/chatterbox-tts-voices.zip).

### 7. Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Self-Hosting

Resonance is designed to be self-hosted. You'll need:

1. **A PostgreSQL database** - [Prisma Postgres](https://cwa.run/prisma) (recommended), or any managed Postgres
2. **Cloudflare R2** - For audio storage (S3-compatible, generous free tier)
3. **Modal** - For serverless GPU inference (pay-per-second billing)
4. **Clerk** - For authentication and multi-tenancy
5. **Polar** - For metered billing (use sandbox mode with card `4242 4242 4242 4242` for testing)

Deploy the Next.js app to any Node.js host (Railway, Docker, etc.).

## Project Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (dashboard)/            # Protected routes (home, TTS, voices)
│   ├── api/                    # Audio proxy routes + tRPC handler
│   ├── sign-in/                # Clerk auth pages
│   └── sign-up/
├── components/                 # Shared UI components (shadcn/ui + custom)
├── features/
│   ├── dashboard/              # Home page, quick actions
│   ├── text-to-speech/         # TTS form, audio player, settings, history
│   ├── voices/                 # Voice library, creation, recording
│   └── billing/                # Usage display, checkout
├── hooks/                      # App-wide hooks
├── lib/                        # Core: db, r2, polar, env, chatterbox client
├── trpc/                       # tRPC routers, client, server helpers
├── generated/                  # Prisma client
└── types/                      # Generated API types
```

## Scripts

| Command            | Description                                       |
| ------------------ | ------------------------------------------------- |
| `npm run dev`      | Start dev server                                  |
| `npm run build`    | Production build                                  |
| `npm run start`    | Start production server                           |
| `npm run lint`     | Lint with ESLint                                  |
| `npm run sync-api` | Regenerate Chatterbox API types from OpenAPI spec |

## Acknowledgements

- [Chatterbox TTS](https://github.com/resemble-ai/chatterbox) by Resemble AI - the open-source zero-shot voice cloning model powering speech generation
- [Modal](https://cwa.run/modal-tts) - serverless GPU deployment example and [voice sample pack](https://modal-cdn.com/blog/audio/chatterbox-tts-voices.zip)
