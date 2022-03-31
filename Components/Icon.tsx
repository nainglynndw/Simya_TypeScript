import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageProps,
  ImageStyle,
  ImageRequireSource,
} from "react-native";
import React from "react";

interface Styles {
  img: ImageStyle;
}

interface Source {
  source: ImageRequireSource;
}

const Icon = ({ source }: Source, props: ImageProps) => {
  return <Image source={source} style={styles.img} />;
};

export default Icon;

const styles = StyleSheet.create<Styles>({
  img: {
    width: 30,
    height: 30,
  },
});
