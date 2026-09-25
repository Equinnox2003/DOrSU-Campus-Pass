import { StyleSheet, Text, View } from 'react-native';
import type { StatusBadgeProps } from '../types/student';
import { colors } from '../styles/theme';

export function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, isActive ? styles.active : styles.suspended]}>
      <View style={[styles.dot, { backgroundColor: isActive ? colors.green : colors.red }]} />
      <Text accessibilityLiveRegion="polite" style={[styles.text, { color: isActive ? colors.green : colors.red }]}>
        {isActive ? 'VERIFIED ACTIVE PASS' : 'ACCESS TEMPORARILY SUSPENDED'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { flexDirection: 'row', justifyContent:'center', alignItems: 'center', alignSelf: 'center', width: '98%', gap: 7, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 6 },
  active: { backgroundColor: colors.greenLight, borderColor: colors.green, borderWidth: 0.5 },
  suspended: { backgroundColor: colors.redLight, borderColor: colors.red, borderWidth: 0.5  },
  dot: { width: 7, height: 7, borderRadius: 4 },
  text: { fontWeight: '800', fontSize: 11, letterSpacing: 0.8 },
});
