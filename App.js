import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" 

export default function App(){
  const [size, setSize] = useState(10)

  function generatePassword(){
    
    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    
    console.log(password);
  }


  return(
    <View style={styles.container}>
      <Image 
      source={require("./src/assets/logo.png")}
      style={styles.logo}
      />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider 
        style={{ height: 50 }}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor='#BBBBBB'
        minimumTrackTintColor='#FF2626'
        thumbTintColor='#008577'
        value={size}
        onValueChange={ (value) => setSize(value.toFixed(0)) }
        />

      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button:{
    backgroundColor: "#392DE9",
    width: "80%",
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
})
