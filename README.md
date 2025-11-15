# FitPro - Premium Workout Mobile App

A beautiful, fully functional mobile workout app built with React Native and Expo, featuring an ultra-modern UI with smooth animations and comprehensive workout tracking.

## 🌟 Features

### Core Functionality
- **Onboarding Experience** - Smooth 3-screen swipeable onboarding with gradient backgrounds
- **6 Workout Categories** - Back, Biceps, Chest, Triceps, Shoulders, and Legs
- **60 Complete Workouts** - 10 exercises per category with detailed instructions
- **Exercise Details** - Step-by-step instructions, muscles worked, tips, and rep recommendations
- **Rest Timer** - Circular progress timer with pause/resume functionality
- **Favorites System** - Save and manage your favorite workouts
- **Weekly Plan Generator** - Auto-generated 7-day workout plans with reshuffle option
- **Progress Tracker** - Calendar-based workout completion tracking
- **Settings & Preferences** - Theme selection, haptic feedback, animations toggle

### Design Features
- ✨ **Large Typography** - Clear, readable text throughout
- 🎨 **Soft Gradients** - Beautiful gradient backgrounds on all major screens
- 🔲 **Rounded Cards** - Modern card-based UI with smooth corners
- 🌫️ **Glassmorphism** - Frosted glass effect on workout cards
- 🎭 **Micro-animations** - Smooth scale, fade, and slide animations
- 🌊 **Smooth Transitions** - React Native Reanimated for 60fps animations
- 🎯 **Bottom Tab Navigation** - Easy access to all main features
- 🌓 **Dark Mode** - Full light/dark theme support with auto-detection

## 📱 Screenshots

The app includes:
- Gradient hero sections
- Animated category cards
- Collapsible exercise detail sections
- Interactive calendar for progress tracking
- Premium glassmorphic workout cards
- Smooth theme transitions

## 🛠️ Tech Stack

- **React Native** - Cross-platform mobile framework
- **Expo** - Development platform and tools
- **React Navigation** - Navigation library (Bottom Tabs + Stack)
- **React Native Reanimated** - High-performance animations
- **Expo Linear Gradient** - Beautiful gradient effects
- **Expo Haptics** - Tactile feedback
- **AsyncStorage** - Local data persistence
- **Expo Vector Icons** - Icon library

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional)

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd fitness-mobile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your device or emulator:
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Scan QR code with Expo Go app on your physical device

## 📂 Project Structure

```
fitness-mobile/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── AnimatedButton.js
│   │   ├── CategoryCard.js
│   │   ├── GlassCard.js
│   │   ├── GradientCard.js
│   │   ├── SearchBar.js
│   │   └── WorkoutCard.js
│   ├── contexts/           # React Context providers
│   │   ├── AppContext.js
│   │   └── ThemeContext.js
│   ├── data/              # Static data
│   │   └── workouts.js
│   ├── navigation/        # Navigation configuration
│   │   ├── AppNavigator.js
│   │   ├── MainNavigator.js
│   │   └── OnboardingNavigator.js
│   └── screens/           # App screens
│       ├── CategoryScreen.js
│       ├── ExerciseDetailScreen.js
│       ├── FavoritesScreen.js
│       ├── HomeScreen.js
│       ├── OnboardingScreen.js
│       ├── ProgressScreen.js
│       ├── SettingsScreen.js
│       └── WeeklyPlanScreen.js
├── App.js                 # Root component
├── babel.config.js        # Babel configuration
├── package.json          # Dependencies
└── README.md            # This file
```

## 🎯 Key Components

### AppContext
Manages global app state including:
- Favorites management
- Weekly plan generation and reshuffling
- Progress tracking (completed workouts)
- User preferences (haptics, animations, reminders)
- Onboarding status

### ThemeContext
Handles theming with:
- Light/Dark/Auto theme modes
- Dynamic color schemes
- System theme detection
- Persistent theme preference

### Navigation
- **Bottom Tab Navigator** - 5 main tabs (Home, Favorites, Plan, Progress, Settings)
- **Stack Navigator** - Nested navigation for Home -> Category -> Exercise Detail
- **Onboarding Navigator** - Separate flow for first-time users

## 🎨 Design Principles

The app follows modern mobile design principles:
- **High Spacing** - Generous padding and margins
- **Elevated Shadows** - Subtle depth with shadow layers
- **Pastel Colors** - Soft, eye-friendly color palettes
- **Haptic Feedback** - Physical response to user actions
- **Smooth Animations** - 60fps spring and timing animations
- **Accessibility** - Clear typography and good contrast

## 💾 Data Persistence

All user data is stored locally using AsyncStorage:
- Onboarding completion status
- Favorite workouts
- Weekly workout plan
- Progress tracking (completed days)
- User preferences
- Theme selection

## 🚀 Features in Detail

### Onboarding
- 3 swipeable screens with smooth animations
- Dynamic paginator with animated dots
- Gradient backgrounds matching app theme
- Large icons and clear messaging

### Home Screen
- Time-based greeting (Morning/Afternoon/Evening)
- Search functionality for workouts
- 6 animated category cards with gradients
- Pro tip section with helpful information

### Category Screen
- 10 workouts per category
- Difficulty badges (Beginner/Intermediate/Advanced)
- Duration estimates
- Smooth fade-in animations
- Quick access to favorites

### Exercise Detail Screen
- Collapsible sections for better organization
- Step-by-step instructions with numbered steps
- Muscles worked with visual tags
- Pro tips for proper form
- Rest timer with circular progress
- One-tap favorite toggle

### Favorites Screen
- Grid layout of saved workouts
- Smooth removal animations
- Empty state with helpful messaging
- Quick navigation to exercise details

### Weekly Plan
- Auto-generated 7-day workout plan
- One workout per muscle group per week
- Individual day reshuffle option
- Complete plan regeneration
- Visual category badges

### Progress Tracker
- Monthly calendar view
- Tap to toggle completion
- Stats showing completed days and percentage
- Month navigation
- Visual indicators for today and completed days

### Settings
- Theme selection (Light/Dark/Auto)
- Haptic feedback toggle
- Animations toggle
- Reminders toggle
- App information and version

## 🔧 Customization

### Adding New Workouts
Edit `src/data/workouts.js` and add new workout objects to the appropriate category array.

### Modifying Themes
Edit `src/contexts/ThemeContext.js` to customize light and dark theme colors.

### Changing Categories
Update the `CATEGORIES` array in `src/data/workouts.js`.

## 📱 Running the App

### Development
```bash
npm start
# or
npx expo start
```

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Web
```bash
npm run web
```

## 🐛 Troubleshooting

### Reanimated Issues
If you encounter animation issues, make sure `react-native-reanimated/plugin` is the last plugin in your `babel.config.js`.

### AsyncStorage
Clear app data if you experience issues with persisted state:
```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.clear();
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💪 Built With
- Love for fitness and clean code
- Attention to detail in UI/UX
- Performance optimization in mind
- Accessibility as a priority

---

**Happy Workouts! 💪🏋️**
