import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignUp() {
    return (
        <View className="flex-1 items-center justify-center bg-slate-3\00 px-6">
            <Text className="text-center text-2xl  text-gray-600">SignIn</Text>
            <View>
                <View className="mt-6 rounded-lg bg-red-500 px-6 py-3">
                    <Link
                        className="text-white"
                        href="/(auth)/sign-up"
                    >
                        Sign in
                    </Link>
                </View>
            </View>
        </View>
    );
}