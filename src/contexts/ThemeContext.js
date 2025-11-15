import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appearance } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const lightTheme = {
  mode: 'light',
  colors: {
    background: '#F8F9FA',
    surface: '#FFFFFF',
    card: '#FFFFFF',
    text: '#1A1A1A',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#43e97b',
    warning: '#fa709a',
    error: '#f5576c',
    info: '#4facfe',

    // Glassmorphism
    glassBackground: 'rgba(255, 255, 255, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.3)',

    // Shadows
    shadowColor: '#000000',
    shadowOpacity: 0.1,

    // Gradients
    gradients: {
      primary: ['#667eea', '#764ba2'],
      secondary: ['#f093fb', '#f5576c'],
      success: ['#43e97b', '#38f9d7'],
      warning: ['#fa709a', '#fee140'],
      info: ['#4facfe', '#00f2fe'],
      purple: ['#30cfd0', '#330867'],
    }
  }
};

const darkTheme = {
  mode: 'dark',
  colors: {
    background: '#0F0F0F',
    surface: '#1A1A1A',
    card: '#252525',
    text: '#FFFFFF',
    textSecondary: '#9CA3AF',
    border: '#374151',
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#43e97b',
    warning: '#fa709a',
    error: '#f5576c',
    info: '#4facfe',

    // Glassmorphism
    glassBackground: 'rgba(26, 26, 26, 0.7)',
    glassBorder: 'rgba(255, 255, 255, 0.1)',

    // Shadows
    shadowColor: '#000000',
    shadowOpacity: 0.3,

    // Gradients (same as light mode)
    gradients: {
      primary: ['#667eea', '#764ba2'],
      secondary: ['#f093fb', '#f5576c'],
      success: ['#43e97b', '#38f9d7'],
      warning: ['#fa709a', '#fee140'],
      info: ['#4facfe', '#00f2fe'],
      purple: ['#30cfd0', '#330867'],
    }
  }
};

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('auto');
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    loadThemePreference();
  }, []);

  useEffect(() => {
    if (themeMode === 'auto') {
      const colorScheme = Appearance.getColorScheme();
      setCurrentTheme(colorScheme === 'dark' ? darkTheme : lightTheme);

      const subscription = Appearance.addChangeListener(({ colorScheme }) => {
        setCurrentTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
      });

      return () => subscription.remove();
    } else {
      setCurrentTheme(themeMode === 'dark' ? darkTheme : lightTheme);
    }
  }, [themeMode]);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('themeMode');
      if (savedTheme) {
        setThemeMode(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
    }
  };

  const setTheme = async (mode) => {
    try {
      await AsyncStorage.setItem('themeMode', mode);
      setThemeMode(mode);
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  const value = {
    theme: currentTheme,
    themeMode,
    setTheme,
    isDark: currentTheme.mode === 'dark',
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
