
import { CardField, useStripe,CardFieldInput, PaymentMethod, PaymentIntent } from '@stripe/stripe-react-native';

import React from 'react';
import { Button,Text,View,StyleSheet, TouchableOpacity, Image,Modal,Dimensions } from 'react-native';

export default function PaymentScreen() {
 

  
  return (
<View style={{flex:1,backgroundColor:'#ffffff'}}>
<View>
<View style={{flexDirection:'row',alignItems:'center',marginHorizontal:20,marginTop:10,}}>

<Text style={{marginHorizontal:20,color:'black',fontSize:23,fontFamily:'Poppins-Medium',
fontWeight:'500'}}>Payment</Text> 
</View> 
<Image source={require('./assets/card/Card_both.png')} style={{alignSelf:'center',width:'100%',height:250,marginTop:20}}/>
<Text style={{fontSize:18,color:'#565656',marginHorizontal:20,marginTop:20}}>Payment Amount</Text>
<Text style={{fontSize:18,color:'#000000',marginHorizontal:20,marginTop:20}}>$123</Text>
   <CardField
   postalCodeEnabled={true}

   placeholders={{
     number: '4242 4242 4242 4242',
     
   }}
   cardStyle={{
     backgroundColor: '#FFFFFF',
     textColor: '#000000',
   }}
   style={{
     width: '100%',
     height: 50,
     marginTop:30
   }}
   onCardChange={(cardDetails) => {
     console.log('cardDetails', cardDetails);
   }}
   onFocus={(focusedField) => {
     console.log('focusField', focusedField);
   }}
 
   
 />


 <TouchableOpacity style={{backgroundColor:'#233B08',width:260,height:48,justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:30,marginTop:20}} >
 
 <Text style={{color:'#ffffff'}}>
 Pay
 </Text>
 </TouchableOpacity>

</View>
 
</View>

  );
}
const styles = StyleSheet.create({ 
  RedioBox: {
    width: Dimensions.get("screen").width - 65,
    height:196,
    backgroundColor: "#ffffff",
    marginHorizontal: 35,
    borderRadius: 15,
    marginVertical:230,
    shadowOpacity:0.25,
    shadowRadius:3.5,
  elevation:10,
  
  },
})
