import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native';

import {ethers} from 'ethers';


///////////
const sdk = new MetaMaskSDK({
    openDeeplink: link => {
      Linking.openURL(link);
    },
   // timer: BackgroundTimer,
    dappMetadata: {
      name: 'React Native Test Dapp',
      url: 'example.com',
    },
  });
  
  const ethereum = sdk.getProvider();
  
  const provider = new ethers.providers.Web3Provider(ethereum);
  ////////////

  



  const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"


import  EWordContractt  from './utils/EWordEngContract.json';

//import { FlatList } from 'react-native-gesture-handler';


////////////
 import MetaMaskSDK from '@metamask/sdk';


// import {ethers} from 'ethers';

// const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
// var Contract = require('web3-eth-contract');

//import  EWordContractt  from './utils/EWordEngContract.json';


const EngWords = () => {

    const [engwords, setEngwords] = useState([]);
    const [account, setAccount] = useState();

    
    
  


    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    console.log("engwords-provider", provider);
    const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider);


  console.log("engwords-contract", ewordEngWContract);

    useEffect(()=> {

       // connect();

        const provider = new ethers.providers.Web3Provider(ethereum, "any");

        console.log("engwords-provider", provider);

        // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());
        const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider);

  
      console.log("engwords-contract", ewordEngWContract);

     /////// getEWordss();
     getEWordsssss();

              //  const ewords = ewordEngWContract.getEWords();
              //  setEngwords(ewords);
              //  console.log("ewords", engwords);


          // getEWordss(ewordEngWContract);

      // const getEWordss = async () => {

      //           const getewords = await ewordEngWContract.getEWords();
      //           console.log("getewords", getewords);
      // }

    //   const ewords = await ewordEngWContract.getEWords();

    //   setEngwords(ewords[0]);
    //   console.log("ewords", ewords);

        
          // getEWords();


        // const provider = new ethers.providers.Web3Provider(ethereum, "any");
        // const provider = new ethers.providers.AlchemyWebSocketProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm");

        // console.log("engwords-provider", provider);

    },[])


    const connect = async () => {
      try {
        const result = await ethereum.request({method: 'eth_requestAccounts'});
        console.log('RESULT', result?.[0]);
        setAccount(result?.[0]);
        getBalance();
      } catch (e) {
        console.log('ERROR', e);
      }
    };

    const getEWordsssss = async () => {

      try {
        // const engwordcontract = new ethers.Contract(ewordEngContract, provider.abi, provider);
        // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider);
        const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());


        console.log("getEWordssss", engwordcontract);
                //  const ewords = await engwordcontract.getEWords();
               const ewords =  engwordcontract.functions.getEWords();
                 console.log("ewords", ewords);
                //  console.log("ewords", ewords[0]);

      } catch (error) {
        console.log("error", error);
        
      }
    }

    const getEWordss = async () => {

      try {

        const getewords = await ewordEngWContract.getEWords();
        console.log("getewords", getewords);
        
      } catch (error) {

        console.log("error", error);
        
      }


}

//     const getEWordss = async (ewordEngWContract) => {

//       const getewords = await ewordEngWContract.getEWords();
//       console.log("getewords", getewords);
// }


    const getEWords = async () => {

        const getwords = "";

        getwords = await ewordEngContract.getEWords();

        setEngwords(getwords[0]);

        try {
            
        } catch (error) {
            console.log("error", error);
        }


        return getwords;
               
                 


                
    //         const ewords = await ewordEngWContract.getEWords();

    //   setEngwords(ewords[0]);
    //   console.log("ewords", ewords);
        
    }

    return (

        // <View>
        //     <Text>EngWords</Text>
        // </View>

        <SafeAreaView style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>LearnEngWordss</Text>
        {/* <Text>{ engword }</Text> */}

        <Button title={account ? 'Connected' : 'Connect'} onPress={connect} />


        <FlatList 
        data={engwords}
        renderItem={({item}) => (
            <View style={styles.item}>
                <Text>{item.id}{item.engword}</Text>

            </View>
        )}
        />
        


    </View>
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({

    container: {
      flex: 40,
    },
    sectionContainer: {
      marginTop: 40,
      paddingHorizontal: 30,
    },
    item: {
      // f6f6f6f
      // backgroundColor: '#f9c2ff',
      backgroundColor: '#b0c4de',
      padding: 40,
      marginVertical: 20,
      marginHorizontal: 16,
    }

});

export default EngWords;