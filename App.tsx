import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Chip } from "./src/components/chip";
import { Select } from "./src/components/select";
import { MOCK } from "./mock";
import { NestedSelector } from "./src/components/nestedSelector";
import { NestedDataType } from "./src/types";
const POLITICAL_HIERARCHY = [
  "country",
  "state",
  "city",
  "municipality",
  "block",
];

function App() {
  const [selectedItems, setSelectedItems] = useState<NestedDataType[][]>([]);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <NestedSelector
          levels={POLITICAL_HIERARCHY}
          nestedData={MOCK}
          onSelectConfirm={(_selected) =>
            setSelectedItems((prev) => [...prev, _selected])
          }
        />
        <NestedSelector
          nestedData={MOCK}
          onSelectConfirm={(_selected) =>
            setSelectedItems((prev) => [...prev, _selected])
          }
        />
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
