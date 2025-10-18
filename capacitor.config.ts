import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.4a34c2c7bf4f4a248e85469d97593802',
  appName: 'Guestly',
  webDir: 'dist',
  server: {
    url: 'https://4a34c2c7-bf4f-4a24-8e85-469d97593802.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#f472b6',
      showSpinner: true,
      androidSpinnerStyle: 'small',
      iosSpinnerStyle: 'small',
      spinnerColor: '#ffffff'
    }
  }
};

export default config;
