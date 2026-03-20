# Granboard App

A modern, feature-rich web application for Granboard electronic dartboards, built with Next.js and Web Bluetooth API. Includes real-time spectator support so friends can watch your games live from any device.

[![CI/CD](https://github.com/bastiennoel93/granboard-app/actions/workflows/ci.yml/badge.svg)](https://github.com/bastiennoel93/granboard-app/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

## Screenshots

<table>
  <tr>
    <td width="50%">
      <img src="docs/screenshots/home.png" alt="Home Screen" />
      <p align="center"><b>Home - Game Mode Selection</b></p>
    </td>
    <td width="50%">
      <img src="docs/screenshots/cricket-setup.png" alt="Cricket Setup" />
      <p align="center"><b>Cricket - Player Setup</b></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="docs/screenshots/cricket-game.png" alt="Cricket Game" />
      <p align="center"><b>Cricket - In-Game View</b></p>
    </td>
    <td width="50%">
      <img src="docs/screenshots/01-game.png" alt="01 Game" />
      <p align="center"><b>01 Game - Scoreboard</b></p>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <img src="docs/screenshots/settings.png" alt="Settings" />
      <p align="center"><b>Settings</b></p>
    </td>
  </tr>
</table>

## Features

### Available Game Modes

- **01 Games**
  - Classic countdown games (301, 501, 701)
  - Player order selection (random, throw for order, manual)
  - Real-time scoreboard with marks tracking
  - Undo functionality
  - Game history tracking

- **Cricket**
  - Standard Cricket gameplay
  - Cut-throat mode
  - Player order selection (random, throw for order, manual)
  - Real-time scoreboard with marks tracking
  - MPR (Marks Per Round) statistics
  - Undo functionality
  - Game history tracking

### Live Spectator Mode

Share your game with friends and let them watch in real-time from any device:

- **Go Live** - One click to start broadcasting your game
- **QR Code Sharing** - Scan to instantly join as a spectator on mobile
- **Game Code** - Short alphanumeric code for manual entry
- **Real-time Updates** - Spectators see every dart hit as it happens via WebSocket
- **Read-only View** - Spectators get a clean scoreboard without host controls
- **Spectator Count** - See how many people are watching your game
- **Works on any device** - Spectators only need a browser and internet (no Bluetooth required)

**Architecture:**
```
Dartboard (BLE) <-> Host Browser <-WebSocket-> Server <-WebSocket-> Spectator Browsers
```

### Core Features

- **Web Bluetooth Integration** - Direct connection to Granboard devices
- **Real-time Scoring** - Instant dart detection and scoring
- **Sound Effects & Animations** - Immersive audio feedback and visual effects for special achievements
- **Theme Support** - Light and dark mode with smooth transitions
- **Internationalization** - Full support for English, French, and Spanish
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, intuitive interface built with Tailwind CSS v4
- **Type Safety** - Full TypeScript implementation for reliability
- **Comprehensive Testing** - Unit tests (Jest) and E2E tests (Playwright)
- **Game History** - Complete turn-by-turn history with undo functionality

## Prerequisites

- **Node.js** 18.x or higher
- **pnpm** package manager
- **Granboard** electronic dartboard (3, 3s, or 132 model)
- **Modern Browser** with Web Bluetooth support (Chrome, Edge, or Opera)

## Installation

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/bastiennoel93/granboard-app.git
cd granboard-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Install WebSocket server dependencies:

```bash
cd server && npm install && cd ..
```

4. Start both the dev server and WebSocket server:

```bash
# Terminal 1 - Next.js
pnpm dev

# Terminal 2 - WebSocket server
cd server && npm run dev
```

5. Open [http://localhost:8080](http://localhost:8080) in your browser

### Self-Hosted Deployment (Docker)

The app is designed to run on a self-hosted server behind a Cloudflare Tunnel.

1. Create a `.env` file:

```bash
NEXT_PUBLIC_WS_URL=https://darts.yourdomain.com
```

2. Build and start:

```bash
docker compose up -d --build
```

This starts two containers:
- **web** (port 3000) - Next.js frontend
- **ws** (port 3001) - WebSocket server

3. Configure your Cloudflare Tunnel with two routes:

| Hostname | Service |
|---|---|
| `darts.yourdomain.com/socket.io/*` | `http://localhost:3001` |
| `darts.yourdomain.com/*` | `http://localhost:3000` |

Make sure WebSockets are enabled in your Cloudflare dashboard (Network > WebSockets).

### CI/CD

Pushing to `main` triggers automatic deployment via GitHub Actions on a self-hosted runner. The workflow:

1. Checks out the code
2. Creates `.env` from the `ENV_FILE` repository secret
3. Runs `docker compose up -d --build`
4. Cleans up old Docker images

## Usage

### Connecting to Granboard

1. Click on your desired game mode (01 or Cricket)
2. Click the "Connect to Board" button in the game
3. Select your Granboard device from the browser's Bluetooth pairing dialog
4. Start playing!

### Playing 01 Games (301, 501, 701)

1. Select **01** from the home screen
2. Choose your game mode (301, 501, or 701)
3. Add players
4. Select game options:
   - **Double Out** - Must finish on a double
   - **Max Rounds** - Optional round limit
5. Choose player order (random, throw for order, manual, or current)
6. Click "Start Game"
7. Connect your Granboard and start playing!

**Game Features:**
- Real-time score updates
- Automatic bust detection
- Statistics (Average, PPD)
- Turn history with undo functionality
- Victory animations and sound effects

### Playing Cricket

1. Select **Cricket** from the home screen
2. Choose game mode:
   - **Standard** - Score points after closing numbers
   - **Cut Throat** - Give points to opponents
3. Add players
4. Set max rounds (default: 20)
5. Choose player order (random, throw for order, manual, or current)
6. Click "Start Game"
7. Connect your Granboard and start throwing!

**Game Features:**
- Real-time marks tracking (visual indicators)
- MPR (Marks Per Round) statistics
- Turn history with detailed hit breakdown
- Undo functionality
- Special animations (Three in a Bed, Hat Trick)
- Sound effects for hits and achievements

### Sharing a Game (Live Spectating)

1. During any Cricket or 01 game, click the **"Go Live"** button in the game header
2. A room is created and you get a **game code** and **QR code**
3. Share the code or QR with friends
4. They open the link or enter the code on the home page under **"Watch a Game"**
5. Spectators see the live scoreboard update in real-time
6. Click **"Stop Sharing"** when done

### Watching a Game (Spectator)

1. On the home page, scroll down to **"Watch a Game"**
2. Enter the game code shared by the host
3. Click **"Join"**
4. Watch the game in real-time

### Settings & Customization

- **Theme** - Switch between light and dark mode
- **Volume** - Adjust sound effects volume
- **Sound** - Enable/disable sound effects
- **Language** - Switch between English, French, and Spanish

## Development

### Project Structure

```
granboard-app/
├── app/                           # Next.js app directory
│   ├── components/               # Shared UI components
│   │   ├── Card.tsx             # Reusable game card component
│   │   └── ShareGameDialog.tsx  # QR code & game sharing dialog
│   ├── contexts/                # React contexts
│   │   └── SettingsContext.tsx  # Global settings (theme, sound, volume)
│   ├── hooks/                   # Shared custom hooks
│   │   ├── useAnimations.tsx    # Animation system hook
│   │   ├── useGameRoom.ts      # Host-side room broadcasting hook
│   │   └── useSpectator.ts     # Spectator-side receiving hook
│   ├── cricket/                 # Cricket game module
│   │   ├── components/         # Cricket setup components
│   │   └── game/               # Cricket game implementation
│   │       ├── components/     # Game UI components
│   │       └── hooks/          # Game-specific hooks
│   ├── 01/                      # 01 games module (301, 501, 701)
│   │   ├── components/         # 01 setup components
│   │   └── game/               # 01 game implementation
│   │       ├── components/     # Game UI components
│   │       └── hooks/          # Game-specific hooks
│   ├── watch/[code]/           # Spectator watch page (dynamic route)
│   │   ├── page.tsx            # Spectator page with connection states
│   │   ├── SpectatorCricketBoard.tsx  # Read-only Cricket view
│   │   └── SpectatorZeroOneBoard.tsx  # Read-only 01 view
│   └── page.tsx                # Home page (game modes + watch game input)
├── server/                      # WebSocket server (Node.js + socket.io)
│   ├── src/
│   │   ├── index.ts            # Server entry point & event handlers
│   │   ├── rooms.ts            # Room management & lifecycle
│   │   └── types.ts            # Shared WebSocket event types
│   ├── Dockerfile              # Server container
│   ├── package.json            # Server dependencies (npm)
│   └── tsconfig.json           # Server TypeScript config
├── services/                    # Business logic & game engines
│   ├── granboard.ts            # Bluetooth connection service
│   ├── boardinfo.ts            # Segment definitions & enums
│   ├── cricket.ts              # Cricket game engine
│   ├── zeroone.ts              # 01 games engine
│   ├── serialization.ts        # Game state serialization for WebSocket
│   └── socketTypes.ts          # Client-side WebSocket type definitions
├── constants/                   # Centralized constants
│   ├── segments.ts             # Segment types and utilities
│   ├── animations.ts           # Animation timing constants
│   ├── sounds.ts               # Sound file paths
│   └── storage.ts              # Session storage keys
├── messages/                    # Internationalization files
│   ├── en.json                 # English translations
│   ├── fr.json                 # French translations
│   └── es.json                 # Spanish translations
├── __tests__/                   # Unit tests
├── e2e/                        # E2E tests with Playwright
├── public/                     # Static assets
│   └── assets/                # Images and sounds
├── docs/                       # Documentation
│   └── screenshots/            # README screenshots
├── Dockerfile                  # Next.js app container
├── docker-compose.yml          # Full deployment (web + ws)
└── .github/workflows/
    ├── ci.yml                  # Tests, lint, build on PRs
    └── deploy.yml              # Auto-deploy to self-hosted runner on push to main
```

### Key Directories Explained

- **`app/`** - Next.js 16 App Router structure with internationalization
- **`server/`** - WebSocket server for real-time spectator broadcasting (socket.io)
- **`services/`** - Pure TypeScript game logic, independent of UI
- **`constants/`** - Centralized constants for maintainability
- **`contexts/`** - Global state management (settings, theme, sound)
- **`hooks/`** - Reusable React hooks for common functionality
- **`e2e/`** - End-to-end tests including automated screenshot generation

### Available Scripts

```bash
# Development
pnpm dev              # Start Next.js dev server (port 8080)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint

# WebSocket Server
cd server
npm run dev           # Start server in watch mode (port 3001)
npm run build         # Compile TypeScript
npm start             # Start production server

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run unit tests in watch mode
pnpm test:coverage    # Generate coverage report
pnpm test:e2e         # Run E2E tests
pnpm test:e2e:ui      # Run E2E tests with UI
pnpm test:e2e:debug   # Debug E2E tests
```

### Key Technologies

- **Framework:** [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- **Bluetooth:** [Web Bluetooth API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API) - Direct device communication
- **Real-time:** [Socket.IO](https://socket.io/) - WebSocket-based spectator system
- **Testing:** [Jest](https://jestjs.io/) + [Playwright](https://playwright.dev/) - Unit and E2E testing
- **Deployment:** [Docker](https://www.docker.com/) + [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) - Self-hosted with zero-config TLS
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) - Automated testing and deployment

### Web Bluetooth API

This app requires a browser with Web Bluetooth support:

- Chrome (Desktop & Android)
- Edge (Desktop)
- Opera (Desktop & Android)
- Firefox (not supported)
- Safari (not supported)

**Note:** HTTPS or localhost is required for Web Bluetooth to work.

## Testing

### Unit Tests

Unit tests are located in the `__tests__` directory and test individual components and services.

```bash
pnpm test              # Run all tests
pnpm test:watch        # Watch mode
pnpm test:coverage     # With coverage report
```

### E2E Tests

End-to-end tests are located in the `e2e` directory and test complete user workflows.

```bash
pnpm test:e2e          # Run all E2E tests
pnpm test:e2e:ui       # Interactive UI mode
pnpm test:e2e:debug    # Debug mode
```

## Roadmap

- [x] Add 01 game modes (301, 501, 701)
- [x] Add sound effects and animations
- [x] Support for multiple languages (EN/FR/ES)
- [x] Dark/light theme toggle
- [x] Player turn history tracking
- [x] Undo functionality for both games
- [x] Live spectator mode (WebSocket broadcasting)
- [x] Docker deployment with Cloudflare Tunnel
- [ ] Implement practice mode with training exercises
- [ ] Add party games (Shanghai, Around the Clock, etc.)
- [ ] Create match mode for tournaments
- [ ] Build AI opponent system
- [ ] Add player profiles and statistics tracking
- [ ] Implement game replay functionality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`pnpm test && pnpm test:e2e`)
5. Run linter (`pnpm lint`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint configuration provided
- Write tests for new features
- Keep components small and focused
- Use meaningful variable and function names

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Granboard](https://www.gran-darts.com/) for creating amazing electronic dartboards
- The Next.js team for an excellent React framework
- All contributors who help improve this project

## Support

If you encounter any issues or have questions:

- Open an [issue](https://github.com/bastiennoel93/granboard-app/issues)
- Check existing issues for solutions
- Review the [Web Bluetooth API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API)
