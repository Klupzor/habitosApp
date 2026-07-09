import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi primera app con React</Text>
      <Text style={styles.subtitle}>Bienvenido a tu app de hábitos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    backgroundColor: "#F2F6FF",

    padding: 24,

    gap: 8,
  },

  title: {
    fontSize: 22,

    fontWeight: "700",

    color: "#0F172A",
  },

  subtitle: {
    fontSize: 14,

    color: "#334155",
  },
});
