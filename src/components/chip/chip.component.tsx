import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {styles} from './chip.styles';

interface Props {
  title?: string;
  onClose?(): void;
}

export const Chip = (props: Props) => {
  return (
    <View style={styles.chip}>
      <Text style={styles.title}>{props.title}</Text>
      <Pressable
        style={styles.closeButton}
        android_ripple={{color: 'hotpink', borderless: true, radius: 14}}
        onPress={() => {}}>
        <Image style={styles.closeButtonIcon} source={require('./img/x.png')} />
      </Pressable>
    </View>
  );
};
