import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export function ScanCounter({ count, onScan, onReset }: ScanCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Gate Verification Log</Text>
      <View style={styles.counterDisplay}>
        <View style={styles.caption}>
          <Text style={styles.label}>Today's Gate Entries:</Text>
        </View>
        <Text testID="scan-count" accessibilityLiveRegion="polite" style={styles.value}>{count}</Text>
      </View>
      <View style={styles.btnRow}>
        <Pressable accessibilityRole="button" onPress={onScan} style={({ pressed }) => [styles.btnPrimary, pressed && styles.pressed]}>
          <Text style={styles.btnText}>+1 Scan at Gate</Text>
        </Pressable>
        <Pressable accessibilityRole="button" onPress={onReset} style={({ pressed }) => [styles.btnSecondary, pressed && styles.pressed]}>
          <Text style={styles.btnSecText}>Reset Scans</Text>
        </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, padding: 20, borderRadius: 22, borderWidth: 1, borderColor: colors.lightRose, gap: 18 },
  title: { color: colors.ink, fontSize: 15, fontWeight: '800' },
  counterDisplay: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16, padding: 9,  backgroundColor: '#F5F7FA',
                  borderRadius: 8},
  caption: { flex: 1, gap: 5},
  label: { color: colors.muted, fontSize: 13, fontWeight: '700'},
  value: { color: colors.lightRose, fontSize: 44, fontWeight: '800', flexShrink: 1 },
  btnRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  btnPrimary: { flexGrow: 1, flexBasis: '45%', backgroundColor: colors.lightRose, borderRadius: 12, padding: 14, minHeight: 48, alignItems: 'center', justifyContent: 'center' },
  btnSecondary: { flexGrow: 1, flexBasis: '45%', backgroundColor: '#F5F7FA', borderWidth: 1, borderColor: colors.lightRose, borderRadius: 12, padding: 14, minHeight: 48, alignItems: 'center', justifyContent: 'center' },
  btnText: { color: colors.white, fontSize: 12, fontWeight: '800' },
  btnSecText: { color: colors.ink, fontSize: 12, fontWeight: '700' },
  pressed: { opacity: 0.7 },
});
