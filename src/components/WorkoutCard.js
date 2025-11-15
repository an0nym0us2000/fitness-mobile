import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';
import GlassCard from './GlassCard';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const WorkoutCard = ({ workout, onPress, index = 0, showFavorite = true }) => {
  const { theme } = useTheme();
  const { preferences, isFavorite, toggleFavorite } = useApp();
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    opacity.value = withTiming(1, { duration: 300 + index * 50 });
  }, []);

  const handlePressIn = () => {
    if (preferences.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const handleFavoritePress = () => {
    if (preferences.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    toggleFavorite(workout.id);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return '#43e97b';
      case 'intermediate':
        return '#fa709a';
      case 'advanced':
        return '#f5576c';
      default:
        return theme.colors.textSecondary;
    }
  };

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
      style={[styles.container, animatedStyle]}
    >
      <GlassCard style={styles.card}>
        <View style={styles.content}>
          <View style={styles.leftContent}>
            <Text style={[styles.title, { color: theme.colors.text }]} numberOfLines={2}>
              {workout.name}
            </Text>
            <View style={styles.metaContainer}>
              <View style={[styles.badge, { backgroundColor: getDifficultyColor(workout.difficulty) + '20' }]}>
                <Text style={[styles.badgeText, { color: getDifficultyColor(workout.difficulty) }]}>
                  {workout.difficulty}
                </Text>
              </View>
              <Text style={[styles.duration, { color: theme.colors.textSecondary }]}>
                {workout.duration}
              </Text>
            </View>
          </View>
          {showFavorite && (
            <TouchableOpacity
              onPress={handleFavoritePress}
              style={styles.favoriteButton}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons
                name={isFavorite(workout.id) ? 'heart' : 'heart-outline'}
                size={24}
                color={isFavorite(workout.id) ? '#f5576c' : theme.colors.textSecondary}
              />
            </TouchableOpacity>
          )}
        </View>
      </GlassCard>
    </AnimatedTouchable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  card: {
    padding: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContent: {
    flex: 1,
    marginRight: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  duration: {
    fontSize: 14,
  },
  favoriteButton: {
    padding: 8,
  },
});

export default WorkoutCard;
