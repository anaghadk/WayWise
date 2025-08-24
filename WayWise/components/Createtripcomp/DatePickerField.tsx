import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { CalendarIcon } from './Icons';
import { CalendarView } from './CalendarView';
import { useTripStore } from '../../store/tripStore'; // Adjust the path as needed

export const DatePickerField: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false);

  // Zustand store
  const {
    startDate,
    endDate,
    setStartDate,
    setEndDate
  } = useTripStore();

  const handleDateSelect = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
    setShowCalendar(false);
  };

  const formatDateRange = () => {
    if (!startDate || !endDate) return 'MM/DD/YYYY - MM/DD/YYYY';
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.dateText}>{formatDateRange()}</Text>
        </View>
        <Pressable
          style={styles.iconButton}
          onPress={() => setShowCalendar(!showCalendar)}
          accessibilityLabel="Open calendar"
        >
          <CalendarIcon />
        </Pressable>
      </View>
      {showCalendar && (
        <View style={styles.calendarContainer}>
          <CalendarView onSelect={handleDateSelect} onClose={() => setShowCalendar(false)} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 56,
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#64748B',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 12,
    paddingHorizontal: 4,
    fontSize: 12,
    lineHeight: 16,
    backgroundColor: '#FDF4FF',
    color: '#64748B',
  },
  dateText: {
    fontSize: 12,
    lineHeight: 16,
    color: '#374151',
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calendarContainer: {
    position: 'relative',
    zIndex: 10,
  },
});
