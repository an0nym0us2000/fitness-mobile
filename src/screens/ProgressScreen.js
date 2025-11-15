import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Dimensions,
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
import GlassCard from '../components/GlassCard';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DAY_WIDTH = (SCREEN_WIDTH - 80) / 7; // 7 days per week, accounting for padding

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const CalendarDay = ({ date, isCompleted, onToggle, isToday }) => {
  const { theme } = useTheme();
  const { preferences } = useApp();
  const scale = useSharedValue(1);

  const handlePress = () => {
    if (preferences.haptics) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    }
    scale.value = withSpring(0.9, {}, () => {
      scale.value = withSpring(1);
    });
    onToggle();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const dayNumber = new Date(date).getDate();

  return (
    <AnimatedTouchable
      onPress={handlePress}
      activeOpacity={0.8}
      style={[styles.dayContainer, animatedStyle]}
    >
      <View
        style={[
          styles.day,
          isCompleted && { backgroundColor: theme.colors.primary },
          isToday && !isCompleted && { borderColor: theme.colors.primary, borderWidth: 2 },
          !isCompleted && { backgroundColor: theme.colors.surface },
        ]}
      >
        {isCompleted ? (
          <Ionicons name="checkmark-circle" size={24} color="#FFFFFF" />
        ) : (
          <Text
            style={[
              styles.dayNumber,
              { color: isToday ? theme.colors.primary : theme.colors.textSecondary },
            ]}
          >
            {dayNumber}
          </Text>
        )}
      </View>
    </AnimatedTouchable>
  );
};

const ProgressScreen = () => {
  const { theme, isDark } = useTheme();
  const { completedDays, toggleDayCompleted } = useApp();
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add actual days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day));
    }

    return days;
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const days = getDaysInMonth(currentMonth);
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  const completedCount = Object.keys(completedDays).filter(date => {
    const d = new Date(date);
    return d.getMonth() === currentMonth.getMonth() && d.getFullYear() === currentMonth.getFullYear();
  }).length;

  const daysInCurrentMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const completionRate = daysInCurrentMonth > 0 ? Math.round((completedCount / daysInCurrentMonth) * 100) : 0;

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header with gradient */}
      <LinearGradient
        colors={theme.colors.gradients.info}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="stats-chart" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>Progress Tracker</Text>
            <Text style={styles.headerSubtitle}>
              Track your workout consistency
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Stats Card */}
        <GlassCard style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>
                {completedCount}
              </Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                Completed
              </Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>
                {completionRate}%
              </Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                This Month
              </Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: theme.colors.text }]}>
                {Object.keys(completedDays).length}
              </Text>
              <Text style={[styles.statLabel, { color: theme.colors.textSecondary }]}>
                Total Days
              </Text>
            </View>
          </View>
        </GlassCard>

        {/* Calendar */}
        <View style={styles.calendarContainer}>
          <GlassCard style={styles.calendarCard}>
            {/* Month Navigation */}
            <View style={styles.monthHeader}>
              <TouchableOpacity onPress={handlePreviousMonth} style={styles.monthButton}>
                <Ionicons name="chevron-back" size={24} color={theme.colors.text} />
              </TouchableOpacity>
              <Text style={[styles.monthTitle, { color: theme.colors.text }]}>
                {monthName}
              </Text>
              <TouchableOpacity onPress={handleNextMonth} style={styles.monthButton}>
                <Ionicons name="chevron-forward" size={24} color={theme.colors.text} />
              </TouchableOpacity>
            </View>

            {/* Day Labels */}
            <View style={styles.dayLabelsRow}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <View key={index} style={styles.dayLabelContainer}>
                  <Text style={[styles.dayLabel, { color: theme.colors.textSecondary }]}>
                    {day}
                  </Text>
                </View>
              ))}
            </View>

            {/* Calendar Grid */}
            <View style={styles.calendarGrid}>
              {days.map((date, index) => {
                if (!date) {
                  return <View key={`empty-${index}`} style={styles.dayContainer} />;
                }

                const dateString = formatDate(date);
                const isCompleted = completedDays[dateString];
                const today = isToday(date);

                return (
                  <CalendarDay
                    key={dateString}
                    date={dateString}
                    isCompleted={isCompleted}
                    onToggle={() => toggleDayCompleted(dateString)}
                    isToday={today}
                  />
                );
              })}
            </View>
          </GlassCard>
        </View>

        {/* Legend */}
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: theme.colors.primary }]} />
            <Text style={[styles.legendText, { color: theme.colors.textSecondary }]}>
              Completed
            </Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { borderColor: theme.colors.primary, borderWidth: 2 }]} />
            <Text style={[styles.legendText, { color: theme.colors.textSecondary }]}>
              Today
            </Text>
          </View>
        </View>
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
  statsCard: {
    padding: 20,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  calendarContainer: {
    marginBottom: 24,
  },
  calendarCard: {
    padding: 20,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthButton: {
    padding: 8,
  },
  monthTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dayLabelsRow: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  dayLabelContainer: {
    width: DAY_WIDTH,
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayContainer: {
    width: DAY_WIDTH,
    aspectRatio: 1,
    padding: 2,
  },
  day: {
    flex: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNumber: {
    fontSize: 14,
    fontWeight: '500',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  legendText: {
    fontSize: 14,
  },
});

export default ProgressScreen;
