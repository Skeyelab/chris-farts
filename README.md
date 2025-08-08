# Chris Farts - Fun Bouncing Cat Website 🐱

A fun and interactive website featuring a bouncing emoji cat that chases your mouse, flying hearts and snowflakes, and a magical circus tent! Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🐱 Mouse-Chasing Cat**: A cute cat emoji that actively chases your mouse cursor around the screen
- **💖 Flying Hearts**: 8 hearts with realistic physics that bounce around the screen
- **❄️ Flying Snowflakes**: 15 sparkles with rotation effects that float around
- **🎪 Magic Circus Tent**: Interactive tent that creates particle explosions and magical effects when clicked
- **✨ Flashing Text**: "hi chris" text that flashes with glow effects
- **🎈 Fun Decorations**: Balloons and other fun elements
- **🔗 GitHub Link**: Easy access to the source code
- **📱 Responsive Design**: Works on all screen sizes
- **♿ Accessibility**: Full keyboard navigation and screen reader support
- **🛡️ Error Handling**: Graceful error boundaries for better user experience
- **⚡ TypeScript**: Full type safety throughout the application

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── BouncingCat.tsx      # Cat animation component
│   ├── FlashingText.tsx     # Flashing text component
│   ├── FlyingHearts.tsx     # Flying hearts with physics
│   ├── FlyingSnowflakes.tsx # Flying snowflakes with rotation
│   ├── MagicCircus.tsx      # Interactive magic circus tent
│   ├── FunElements.tsx      # Fun decorative elements
│   ├── GitHubLink.tsx       # GitHub repository link
│   ├── ErrorBoundary.tsx    # Error handling component
│   └── index.ts             # Component exports
├── hooks/
│   ├── useBouncingCat.ts    # Custom hook for cat animation
│   ├── useFlashingText.ts   # Custom hook for text flashing
│   └── index.ts             # Hook exports
├── constants/
│   ├── animation.ts         # Animation configuration
│   └── site.ts              # Site-specific constants
├── types/
│   └── index.ts             # TypeScript interfaces
├── utils/
│   └── helpers.ts           # Utility functions
└── config/
    └── index.ts             # App configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Skeyelab/chris-farts.git
cd chris-farts
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 How to Play

### 🐱 Cat Interaction
- **Move your mouse** around the screen
- **Watch the cat chase** your cursor
- **Cat gets excited** (grows larger and brighter) when chasing
- **Cat bounces off walls** naturally

### 🎪 Magic Circus Tent
- **Click the circus tent** 🎪 in the top-left corner
- **Watch the magic happen**:
  - Tent transforms with color and size changes
  - 20 colorful particles explode from the tent
  - 30 sparkles appear across the screen
  - Magic portal opens with spinning rings
  - "🎪 MAGIC! 🎪" text appears
- **Effects last 3 seconds** then disappear

### 💖 Flying Hearts & ❄️ Snowflakes
- **Hearts and snowflakes** fly around automatically
- **Realistic physics** with gravity and air resistance
- **Wall bouncing** and smooth movement
- **Different sizes and opacities** for variety

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Architecture

The application follows a modular architecture with clear separation of concerns:

- **Components**: Reusable UI components with clear interfaces
- **Hooks**: Custom React hooks for business logic
- **Constants**: Centralized configuration values
- **Types**: TypeScript interfaces for type safety
- **Error Boundaries**: Graceful error handling

### Key Optimizations

1. **Modular Components**: Each feature is broken into separate, reusable components
2. **Custom Hooks**: Animation logic is separated into custom hooks
3. **Type Safety**: Full TypeScript coverage with proper interfaces
4. **Constants**: All configuration values are centralized
5. **Error Handling**: Error boundaries for graceful failure handling
6. **Performance**: Optimized animations and efficient re-renders
7. **Accessibility**: Proper ARIA labels and semantic HTML

## 🎨 Customization

### Changing Cat Behavior

Edit `src/hooks/useBouncingCat.ts`:

```typescript
// Change chase radius (how far cat can sense mouse)
const chaseRadius = 300; // pixels

// Change chase force (how strongly cat is attracted to mouse)
const chaseForce = Math.min(1, chaseRadius / distance) * 0.5;

// Change maximum velocity
const maxVelocity = 8; // units per frame
```

### Modifying Flying Elements

Edit `src/components/FlyingHearts.tsx` or `src/components/FlyingSnowflakes.tsx`:

```typescript
// Change number of elements
const initialHearts: FlyingHeart[] = Array.from({ length: 8 }, ...);

// Change physics parameters
newVelY += 0.02; // Gravity strength
newVelX *= 0.999; // Air resistance
```

### Customizing Magic Circus

Edit `src/components/MagicCircus.tsx`:

```typescript
// Change number of particles
const newParticles = Array.from({ length: 20 }, ...);

// Change magic duration
setTimeout(() => setShowMagic(false), 3000); // 3 seconds

// Change particle colors
color: ['#FF6B6B', '#4ECDC4', '#45B7D1', ...]
```

### Modifying Colors

Update the gradient in `src/constants/animation.ts`:

```typescript
gradient: 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500',
```

## 🐛 Troubleshooting

### Common Issues

1. **Cat not chasing**: Check browser console for errors
2. **Animations not working**: Ensure CSS animations are enabled
3. **Performance issues**: Reduce number of flying elements in components
4. **Magic circus not working**: Check if JavaScript is enabled

### Error Handling

The application includes error boundaries that will display a friendly error message if something goes wrong. Check the browser console for detailed error information.

## 📝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Fun Facts

- The cat uses realistic physics to chase your mouse
- Hearts and snowflakes have individual physics with gravity and air resistance
- The magic circus tent creates 20 particles with 7 different colors
- All animations are optimized for 60fps performance
- The website is fully responsive and accessible
- The cat will never catch your mouse (it's designed to be just out of reach!)

## 🌟 Interactive Elements

- **🐱 Cat**: Chases your mouse cursor
- **💖 Hearts**: 8 hearts with physics bouncing around
- **❄️ Snowflakes**: 15 sparkles with rotation effects
- **🎪 Circus Tent**: Click for magical particle explosion
- **🎈 Balloon**: Bounces in the top-right corner
- **🔗 GitHub Link**: Top-right corner for source code

---

Made with ❤️ and lots of fun! 🎈✨

*Try to lead the cat around the screen, click the circus tent for magic, and enjoy the flying hearts and snowflakes!*
