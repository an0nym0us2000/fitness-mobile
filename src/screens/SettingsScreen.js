import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';
import { useApp } from '../contexts/AppContext';
import GlassCard from '../components/GlassCard';

const SettingItem = ({ title, subtitle, icon, value, onPress, showArrow = false }) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} disabled={!onPress}>
      <View style={styles.settingItem}>
        <View style={styles.settingLeft}>
          <View style={[styles.settingIcon, { backgroundColor: theme.colors.primary + '20' }]}>
            <Ionicons name={icon} size={20} color={theme.colors.primary} />
          </View>
          <View style={styles.settingText}>
            <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
              {title}
            </Text>
            {subtitle && (
              <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        <View style={styles.settingRight}>
          {value !== undefined && (
            <Text style={[styles.settingValue, { color: theme.colors.textSecondary }]}>
              {value}
            </Text>
          )}
          {showArrow && (
            <Ionicons name="chevron-forward" size={20} color={theme.colors.textSecondary} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SettingToggle = ({ title, subtitle, icon, value, onValueChange }) => {
  const { theme } = useTheme();

  return (
    <View style={styles.settingItem}>
      <View style={styles.settingLeft}>
        <View style={[styles.settingIcon, { backgroundColor: theme.colors.primary + '20' }]}>
          <Ionicons name={icon} size={20} color={theme.colors.primary} />
        </View>
        <View style={styles.settingText}>
          <Text style={[styles.settingTitle, { color: theme.colors.text }]}>
            {title}
          </Text>
          {subtitle && (
            <Text style={[styles.settingSubtitle, { color: theme.colors.textSecondary }]}>
              {subtitle}
            </Text>
          )}
        </View>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: theme.colors.border, true: theme.colors.primary + '40' }}
        thumbColor={value ? theme.colors.primary : theme.colors.surface}
        ios_backgroundColor={theme.colors.border}
      />
    </View>
  );
};

const SettingsScreen = () => {
  const { theme, isDark, themeMode, setTheme } = useTheme();
  const { preferences, updatePreferences } = useApp();

  const getThemeLabel = () => {
    switch (themeMode) {
      case 'light':
        return 'Light';
      case 'dark':
        return 'Dark';
      case 'auto':
        return 'Auto';
      default:
        return 'Auto';
    }
  };

  const cycleTheme = () => {
    const modes = ['auto', 'light', 'dark'];
    const currentIndex = modes.indexOf(themeMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setTheme(modes[nextIndex]);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />

      {/* Header with gradient */}
      <LinearGradient
        colors={theme.colors.gradients.purple}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.headerGradient}
      >
        <SafeAreaView>
          <View style={styles.header}>
            <View style={styles.iconContainer}>
              <Ionicons name="settings" size={32} color="#FFFFFF" />
            </View>
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.headerSubtitle}>
              Customize your experience
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Appearance Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Appearance
          </Text>
          <GlassCard style={styles.card}>
            <SettingItem
              title="Theme"
              subtitle="Choose your preferred theme"
              icon="color-palette"
              value={getThemeLabel()}
              onPress={cycleTheme}
              showArrow
            />
          </GlassCard>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            Preferences
          </Text>
          <GlassCard style={styles.card}>
            <SettingToggle
              title="Haptic Feedback"
              subtitle="Feel vibrations when tapping"
              icon="phone-portrait"
              value={preferences.haptics}
              onValueChange={(value) => updatePreferences({ haptics: value })}
            />
            <View style={styles.divider} />
            <SettingToggle
              title="Animations"
              subtitle="Enable smooth transitions"
              icon="sparkles"
              value={preferences.animations}
              onValueChange={(value) => updatePreferences({ animations: value })}
            />
            <View style={styles.divider} />
            <SettingToggle
              title="Reminders"
              subtitle="Get workout reminders"
              icon="notifications"
              value={preferences.reminders}
              onValueChange={(value) => updatePreferences({ reminders: value })}
            />
          </GlassCard>
        </View>

        {/* About Section */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>
            About
          </Text>
          <GlassCard style={styles.card}>
            <SettingItem
              title="Version"
              subtitle="App version information"
              icon="information-circle"
              value="1.0.0"
            />
            <View style={styles.divider} />
            <SettingItem
              title="Privacy Policy"
              subtitle="Read our privacy policy"
              icon="shield-checkmark"
              showArrow
            />
            <View style={styles.divider} />
            <SettingItem
              title="Terms of Service"
              subtitle="Read our terms of service"
              icon="document-text"
              showArrow
            />
          </GlassCard>
        </View>

        {/* App Info */}
        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>
            FitPro - Your Premium Workout Companion
          </Text>
          <Text style={[styles.footerText, { color: theme.colors.textSecondary }]}>
            Made with ❤️ for fitness enthusiasts
          </Text>
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
    paddingBottom: 40,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  settingText: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 13,
  },
  settingRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  settingValue: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    marginHorizontal: 16,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    gap: 8,
  },
  footerText: {
    fontSize: 13,
    textAlign: 'center',
  },
});

export default SettingsScreen;
