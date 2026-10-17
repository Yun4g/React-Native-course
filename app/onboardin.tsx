import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function OnboardingName() {
  return (
    <View className='flex items-center justify-center min-h-screen'>
      <Text className='text-cyan-800 text-2xl'>
         This is Onboarding
      </Text>

      <Link 
      className="mt-6 rounded-lg h-[40px] text-white bg-blue-400 px-6 py-3"
      href="/(auth)/sign-in" >
        Go to auth screen
        </Link>
     </View>
  );
}
