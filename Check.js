import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, Ionicons, TextInput, Button, FlatList } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import MiniCard from './components/MiniCard';

//const youtubeTranscript = require('youtube-transcript');


//import { YoutubeTranscript } from 'youtube-transcript';

import YoutubePlayer from "react-native-youtube-iframe";

// import {
//     YoutubeCaptions, 
//     getSubtitles, 
//     getSubtitlesContent 
//     } from 'youtube-captions-scraper';

// import {
//     YoutubeCaptions, 
//     getSubtitles, 
//     getSubtitlesContent 
//     } from 'youtube-captions-scraper';
  
import {

    YoutubeCaptions, 
    getSubtitles, 
    getSubtitlesContent 

} from '@drorgl/youtube-captions-scraper'

//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]'

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]

<script src="
https://cdn.jsdelivr.net/npm/youtube-captions-scraper-react-native@1.0.10/dist/index.min.js
"></script>


const Check = (props) => {

    const[playing, setPlayint] = useState(false);

    const [value, setValue] = useState([]);

    const [miniCardData, setMiniCard] = useState([]);

    // const [videoId, setVideoId] = useState();
    const [videoId, setVideoId] = useState([]);
   // const [vidid, setVidId] = useState([]);

    const [data, setData] = useState();

    useEffect(() => {

        getCheck();
        getSubtitls();
        fetchData();


    }, [])

    const getCheck = () => {

        console.log("check");

        // fetch("https://youtube.googleapis.com/youtube/v3/captions/v9ew8ltRbWI?onBehalfOf=yerbaguy&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4")
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        // })

        // getSubtitles({
        //     videoID: 'v9ew8ltRbWI', // youtube video id
        //     lang: 'fr' // default: `en`
        //   }).then(captions => {
        //     console.log(captions);
        //   });

        //youtubeTranscript.default.fetchTranscript('2ILMLDy0L5E').then(console.log);
      
        //// YoutubeTranscript.fetchTranscript('2ILMLDy0L5E').then(console.log);

    }

    const getSubtitls = () => {

        getSubtitles({
            videoID: '2ILMLDy0L5E', // youtube video id
            lang: 'en' // default: `en`
          }).then(captions => {
            console.log("captions", captions);
          });

    }

    const fetchData = () => {

        // https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]

        // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log("data", data)
        // })

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDUWweYDFXkKW7jk8tGW5OMfZ2tkDdFTx4`)
        .then(res => res.json())
        .then(data => {
            // console.log("data", data)
            // console.log("data", data.items)

            // data.id.videoId

          //  console.log("data", data.items[etag])

            
            

            //setData(data);
            setVideoId(data.items)
            console.log("data-id-videoid", videoId)



            // videoId.map( vid => {
            //     console.log("videoid", vid.videoID)
            // })

            // {
            //     data.map((data) => {
            //         console.log("data", data.id.videoId)
            //     })
    
            // }

            


  


            // setMiniCard(data.items);
            setMiniCard(videoId);
        })

          //{


            // videoId.map( video => {
            //     //setVidId(video.id.videoId);
            
            //     // console.log("video", video.id.videoId)
            //     console.log("video", video.data.id.videoId)
            // })


        
    }

    return (
        // <View>
        //     <Text>Check</Text>
        // </View>
        // <SafeAreaView style={{
        //      flex: 1
        // }}>
        <View style={{
            // flex: 1
       }}>

         

          {/* videoremoved */}
          {/* {
            videoId.map( video => {
               // setVidId(video.id.videoId);
            
                // console.log("video", video.id.videoId)
                console.log("video", video.data.videoId)
            })
          } */}


            {/* <View style={{
                padding: 5,
                flexDirection : "row",
                justifyContent : "space-around",
                elevation : 5,
            }} > */}
                <View style={{
                padding: 1,
                flexDirection : "row",
                justifyContent : "space-around",
                elevation : 1,
            }} >




            <TextInput style={{ width: "70%",
                                backgroundcolor: "#e6e6e6"}}

                                value = {value}
                                onChangeText = {(text) => setValue(text)}

                                />
            {/* icons */}
            {/* <Ionicons 
            name="md-send"
            size={32}
            onPress={()=> fetchData()}
            /> */}

            <Button 

            title="Search"
            onPress={()=> fetchData()}
            />


             {/* youtube */}
            {/* <YoutubeIframe
               height={300}
               play={playing}
            //    2ILMLDy0L5E
            //    videoId={'iee2TATGMyI'}
            videoId={'2ILMLDy0L5E'}
            /> */}

            </View>


            {/* RveHGe2uvbk */}

             {/* youtuberemove */}
             <YoutubeIframe
               height={300}
               play={playing}
            //    2ILMLDy0L5E
            //    videoId={'iee2TATGMyI'}
     
            // videoId={'2ILMLDy0L5E'}
                videoId={'RveHGe2uvbk'}
             //videoId={videoId}
            />

            {/* flatlistremove */}
            <FlatList
            data={miniCardData}

            renderItem={({item})=> {
                return <MiniCard
                //   videoID={item.id.videoID}
                videoID={item.id.videoId}
                

                
                // videoID={data.id.videoID}
                // videoID={data.items.id.videoID}
                
                /////videoID={data.id.videoId}

                // videoID = {
                //     videoId.map( videoid => {
                //         videoId
                //         console.log("videoid", videoid.id.videoId)
                //         return (
                //             videoid.videoId
                //         )
                //     })
                // }
                // videoID = {
                //     vidid.map( vd => {
                //         console.log("vd", vd.videoId)
                //         return (
                //             vd.videoId
                //         )
                //     }
                        
                //     )
                // }
               
                
                title={item.snippet.title}
                channel={item.snippet.channelTitle}
                />

                console.log("videoId", item.id.videoID)

                keyExtractor=(item=>item.itemId.videoID)
                //setVideoId(item.itemId.videoID)
            }}

            />


            {/* </View> */}

        {/* </SafeAreaView> */}

        </View>
    )
}

export default Check;