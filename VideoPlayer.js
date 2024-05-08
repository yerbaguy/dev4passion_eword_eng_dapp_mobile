import React, { useState } from 'react';
import { StyleSheet, Text, View,Dimensions} from 'react-native';
//import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import YoutubeIframe from 'react-native-youtube-iframe';

const VideoPlayer = ({route})=>{
    const {videoId,title} = route.params
// const VideoPlayer = ({props})=>{
//     const {videoId,title} = route.params


    // console.log("videoId", props);
    console.log("videoId", route.params);

    const[playing, setPlayint] = useState(false);
   return(
       <View style={{
           flex:1,
//        marginTop:Constant.statusBarHeight
        }}>


          {/* removed */}
          {/* <YoutubeIframe
               height={300}
               play={playing}
            //    2ILMLDy0L5E
            //    videoId={'iee2TATGMyI'}

            // videoId={'2ILMLDy0L5E'}
            videoId={videoId}
            /> */}





           <View style={{
               width:"100%",
               height:200
           }}>
              <WebView
              javaScriptEnabled={true}
              domStorageEnabled={true}
               source={{uri:`https://www.youtube.com/embed/${videoId}`}}
              />

           </View>
           <Text style={{
               fontSize:20,
               width:Dimensions.get("screen").width - 50,
               margin:9
           }}
           numberOfLines={2}
           ellipsizeMode="tail"
           >
             {title}
           </Text>
           <View
             style={{borderBottomWidth:1}}
           />
       </View>
   )
}

export default VideoPlayer