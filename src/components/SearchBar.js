import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedView = Animated.createAnimatedComponent(View);

const SearchBar = ({ value, onChangeText, placeholder = 'Search workouts...', style }) => {
  const { theme } = useTheme();
  const borderWidth = useSharedValue(1);
  const borderColor = useSharedValue(theme.colors.border);

  const handleFocus = () => {
    borderWidth.value = withTiming(2);
    borderColor.value = theme.colors.primary;
  };

  const handleBlur = () => {
    borderWidth.value = withTiming(1);
    borderColor.value = theme.colors.border;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderWidth: borderWidth.value,
      borderColor: borderColor.value,
    };
  });

  return (
    <AnimatedView
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.surface,
        },
        animatedStyle,
        style,
      ]}
    >
      <Ionicons name="search" size={20} color={theme.colors.textSecondary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[styles.input, { color: theme.colors.text }]}
      />
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default SearchBar;
