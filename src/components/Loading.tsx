import { ActivityIndicator, StatusBar, View } from "react-native";

export function Loading() {
  return (
    <View style={{
      flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#09090A"

    }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      < ActivityIndicator color="#7C3AED" size="large" />

    </View>
  )
}