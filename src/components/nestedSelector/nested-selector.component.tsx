import React, { useState } from "react";
import { Image, View } from "react-native";
import { NestedDataType, NestedSelectorProps } from "../../types";
import { Chip } from "../chip";
import { Select } from "../select";
import { styles } from "./nested-selector.styles";

export const ConnectorArrow = () => {
  return (
    <Image
      style={styles.connectorArrow}
      source={require("./img/arrow-right.png")}
    ></Image>
  );
};

export const NestedSelector = (props: NestedSelectorProps) => {
  const [selected, setSelected] = useState<NestedDataType[]>([]);

  const isEdgeNode = selected.length
    ? selected[selected.length - 1].children?.length === 0
    : false;

  return (
    <View style={styles.container}>
      <View style={styles.chipLayout}>
        {selected?.map((item, i) => (
          <View style={styles.chipContainer} key={item.value}>
            {/* Hide if first child */}
            {i > 0 && <ConnectorArrow />}
            <Chip
              title={item.label}
              onClose={() => {
                setSelected((prev) => {
                  return prev.slice(0, i);
                });
              }}
            />
          </View>
        ))}
        {!isEdgeNode && (
          <View style={styles.chipContainer}>
            {/* Hide if first child */}
            {selected.length > 0 && <ConnectorArrow />}
            <Chip isPlaceholder title={props.levels?.[selected.length] || ""} />
          </View>
        )}
      </View>
      <Select
        value={
          isEdgeNode ? selected[selected.length - 1] : selected[selected.length]
        }
        options={
          selected.length === 0
            ? props.nestedData
            : isEdgeNode
            ? (selected[selected.length - 2].children as NestedDataType[])
            : (selected[selected.length - 1].children as NestedDataType[])
        }
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
      />
    </View>
  );
};
