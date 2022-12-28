import React, { useState, useEffect } from 'react';
import { View, Text,StyleSheet,Button } from 'react-native';
import auth from '@react-native-firebase/auth';

 export default function Home({navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  const Logout =()=>{
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) return null;

  if (!user) {
    navigation.navigate('Login')
    return (
      <View style={style.mainContainer}>
        <Button title='Login' onPress={()=>navigation.navigate('Login')} />
      </View>
    );
  }

  return (
    <View style={style.mainContainer}>
      <Text style={{marginBottom:20}}>Welcome {user.email}</Text>
      <Button title='Logout' onPress={Logout} />
    </View>
  );
}

const style = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})