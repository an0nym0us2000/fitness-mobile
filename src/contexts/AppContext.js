import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllWorkouts } from '../data/workouts';

const AppContext = createContext();

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [weeklyPlan, setWeeklyPlan] = useState([]);
  const [completedDays, setCompletedDays] = useState({});
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [preferences, setPreferences] = useState({
    haptics: true,
    animations: true,
    reminders: false,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [
        savedFavorites,
        savedWeeklyPlan,
        savedCompletedDays,
        savedOnboarding,
        savedPreferences,
      ] = await Promise.all([
        AsyncStorage.getItem('favorites'),
        AsyncStorage.getItem('weeklyPlan'),
        AsyncStorage.getItem('completedDays'),
        AsyncStorage.getItem('hasCompletedOnboarding'),
        AsyncStorage.getItem('preferences'),
      ]);

      if (savedFavorites) setFavorites(JSON.parse(savedFavorites));
      if (savedWeeklyPlan) setWeeklyPlan(JSON.parse(savedWeeklyPlan));
      if (savedCompletedDays) setCompletedDays(JSON.parse(savedCompletedDays));
      if (savedOnboarding) setHasCompletedOnboarding(JSON.parse(savedOnboarding));
      if (savedPreferences) setPreferences(JSON.parse(savedPreferences));
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', JSON.stringify(true));
      setHasCompletedOnboarding(true);
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const toggleFavorite = async (workoutId) => {
    try {
      const newFavorites = favorites.includes(workoutId)
        ? favorites.filter(id => id !== workoutId)
        : [...favorites, workoutId];

      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  const isFavorite = (workoutId) => {
    return favorites.includes(workoutId);
  };

  const generateWeeklyPlan = async () => {
    try {
      const allWorkouts = getAllWorkouts();
      const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const categories = ['back', 'biceps', 'chest', 'triceps', 'shoulders', 'legs'];

      const plan = days.map((day, index) => {
        const category = categories[index % categories.length];
        const categoryWorkouts = allWorkouts.filter(w => w.category === category);
        const randomWorkout = categoryWorkouts[Math.floor(Math.random() * categoryWorkouts.length)];

        return {
          day,
          workout: randomWorkout,
        };
      });

      await AsyncStorage.setItem('weeklyPlan', JSON.stringify(plan));
      setWeeklyPlan(plan);
    } catch (error) {
      console.error('Error generating weekly plan:', error);
    }
  };

  const reshuffleDay = async (dayIndex) => {
    try {
      const allWorkouts = getAllWorkouts();
      const currentCategory = weeklyPlan[dayIndex].workout.category;
      const categoryWorkouts = allWorkouts.filter(w => w.category === currentCategory);
      const randomWorkout = categoryWorkouts[Math.floor(Math.random() * categoryWorkouts.length)];

      const newPlan = [...weeklyPlan];
      newPlan[dayIndex] = {
        ...newPlan[dayIndex],
        workout: randomWorkout,
      };

      await AsyncStorage.setItem('weeklyPlan', JSON.stringify(newPlan));
      setWeeklyPlan(newPlan);
    } catch (error) {
      console.error('Error reshuffling day:', error);
    }
  };

  const toggleDayCompleted = async (date) => {
    try {
      const newCompletedDays = { ...completedDays };
      if (newCompletedDays[date]) {
        delete newCompletedDays[date];
      } else {
        newCompletedDays[date] = true;
      }

      await AsyncStorage.setItem('completedDays', JSON.stringify(newCompletedDays));
      setCompletedDays(newCompletedDays);
    } catch (error) {
      console.error('Error toggling day completed:', error);
    }
  };

  const isDayCompleted = (date) => {
    return !!completedDays[date];
  };

  const updatePreferences = async (newPreferences) => {
    try {
      const updated = { ...preferences, ...newPreferences };
      await AsyncStorage.setItem('preferences', JSON.stringify(updated));
      setPreferences(updated);
    } catch (error) {
      console.error('Error updating preferences:', error);
    }
  };

  const value = {
    favorites,
    toggleFavorite,
    isFavorite,
    weeklyPlan,
    generateWeeklyPlan,
    reshuffleDay,
    completedDays,
    toggleDayCompleted,
    isDayCompleted,
    hasCompletedOnboarding,
    completeOnboarding,
    preferences,
    updatePreferences,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
