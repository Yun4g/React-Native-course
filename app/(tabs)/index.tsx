
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-3\00 px-6">
      <View className="w-full max-w-sm items-center rounded-2xl bg-white p-8">
        <Text className="mb-3 text-3xl font-bold text-blue-600">
          NativeWind Works!
        </Text>

        <Text className="text-center text-base text-gray-600">
          Tailwind CSS is styling my Expo React Native app.
        </Text>

        <View className="mt-6 rounded-lg h-[40px] bg-red-700 px-6 py-3">
          <Link
            href="/onboardin"
            className="font-bold h-full text-white"
          >
            Success!
          </Link>


        </View>


        <View className="mt-6 rounded-lg h-[40px] bg-red-700 px-6 py-3">

          <Link
            href="/(tabs)/subscriptionss"
            className="font-bold h-full text-white"
          >
            Spotify Subscription
          </Link>

        </View>
        <View className="mt-6 rounded-lg h-[40px] bg-red-700 px-6 py-3">

          <Link
            href={{
              pathname: "/(tabs)/subscriptions/[id]",
              params: { id: "claude" }
            }
            }
            className="font-bold h-full text-white"
          >
            Spotify Subscription  Detail
          </Link>
        </View>

      </View>
    </View >
  );
}