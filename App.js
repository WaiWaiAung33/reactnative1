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
          <View style={style.second}>
            <Text style={style.text}>HR</Text>
          </View>
          <View style={style.second}
          >
            <Text style={style.text}>Finance</Text>
          </View>
        </View>

        <View style={style.first}>
          <View style={style.second}>
            <Text style={style.text}>PM</Text>
          </View>
          <View style={style.second} >
            <Text style={style.text}>UL/UX</Text>
          </View>
        </View>

        <View style={style.first}>
          <View style={style.second}>
            <Text style={style.text}>Teachinh</Text>
          </View>
        </View>
        
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal:20

  },
  image: {
    width: 50,
    marginTop: 40,
    marginLeft: 20
  },
 
  text:{
    marginTop:70,
    marginLeft:10,
    color:"white"
  },
  first:{
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
   marginVertical:10

  },
  second:{
   
      backgroundColor: "#242132",
      width:"45%",
      height: 130,
      borderRadius: 5
    
  }
 
});
