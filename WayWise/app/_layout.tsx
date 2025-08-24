import { useEffect } from 'react';
import * as SystemUI from 'expo-system-ui';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LogBox, Platform, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthProvider } from "../contexts/AuthContext"; // ✅ Correct path

// Suppress specific warning
LogBox.ignoreLogs([
  'Text strings must be rendered within a <Text> component',
]);

if (__DEV__) {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Text strings must be rendered within a <Text> component')
    ) {
      return;
    }
    originalConsoleError(...args);
  };
}

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingBottom: insets.bottom }}>
      {children}
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  // ✅ Set bottom system nav bar to black (default) and transparent status bar
  useEffect(() => {
    if (Platform.OS === 'android') {
      SystemUI.setBackgroundColorAsync('black');
    }
  }, []);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      {/* ✅ Transparent status bar */}
          <StatusBar style="dark" translucent backgroundColor="transparent" />
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AuthProvider>
        {" "}
        {/* ✅ Wrap the whole navigation inside AuthProvider */}
        <LayoutWrapper>
          <Stack
            initialRouteName="onboarding"
            screenOptions={{
              headerShown: false,
              animation: 'default',
              statusBarTranslucent: true,
              statusBarStyle: 'dark',
            }}
          >
            <Stack.Screen name="onboarding" />
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="signin" />
            <Stack.Screen name="1135ad" />
            <Stack.Screen name="clothingessentials" />
            <Stack.Screen name="conrad" />
            <Stack.Screen name="createtrip" />
            <Stack.Screen name="essentials" />
            <Stack.Screen name="fooditernary" />
            <Stack.Screen name="iternarycart" />
            <Stack.Screen name="iternarylist" />
            <Stack.Screen name="jaipurpark" />
            <Stack.Screen name="johnson" />
            <Stack.Screen name="lalitashok" />
            <Stack.Screen name="langhacks" />
            <Stack.Screen name="langjaipur" />
            <Stack.Screen name="langmanali" />
            <Stack.Screen name="nandi" />
            <Stack.Screen name="places" />
            <Stack.Screen name="profile" />
            <Stack.Screen name="shopping" />
            <Stack.Screen name="signup" />
            <Stack.Screen name="skandagiri" />
            <Stack.Screen name="tripprep" />
            <Stack.Screen name="ulsoorlake" />
            <Stack.Screen name="weathermain" />
            <Stack.Screen name="zoo" />
          </Stack>

          
        </LayoutWrapper>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
