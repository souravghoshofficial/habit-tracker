import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text>Home Page</Text>
      <Link href="/login" style={styles.link}>Login Page</Link>
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
    padding: 10 ,
    backgroundColor: "coral" , 
    borderRadius: 5,
    color: "white", 
    marginTop: 5
  }
})
