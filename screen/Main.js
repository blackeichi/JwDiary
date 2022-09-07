import React from "react";
import { Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { atomTheme } from "../utils/atom";

export const Main = () => {
  const theme = useRecoilValue(atomTheme);
  return (
    <View>
      <Text>{theme}</Text>
    </View>
  );
};
