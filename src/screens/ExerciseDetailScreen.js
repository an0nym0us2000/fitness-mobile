import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';
import AnimatedButton from '../components/AnimatedButton';
import GlassCard from '../components/GlassCard';
import { CATEGORIES } from '../data/workouts';

const CollapsibleSection = ({ title, children, icon, defaultOpen = false }) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const rotation = useSharedValue(defaultOpen ? 180 : 0);
  const height = useSharedValue(defaultOpen ? 1 : 0);

  const toggleSection = () => {
    setIsOpen(!isOpen);
    rotation.value = withSpring(isOpen ? 0 : 180);
    height.value = withTiming(isOpen ? 0 : 1);
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: height.value,
      maxHeight: height.value === 0 ? 0 : undefined,
    };
  });

  return (
    <GlassCard style={styles.sectionCard}>
      <TouchableOpacity onPress={toggleSection} activeOpacity={0.8}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleContainer}>
            <Ionicons name={icon} size={20} color={theme.colors.primary} />
            <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
              {title}
            </Text>
          </View>
          <Animated.View style={animatedIconStyle}>
            <Ionicons name="chevron-down" size={20} color={theme.colors.textSecondary} />
          </Animated.View>
        </View>
      </TouchableOpacity>
      {isOpen && (
        <Animated.View style={[styles.sectionContent, animatedContentStyle]}>
          {children}
        </Animated.View>
      )}
    </GlassCard>
  );
};

const RestTimer = ({ visible, onClose, initialSeconds = 60 }) => {
  const { theme } = useTheme();
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!visible) {
      setSeconds(initialSeconds);
      setIsRunning(true);
      return;
    }

    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [visible, isRunning, seconds]);

  const progress = (seconds / initialSeconds) * 100;
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <GlassCard style={styles.timerCard}>
          <Text style={[styles.timerTitle, { color: theme.colors.text }]}>
            Rest Time
          </Text>
          <View style={styles.timerCircle}>
            <Svg width="200" height="200">
              <Circle
                cx="100"
                cy="100"
                r="90"
                stroke={theme.colors.border}
                strokeWidth="10"
                fill="transparent"
              />
              <Circle
                cx="100"
                cy="100"
                r="90"
                stroke={theme.colors.primary}
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
              />
            </Svg>
            <View style={styles.timerTextContainer}>
              <Text style={[styles.timerText, { color: theme.colors.text }]}>
                {Math.floor(seconds / 60)}:{(seconds % 60).toString().padStart(2, '0')}
              </Text>
            </View>
          </View>
          <View style={styles.timerButtons}>
            <AnimatedButton
              title={isRunning ? 'Pause' : 'Resume'}
              onPress={() => setIsRunning(!isRunning)}
              variant="outline"
              style={styles.timerButton}
            />
            <AnimatedButton
              title="Done"
              onPress={onClose}
              style={styles.timerButton}
            />
          </View>
        </GlassCard>
      </View>
    </Modal>
  );
};

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { workout } = route.params;
  const { theme, isDark } = useTheme();
  const { isFavorite, toggleFavorite } = useApp();
  const [showTimer, setShowTimer] = useState(false);

  const category = CATEGORIES.find(cat => cat.id === workout.category);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleFavoritePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    toggleFavorite(workout.id);
  };

  const handleStartWorkout = () => {
    setShowTimer(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle="light-content" />

      {/* Header with gradient */}
      <LinearGradient
        colors={category?.gradient || theme.colors.gradients.primary}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.headerButtons}>
              <TouchableOpacity onPress={handleBackPress} style={styles.headerButton}>
                <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleFavoritePress} style={styles.headerButton}>
                <Ionicons
                  name={isFavorite(workout.id) ? 'heart' : 'heart-outline'}
                  size={24}
                  color="#FFFFFF"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>{workout.name}</Text>
              <View style={styles.badgeContainer}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{workout.difficulty}</Text>
                </View>
                <View style={styles.badge}>
                  <Ionicons name="time-outline" size={14} color="#FFFFFF" />
                  <Text style={styles.badgeText}> {workout.duration}</Text>
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Steps Section */}
        <CollapsibleSection title="How to Perform" icon="list" defaultOpen={true}>
          {workout.steps.map((step, index) => (
            <View key={index} style={styles.stepItem}>
              <View style={[styles.stepNumber, { backgroundColor: theme.colors.primary + '20' }]}>
                <Text style={[styles.stepNumberText, { color: theme.colors.primary }]}>
                  {index + 1}
                </Text>
              </View>
              <Text style={[styles.stepText, { color: theme.colors.text }]}>
                {step}
              </Text>
            </View>
          ))}
        </CollapsibleSection>

        {/* Muscles Worked Section */}
        <CollapsibleSection title="Muscles Worked" icon="body" defaultOpen={true}>
          <View style={styles.musclesContainer}>
            {workout.muscles.map((muscle, index) => (
              <View key={index} style={[styles.muscleTag, { backgroundColor: theme.colors.primary + '20' }]}>
                <Text style={[styles.muscleText, { color: theme.colors.primary }]}>
                  {muscle}
                </Text>
              </View>
            ))}
          </View>
        </CollapsibleSection>

        {/* Reps & Sets Section */}
        <CollapsibleSection title="Recommendations" icon="fitness" defaultOpen={true}>
          <View style={styles.recommendationItem}>
            <Ionicons name="repeat" size={20} color={theme.colors.primary} />
            <Text style={[styles.recommendationText, { color: theme.colors.text }]}>
              {workout.reps}
            </Text>
          </View>
          <View style={styles.recommendationItem}>
            <Ionicons name="timer" size={20} color={theme.colors.primary} />
            <Text style={[styles.recommendationText, { color: theme.colors.text }]}>
              Rest: 60-90 seconds between sets
            </Text>
          </View>
        </CollapsibleSection>

        {/* Tips Section */}
        <CollapsibleSection title="Pro Tips" icon="bulb" defaultOpen={false}>
          {workout.tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Ionicons name="checkmark-circle" size={18} color={theme.colors.success} />
              <Text style={[styles.tipText, { color: theme.colors.text }]}>
                {tip}
              </Text>
            </View>
          ))}
        </CollapsibleSection>

        {/* Start Workout Button */}
        <View style={styles.buttonContainer}>
          <AnimatedButton
            title="Start Rest Timer"
            onPress={handleStartWorkout}
            colors={category?.gradient}
            icon={<Ionicons name="play" size={20} color="#FFFFFF" style={{ marginRight: 8 }} />}
          />
        </View>
      </ScrollView>

      {/* Rest Timer Modal */}
      <RestTimer
        visible={showTimer}
        onClose={() => setShowTimer(false)}
        initialSeconds={60}
      />
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
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 16,
  },
  sectionCard: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  sectionContent: {
    marginTop: 16,
    gap: 12,
  },
  stepItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    fontSize: 14,
    fontWeight: '600',
  },
  stepText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  musclesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  muscleTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  muscleText: {
    fontSize: 14,
    fontWeight: '600',
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recommendationText: {
    flex: 1,
    fontSize: 15,
  },
  tipItem: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
  },
  buttonContainer: {
    marginTop: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerCard: {
    width: '85%',
    padding: 32,
    alignItems: 'center',
  },
  timerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  timerCircle: {
    position: 'relative',
    marginBottom: 32,
  },
  timerTextContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  timerButtons: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  timerButton: {
    flex: 1,
  },
});

export default ExerciseDetailScreen;
