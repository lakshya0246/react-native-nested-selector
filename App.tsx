import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Chip } from "./src/components/chip";
import { Select } from "./src/components/select";
import { MOCK } from "./mock";

function App() {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.chipLayout}>
          <Chip title={"hey man"} />
          <Chip title={"yay man"} />
          <Chip title={"yah man"} />
          <Chip title={"yay man"} />
          <Chip title={"disco"} />
          <Chip title={"dafa"} />
          <Chip title={"really long name"} />
          <Chip title={"Fee"} />
          <Chip title={"yaH man"} />
        </View>
        <Select options={MOCK[0].children} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  chipLayout: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "green",
  },
});

export default App;
