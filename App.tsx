import { useState } from 'react';
import {
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Header } from './src/components/Header';
import { StudentCard } from './src/components/StudentCard';
import { ScanCounter } from './src/components/ScanCounter';
import { student, peer } from './src/data/student';
import { colors } from './src/styles/theme';

export default function App() {
  const [gateScans, setGateScans] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [showPeer, setShowPeer] = useState<boolean>(false);

  const isWeb = Platform.OS === 'web';

  return (
    <SafeAreaProvider>
      <View style={[styles.page, isWeb && styles.webPage]}>
        <View
          style={[
            styles.device,
            isWeb && styles.phoneFrame,
          ]}
        >
          {isWeb && (
            <View
              pointerEvents="none"
              accessible={false}
              style={styles.notch}
            >
              <View style={styles.camera} />
            </View>
          )}

          <SafeAreaView
            style={[
              styles.screen,
              isWeb && styles.roundedScreen,
            ]}
          >
            <StatusBar style="dark" />

            <ScrollView
              style={styles.scroll}
              contentContainerStyle={styles.scrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.content}>
                <Header />

                <StudentCard
                  student={student}
                  isActive={isActive}
                />

                <ScanCounter
                  count={gateScans}
                  onScan={() =>
                    setGateScans(prev => prev + 1)
                  }
                  onReset={() => setGateScans(0)}
                />

                <View style={styles.controls}>
                  <Text style={styles.controlTitle}>
                    DEMO CONTROLS
                  </Text>

                  <Pressable
                    accessibilityRole="button"
                    onPress={() =>
                      setIsActive(prev => !prev)
                    }
                    style={({ pressed }) => [
                      styles.toggle,
                      isActive
                        ? styles.suspend
                        : styles.reactivate,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text
                      style={[
                        styles.toggleText,
                        {
                          color: isActive
                            ? colors.red
                            : colors.green,
                        },
                      ]}
                    >
                      {isActive
                        ? 'Simulate Pass Suspension'
                        : 'Reactivate Pass'}
                    </Text>
                  </Pressable>

                  <Pressable
                    accessibilityRole="button"
                    accessibilityState={{
                      expanded: showPeer,
                    }}
                    onPress={() =>
                      setShowPeer(prev => !prev)
                    }
                    style={({ pressed }) => [
                      styles.peerButton,
                      showPeer && styles.peerButtonActive,
                      pressed && styles.pressed,
                    ]}
                  >
                    <Text style={styles.peerText}>
                      {showPeer
                        ? 'Hide Peer Component Demo'
                        : 'Show Peer Component Demo'}
                    </Text>
                  </Pressable>
                </View>

                {showPeer && (
                  <View style={styles.peerSection}>
                    <Text style={styles.controlTitle}>
                      PEER PROPS DEMO
                    </Text>

                    <StudentCard
                      student={peer}
                      isActive={true}
                    />
                  </View>
                )}
              </View>
            </ScrollView>
          </SafeAreaView>

          {isWeb && (
            <View
              pointerEvents="none"
              accessible={false}
              style={styles.homeIndicator}
            />
          )}
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },

  webPage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EEF2',
    padding: 12,
  },

  device: {
    flex: 1,
    width: '100%',
    minHeight: 0,
  },

  phoneFrame: {
    maxWidth: 440,
    maxHeight: 900,
    backgroundColor: '#0F172A',
    borderWidth: 4,
    borderColor: '#334155',
    borderRadius: 48,
    paddingTop: 44,
    paddingHorizontal: 10,
    paddingBottom: 22,
    overflow: 'hidden',
  },

  notch: {
    position: 'absolute',
    top: 12,
    left: '50%',
    marginLeft: -69,
    width: 138,
    height: 25,
    backgroundColor: '#000000',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  camera: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#263449',
    borderWidth: 2,
    borderColor: '#172030',
  },

  screen: {
    flex: 1,
    minHeight: 0,
    backgroundColor: colors.background,
  },

  roundedScreen: {
    borderRadius: 34,
    overflow: 'hidden',
  },

  scroll: {
    flex: 1,
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
  },

  content: {
    width: '100%',
    maxWidth: 560,
    gap: 16,
  },

  homeIndicator: {
    position: 'absolute',
    bottom: 7,
    left: '50%',
    marginLeft: -48,
    width: 96,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#94A3B8',
  },

  controls: {
    gap: 10,
    paddingHorizontal: 4,
    paddingTop: 6,
  },

  controlTitle: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  toggle: {
    minHeight: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    borderWidth: 1,
  },

  suspend: {
    backgroundColor: '#FFF3F3',
    borderColor: '#F3CDCD',
  },

  reactivate: {
    backgroundColor: colors.greenLight,
    borderColor: '#B8DFC5',
  },

  toggleText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
  },

  peerButton: {
    width: '100%',
    minHeight: 48,
    borderWidth: 1.5,
    borderColor: colors.teal,
    borderRadius: 12,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },

  peerButtonActive: {
    backgroundColor: '#D1FAE5',
  },

  peerText: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },

  pressed: {
    opacity: 0.7,
  },

  peerSection: {
    gap: 12,
  },

  footer: {
    color: colors.muted,
    fontSize: 10,
    textAlign: 'center',
    lineHeight: 18,
    paddingBottom: 12,
  },
});