import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.image}>
          <Image source={require("./assets/img.jpg.png")} />
        </View>
        <View>
          <Text style={{ color: "white", margin: 20 }}>
            My Projects
          </Text>
        </View>
        
        <View style={style.first}>
          <View
            style={{
              backgroundColor: "powderblue",
              width: 150,
              height: 100,
              borderRadius: 2
            }}
          >
            <Text style={{marginTop:50,marginLeft:10}}>HR</Text>
          </View>
          <View
            style={{
              backgroundColor: "powderblue",
              width: 150,
              height: 100,
              borderRadius: 2
            }}
          >
            <Text style={{marginTop:50,marginLeft:10}}>Finance</Text>
          </View>
        </View>
        <View style={style.second}>
          <View
            style={{
              backgroundColor: "powderblue",
              width: 150,
              height: 100,
              borderRadius: 2
            }}
          >
            <Text style={{marginTop:50,marginLeft:10}}>PM</Text>
          </View>
          <View
            style={{
              backgroundColor: "powderblue",
              width: 150,
              height: 100,
              borderRadius: 2
            }}
          >
            <Text style={{marginTop:50,marginLeft:10}}>UL/UX</Text>
          </View>
        </View>
        <View style={style.third}>
          <View
            style={{
              backgroundColor: "powderblue",
              width: 150,
              height: 100,
              borderRadius: 2
            }}
          >
            <Text style={{marginTop:50,marginLeft:10}}>Teachinh</Text>
          </View>
        </View>
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242132",
  

  },
  image: {
    width: 50,
    marginTop: 40,
    marginLeft: 20
  },
  first: {
    height:120,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    paddingBottom:10
  },
  second: {
    height:120,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20
  },
  third: {
    flex:1,
    flexDirection: "row",

    marginLeft: 20
  },
 
});
