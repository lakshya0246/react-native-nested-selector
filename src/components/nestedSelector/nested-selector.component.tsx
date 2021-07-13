import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { MOCK } from "../../../mock";
import { NestedDataType } from "../../types";
import { Chip } from "../chip";
import { Select } from "../select";
import { styles } from "./nested-selector.styles";

interface Props {
  nestedData: NestedDataType[];
  levels?: string[];
  onSelectConfirm?(selected: NestedDataType[]): void;
}

export const NestedSelector = (props: Props) => {
  const [selected, setSelected] = useState<NestedDataType[]>([]);

  const isEdgeNode = selected.length
    ? selected[selected.length - 1].children?.length === 0
    : false;

  return (
    <View style={styles.container}>
      <View style={styles.chipLayout}>
        {selected?.map((item, i) => (
          <Chip
            key={item.value}
            title={item.label}
            onClose={() => {
              setSelected((prev) => {
                return prev.slice(0, i);
              });
            }}
          />
        ))}
        {!isEdgeNode && (
          <Chip isPlaceholder title={props.levels?.[selected.length] || ""} />
        )}
      </View>
      <Select
        onConfirm={() => {
          if (selected.length) {
            setSelected([]);
            props.onSelectConfirm?.(selected);
          }
        }}
        onBack={() => setSelected((prev) => prev.slice(0, -1))}
        onSelect={(_selected) =>
          setSelected((prev) => {
            if (isEdgeNode) {
              prev[prev.length - 1] = _selected;
              return [...prev];
            }
            return [...prev, _selected];
          })
        }
        options={
          selected.length === 0
            ? props.nestedData
            : isEdgeNode
            ? (selected[selected.length - 2].children as NestedDataType[])
            : (selected[selected.length - 1].children as NestedDataType[])
        }
      />
    </View>
  );
};
