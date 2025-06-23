import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Button } from "react-native-paper";
import { useAuth } from "@/lib/auth-context";

export default function Index() {
  const {signOut} = useAuth()
  return (
    <View
      style={styles.view}
    >
      <Text>Home Page</Text>
      <Button onPress={signOut} style={styles.link} icon={"logout"}>Sign Out</Button>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "coral" , 
    borderRadius: 5,
    color: "white", 
    marginTop: 5
  }
})
