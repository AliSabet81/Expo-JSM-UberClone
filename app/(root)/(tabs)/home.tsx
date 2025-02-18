import { router } from "expo-router";
import { Text } from "react-native";
import { SignedIn, useAuth, useUser } from "@clerk/clerk-expo";

import CustomButton from "@/components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };
  return (
    <SafeAreaView>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <CustomButton
          title="Signout"
          className="w-10/12"
          onPress={handleSignOut}
        />
      </SignedIn>
    </SafeAreaView>
  );
}
