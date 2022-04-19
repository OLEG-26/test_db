import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, {Component} from 'react'

export default class StudentInsert extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state={Firstname:'',Lastname:'',Contact:'',Email:'',Companyname:'',}
    }

    InsertRecord=()=>
    {
        var Firstname=this.state.Firstname;
        var Lastname=this.state.Lastname;
        var Contact=this.state.Contact;
        var Email=this.state.Email;
        var Companyname=this.state.Companyname;

        if(Firstname.length==0 || Lastname.length==0 || Contact.length==0 || Email.length==0 || Companyname.length==0)
        {
            alert("Required Fields Missing");
        }else{
            var InsertAPIURL="http://192.168.1.5:19000/api/users.php";

            var headers={
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            var Data={
                Firstname:Firstname,
                Lastname:Lastname,
                Contact:Contact,
                Email:Email,
                Companyname:Companyname,
            };
            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers: headers,
                    body: JSON.stringify(Data)
                }
                )
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                })
                .catch((error)=>
                {
                    alert("Error" + error);
                })
        }
    }
    

    render()
    {
        return (
        <View style={styles.ViewStyle}>

        <TextInput
        style={styles.TextStyle}
        placeholder={"firstname"}
        placeholderTextColor={'red'}
        onChangeText={Firstname=>this.setState({Firstname})}
        />

        <TextInput
        style={styles.TextStyle}
        placeholder={"lastname"}
        placeholderTextColor={'red'}
        onChangeText={Lastname=>this.setState({Lastname})}
        />

        <TextInput
        style={styles.TextStyle}
        placeholder={"contact"}
        placeholderTextColor={'red'}
        onChangeText={Contact=>this.setState({Contact})}
        />

        <TextInput
        style={styles.TextStyle}
        placeholder={"email"}
        placeholderTextColor={'red'}
        onChangeText={Email=>this.setState({Email})}
        />

        <TextInput
        style={styles.TextStyle}
        placeholder={"companyname"}
        placeholderTextColor={'red'}
        onChangeText={Companyname=>this.setState({Companyname})}
        />

        <Button
            title={"Save Record"}
            onPress={this.InsertRecord}
        />

        </View>
        )
    }
}

const styles=StyleSheet.create({
    ViewStyle:{
        flex:1,
        padding:20,
        marginTop: 250,
    },
    TextStyle:{
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginBottom: 20,
    },

});