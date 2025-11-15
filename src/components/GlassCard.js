import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '../contexts/ThemeContext';

const GlassCard = ({ children, style, onPress, intensity = 80, ...props }) => {
  const { theme, isDark } = useTheme();

  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      onPress={onPress}
      activeOpacity={onPress ? 0.8 : 1}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.glassBackground,
          borderColor: theme.colors.glassBorder,
          shadowColor: theme.colors.shadowColor,
          shadowOpacity: theme.colors.shadowOpacity,
        },
        style,
      ]}
      {...props}
    >
      {Platform.OS === 'ios' ? (
        <BlurView
          intensity={intensity}
          tint={isDark ? 'dark' : 'light'}
          style={StyleSheet.absoluteFill}
        />
      ) : null}
      <View style={styles.content}>
        {children}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 5,
  },
  content: {
    flex: 1,
  },
});

export default GlassCard;
