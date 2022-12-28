import React,{useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    ToastAndroid
} from "react-native";
import auth from '@react-native-firebase/auth';

const displaytoast = (message) => {  
    ToastAndroid.show(message, ToastAndroid.SHORT);  
};  

export default function Signup({navigation}){
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);

    const createAccount=()=>{
        if(email != null && password != null){
            auth().createUserWithEmailAndPassword(email,password).then(()=>{
                console.log("Account created")
                navigation.navigate('Login');
                displaytoast("Account created successfully..")
            }).catch(error=>{
                console.log(error)
                displaytoast(error.toString())
            })
        }
    }

    return(
        <View style={style.mainContainer}>
            <Text style={style.heading}>Create account</Text>
            <TextInput placeholder="Enter email" style={style.input} onChangeText={text=>setEmail(text)} />
            <TextInput placeholder="Enter password" style={style.input} onChangeText={text=>setPassword(text)} secureTextEntry={true} />
            <TouchableHighlight style={style.btn} onPress={createAccount}>
                <Text style={{color:'#fff'}}>Signup</Text>
            </TouchableHighlight>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        margin:20,
    },
    input:{
        height:55,
        width:'100%',
        backgroundColor:'#eee',
        paddingLeft:30,
        borderWidth:1,
        borderRadius:10,
        marginBottom:20,
        borderColor:'#2980B9'
    },
    btn:{
        height:50,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'#2980B9'
    },
    heading:{
        fontSize:24,
        color:'#2980B9',
        fontWeight:'bold',
        marginBottom:20,
    }
})