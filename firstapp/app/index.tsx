import { Text, View,Image,StyleSheet } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#008080",
      }}
    >
      <Image source={require("../assets/images/react-logo.png")} style={styles.logo}/>
      <Text style={styles.txt}>Hello World!</Text>
      <Text style={styles.subtxt}>My first ReactNative cross platform app</Text>
    </View>
  );
}
const styles= StyleSheet.create({
  logo:{
    width:120,
    height:120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightblue',
    marginBottom: 20,
  },
  txt:{
    fontSize:32,
    color:"#4B0082",
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtxt:{
    fontSize: 18, 
    color: '#8B4513',
    textAlign: 'center',
  },
})
