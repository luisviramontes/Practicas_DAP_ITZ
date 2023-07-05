import React from "react";
import { View, Text } from "react-native";

const ViewComponente = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'red'
      }}>
      <View
        style={{
          flex: 1,

          backgroundColor: 'blue'
        }}>

      </View>
      <View style={{
        flex: 1,
        backgroundColor: 'yellow'
      }}>

      </View>

    </View>
  )

}

export default ViewComponente;