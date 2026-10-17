import { Link, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function  SubscriptionDetail() {
    const {id} = useLocalSearchParams<{id : string}>()
  return (
    <View>
      <Text>
         Subscription Detail
      </Text>

      <Link href="/(tabs)/index">Go back</Link>
     </View>
  );
}
