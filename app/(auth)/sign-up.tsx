import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function SignUp() {
    return (
        <View className="flex-1 items-center justify-center bg-black px-6">
            <Text className="text-center text-2xl  text-gray-200">SignUp</Text>
            <View className='w-full'>
                <View className="mt-6 rounded-lg  w-full border-2 bg-red-500 px-6 py-3">
                    <Link
                        className="text-white text-center w-full flex items-center justify-center "
                        href="/(auth)/sign-in"
                    >
                        Sign Up
                    </Link>
                </View>
            </View>
        </View>
    );
}