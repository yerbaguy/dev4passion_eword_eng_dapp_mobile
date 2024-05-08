import React, { useState } from 'react';
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';

import YoutubeIframe from 'react-native-youtube-iframe';

const MiniCard = (props)=>{

    const[playing, setPlayint] = useState(false);

    const navigation = useNavigation();
    const {colors} = useTheme()
    const textcolor = colors.iconColor

    console.log("MiniCard-videoId", props)
  return(
      <TouchableOpacity
    //   onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
    onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoID,title:props.title})}
      >

          {/* youtube */}
            {/* <YoutubeIframe
               height={300}
               play={playing}
            //    2ILMLDy0L5E
            //    videoId={'iee2TATGMyI'}
            videoId={'2ILMLDy0L5E'}
            /> */}




    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
        <Image 
        //    source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        //    source={{uri:`https://i.ytimg.com/vi/${props.videoId}/maxresdefault.jpg`}}
        source={{uri:`https://i.ytimg.com/vi/${props.videoID}/maxresdefault.jpg`}}
           style={{
               width:"45%",
               height:100
           }} />
           <View style={{
               paddingLeft:7
           }}>
               <Text style={{
                   fontSize:17,
                   width:Dimensions.get("screen").width/2,
                   color:textcolor
               }}
               ellipsizeMode="tail"
               numberOfLines={3}
               >{props.title}</Text>
               <Text style={{fontSize:12, color:textcolor}}>{props.channel}</Text>
           </View>
    </View>
    </TouchableOpacity>
  )
}

export default MiniCard