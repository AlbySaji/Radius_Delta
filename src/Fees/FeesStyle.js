import { StyleSheet } from "react-native";
import {moderateScale} from '../Common/Common.utils';
export const  FeesStyle = StyleSheet.create({
  mainContainer:{flex:1,backgroundColor:'#FFFFFF',padding:moderateScale(12)},

  container:{flex:1,
    backgroundColor:'#FFFEFE',
    paddingTop:moderateScale(32)},

    heading:{color:'#3750DD',
    fontSize:moderateScale(20),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',},

    SubView:{height:moderateScale(94),
      borderRadius:10,
      backgroundColor:'#FFFFFF',
      marginTop:moderateScale(10),
     
      elevation:18,},

    detail:{height:moderateScale(44),
      padding:moderateScale(6),
      flexDirection:'row',
      backgroundColor:'#3750DD',
      borderRadius:moderateScale(10),
      justifyContent:'space-between',},

      bottomDetail:{height:moderateScale(44),
        padding:moderateScale(6),
        flexDirection:'row',
       
        justifyContent:'space-between',},


    subHead:{color:'#FFFEFE',
    fontSize:moderateScale(15),
    fontFamily: 'Poppins-Bold',
    alignSelf:'center',
    fontWeight: '800',
    justifyContent:'center'},

    bottomHead:{color:'#FFFEFE',
    fontSize:moderateScale(15),
    fontFamily: 'Poppins-Bold',
    alignSelf:'center',
    fontWeight: '800',
    color:'black',
    justifyContent:'center'},

    pay:{color:'#FFFEFE',
    
    alignSelf:'center',
    fontSize:moderateScale(14),
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',},

    paid:{color:'#3750DD',
    
    alignSelf:'center',
    fontSize:moderateScale(16),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',},

    bottomPay:{color:'#949494',
    
    alignSelf:'center',
    fontSize:moderateScale(12),
    fontFamily: 'Poppins-Bold',
    fontWeight: '800',},
    divider: {
      borderBottomWidth: 1, 
      borderBottomColor: '#D3D3D3', 
      
    },
});

  export default FeesStyle