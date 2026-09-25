import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.brand}>
          <Text style={styles.university}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.faculty}>Faculty of Computing, Engineering, and Technology</Text>
        </View>
      </View >
      <View style={styles.subtitle} >
      <Text style={styles.subtitleText} numberOfLines={1} adjustsFontSizeToFit minimumFontScale={0.8}>OFFICIAL STUDENT DIGITAL PASS · AY 2026–2027</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#E75480', padding: 16, borderRadius: 24, gap: 8 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  brand: { flex: 1 },
  university: { textAlign: 'center', color: colors.white, fontSize: 12, fontWeight: '900', letterSpacing: 0.8 },
  faculty: { textAlign: 'center', color: '#CDE8EE', fontSize: 12, lineHeight: 15, marginTop: 4 },
  subtitle: { backgroundColor: '#C93663', alignSelf: 'center',  paddingHorizontal: 5, paddingVertical: 3, borderRadius: 6},
  subtitleText: {textAlign: 'center',  color: '#ffffff', fontSize: 9}
});
