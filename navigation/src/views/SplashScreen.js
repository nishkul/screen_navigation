import * as React from 'react';
import { View,Image,StyleSheet,Text,Button } from 'react-native';
export default class SplashScreen  extends React.Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.props.navigation.navigate('login')   
     }, 3000)//wait for 3000 over 
  }
  
    render() {
      let pic =  "../images/splash_bg.jpg";

      return (
        
        <View>
        <Image source = {require(pic)}  style={styles.imagesStyle}
         />
                </View> 
      );
    }
  






}
var styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4834DF',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imagesStyle:{
        alignSelf: 'center',
    borderWidth: 1,
    width: 400,
    height: 700
      }

})


//alterntive way for rendering the view 

// render() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       //   <Button
// title="Go to "
// onPress={()=>{this.props.navigation.navigate('login')}}
// />
//     </View>
//   );
// }

