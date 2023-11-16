import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

interface CustomButtonProps {
  label: string;
  onPress: () => void;
  color?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  color = '#4CAF50',
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    marginHorizontal: 20,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
