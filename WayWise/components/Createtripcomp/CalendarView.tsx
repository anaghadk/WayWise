import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ChevronLeft, ChevronRight, ChevronDown } from './Icons';

interface CalendarViewProps {
  onSelect: (startDate: Date, endDate: Date) => void;
  onClose: () => void;
}

export const CalendarView: React.FC<CalendarViewProps> = ({ onSelect, onClose }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const today = new Date();

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1));
  };

  const prevYear = () => {
    setCurrentDate(new Date(year - 1, month));
  };

  const nextYear = () => {
    setCurrentDate(new Date(year + 1, month));
  };

  const isBeforeToday = (date: Date) => {
    return date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
  };

  const isInRange = (day: number) => {
    const date = new Date(year, month, day);
    return startDate && endDate && date >= startDate && date <= endDate;
  };

  const handleDaySelect = (day: number) => {
    const selected = new Date(year, month, day);
    if (isBeforeToday(selected)) return;

    if (!startDate || (startDate && endDate)) {
      setStartDate(selected);
      setEndDate(null);
    } else if (selected < startDate) {
      setStartDate(selected);
    } else {
      setEndDate(selected);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    const prevMonthDays = new Date(year, month, 0).getDate();

    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      days.push(
        <View key={`prev-${i}`} style={styles.dayCell}>
          <Text style={[styles.dayText, styles.inactiveDay]}>
            {prevMonthDays - i}
          </Text>
        </View>
      );
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const isSelected =
        (startDate && date.toDateString() === startDate.toDateString()) ||
        (endDate && date.toDateString() === endDate.toDateString());
      const inRange = isInRange(i);
      const isDisabled = isBeforeToday(date);

      days.push(
        <Pressable
          key={i}
          style={[styles.dayCell, isSelected && styles.selectedDayCell, inRange && styles.inRangeDayCell]}
          onPress={() => handleDaySelect(i)}
          disabled={isDisabled}
        >
          <Text
            style={[styles.dayText, isSelected && styles.selectedDayText, isDisabled && styles.inactiveDay]}
          >
            {i}
          </Text>
        </Pressable>
      );
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push(
        <View key={`next-${i}`} style={styles.dayCell}>
          <Text style={[styles.dayText, styles.inactiveDay]}>{i}</Text>
        </View>
      );
    }

    return days;
  };

  const handleOk = () => {
    if (startDate && endDate) {
      onSelect(startDate, endDate);
    } else {
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.monthSelector}>
          <Pressable onPress={prevMonth} style={styles.iconButton} accessibilityLabel="Previous month">
            <ChevronLeft />
          </Pressable>
          <View style={styles.monthYearContainer}>
            <Text style={styles.monthYearText}>{monthNames[month]}</Text>
            <ChevronDown />
          </View>
          <Pressable onPress={nextMonth} style={styles.iconButton} accessibilityLabel="Next month">
            <ChevronRight />
          </Pressable>
        </View>
        <View style={styles.monthSelector}>
          <Pressable onPress={prevYear} style={styles.iconButton} accessibilityLabel="Previous year">
            <ChevronLeft />
          </Pressable>
          <View style={styles.monthYearContainer}>
            <Text style={styles.monthYearText}>{year}</Text>
            <ChevronDown />
          </View>
          <Pressable onPress={nextYear} style={styles.iconButton} accessibilityLabel="Next year">
            <ChevronRight />
          </Pressable>
        </View>
      </View>

      <View style={styles.weekDaysContainer}>
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <View key={index} style={styles.weekDayCell}>
            <Text style={styles.weekDayText}>{day}</Text>
          </View>
        ))}
      </View>

      <View style={styles.daysContainer}>{renderCalendarDays()}</View>

      <View style={styles.footer}>
        <View />
        <View style={styles.buttonContainer}>
          <Pressable onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
          <Pressable onPress={handleOk} style={styles.button}>
            <Text style={styles.buttonText}>OK</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 8,
    backgroundColor: '#EEF2FF',
    borderRadius: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  monthSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  monthYearText: {
    fontSize: 14,
    color: '#374151',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekDayCell: {
    height: 48,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 16,
    color: '#18181B',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.28%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: '#18181B',
  },
  inactiveDay: {
    opacity: 0.38,
    color: '#374151',
  },
  selectedDayCell: {
    backgroundColor: '#C7D2FE',
    borderRadius: 100,
  },
  selectedDayText: {
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  inRangeDayCell: {
    backgroundColor: '#E0E7FF',
    borderRadius: 100,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 100,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#64748B',
  },
});
