# Chris Farts - Fun Bouncing Cat Website 🐱

A fun and interactive website featuring a bouncing emoji cat and flashing text animations. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Bouncing Cat Animation**: A cute cat emoji that bounces around the screen with realistic physics
- **Flashing Text**: "hi chris" text that flashes with glow effects
- **Background Decorations**: Floating sparkles, hearts, and fun elements
- **Responsive Design**: Works on all screen sizes
- **Error Handling**: Graceful error boundaries for better user experience
- **TypeScript**: Full type safety throughout the application

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
│   ├── BackgroundDecorations.tsx # Background decorations
│   ├── FunElements.tsx      # Fun decorative elements
│   └── ErrorBoundary.tsx    # Error handling component
├── hooks/
│   ├── useBouncingCat.ts    # Custom hook for cat animation
│   └── useFlashingText.ts   # Custom hook for text flashing
├── constants/
│   └── animation.ts         # Animation configuration
└── types/
    └── index.ts             # TypeScript interfaces
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

### Changing Animation Speed

Edit `src/constants/animation.ts`:

```typescript
export const ANIMATION_CONFIG: AnimationConfig = {
  interval: 50,        // Cat movement speed (lower = faster)
  flashInterval: 500,  // Text flash speed (lower = faster)
  catSize: 100,        // Cat collision boundary
  rotationAngle: 180,  // Rotation on bounce
};
```

### Adding New Decorations

Add to `BACKGROUND_CONFIG.decorations` in `src/constants/animation.ts`:

```typescript
{
  emoji: '🎈',
  count: 5,
  className: 'text-2xl opacity-30 animate-bounce',
  animationDuration: { min: 2, max: 4 },
  opacity: 0.3,
}
```

### Modifying Colors

Update the gradient in `BACKGROUND_CONFIG`:

```typescript
gradient: 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500',
```

## 🐛 Troubleshooting

### Common Issues

1. **Cat not bouncing**: Check browser console for errors
2. **Animations not working**: Ensure CSS animations are enabled
3. **Performance issues**: Reduce decoration count in constants

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

- The cat bounces with realistic physics simulation
- Text flashes with beautiful glow effects
- Background decorations are randomly positioned
- All animations are optimized for performance
- The website is fully responsive and accessible

---

Made with ❤️ and lots of fun! 🎈✨
