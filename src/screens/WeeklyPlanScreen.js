import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';
import { CATEGORIES } from '../data/workouts';
import AnimatedButton from '../components/AnimatedButton';
import GlassCard from '../components/GlassCard';

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const DayCard = ({ day, workout, onReshuffle, onPress, index }) => {
  const { theme } = useTheme();
  const { preferences } = useApp();
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSpring(1, { delay: index * 100 });
  }, []);

  const category = CATEGORIES.find(cat => cat.id === workout.category);

  const handlePressIn = () => {
    if (preferences.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    scale.value = withSpring(0.98);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const handleReshufflePress = () => {
    if (preferences.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    onReshuffle();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    };
  });

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.9}
      style={[styles.dayCardContainer, animatedStyle]}
    >
      <GlassCard style={styles.dayCard}>
        <View style={styles.dayHeader}>
          <View>
            <Text style={[styles.dayName, { color: theme.colors.text }]}>{day}</Text>
            <View style={styles.categoryBadge}>
              <LinearGradient
                colors={category?.gradient || theme.colors.gradients.primary}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.categoryBadgeGradient}
              >
                <Ionicons name={category?.icon || 'fitness'} size={12} color="#FFFFFF" />
                <Text style={styles.categoryBadgeText}>{category?.name}</Text>
              </LinearGradient>
            </View>
          </View>
          <TouchableOpacity
            onPress={handleReshufflePress}
            style={[styles.reshuffleButton, { backgroundColor: theme.colors.primary + '20' }]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons name="shuffle" size={18} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
        <Text style={[styles.workoutName, { color: theme.colors.text }]} numberOfLines={2}>
          {workout.name}
        </Text>
        <View style={styles.workoutMeta}>
          <Text style={[styles.workoutDifficulty, { color: theme.colors.textSecondary }]}>
            {workout.difficulty}
          </Text>
          <Text style={[styles.workoutDuration, { color: theme.colors.textSecondary }]}>
            • {workout.duration}
          </Text>
        </View>
      </GlassCard>
    </AnimatedTouchable>
  );
};

const WeeklyPlanScreen = ({ navigation }) => {
  const { theme, isDark } = useTheme();
  const { weeklyPlan, generateWeeklyPlan, reshuffleDay } = useApp();

  useEffect(() => {
    if (weeklyPlan.length === 0) {
      generateWeeklyPlan();
    }
  }, []);

  const handleWorkoutPress = (workout) => {
    navigation.navigate('Home', {
      screen: 'ExerciseDetail',
      params: { workout },
    });
  };

  const handleGenerateNewPlan = () => {
    generateWeeklyPlan();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header with gradient */}
      <LinearGradient
        colors={theme.colors.gradients.warning}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="calendar" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>Weekly Plan</Text>
            <Text style={styles.headerSubtitle}>
              Your personalized workout schedule
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {weeklyPlan.length === 0 ? (
          <View style={styles.loadingContainer}>
            <Text style={[styles.loadingText, { color: theme.colors.textSecondary }]}>
              Generating your weekly plan...
            </Text>
          </View>
        ) : (
          <>
            <View style={styles.planContainer}>
              {weeklyPlan.map((item, index) => (
                <DayCard
                  key={item.day}
                  day={item.day}
                  workout={item.workout}
                  onReshuffle={() => reshuffleDay(index)}
                  onPress={() => handleWorkoutPress(item.workout)}
                  index={index}
                />
              ))}
            </View>

            <View style={styles.buttonContainer}>
              <AnimatedButton
                title="Generate New Plan"
                onPress={handleGenerateNewPlan}
                colors={theme.colors.gradients.warning}
                icon={<Ionicons name="refresh" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />}
              />
            </View>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerGradient: {
    paddingBottom: 24,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  planContainer: {
    gap: 12,
  },
  dayCardContainer: {
    marginBottom: 4,
  },
  dayCard: {
    padding: 16,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  dayName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  categoryBadge: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  categoryBadgeGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 4,
  },
  categoryBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  reshuffleButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  workoutName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  workoutMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutDifficulty: {
    fontSize: 13,
  },
  workoutDuration: {
    fontSize: 13,
    marginLeft: 4,
  },
  buttonContainer: {
    marginTop: 24,
  },
  loadingContainer: {
    paddingVertical: 60,
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
  },
});

export default WeeklyPlanScreen;
