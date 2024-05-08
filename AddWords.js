import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, onPress, Button } from 'react-native';

import BackgroundTimer from 'react-native-background-timer';

import MetaMaskSDK from '@metamask/sdk';

import {ethers} from "ethers"




// import EWordEngContract from '../artifacts/contracts/EWordEngContract.sol/EWordEngContract.json'
// import EWordEngContract from '../artifacts/contracts/EWordEngWordContract.sol/EWordEngWordContract.json'

//const ewordEngContract = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

import EWordEngContract from './utils/EWordEngWordContract.json'

import  EWordContractt  from './utils/EWordEngWordContract.json';


//0xCD1F75e419A6474e4c03eb49701c52440aB20Ee8
// const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"
const ewordEngContract = "0xCD1F75e419A6474e4c03eb49701c52440aB20Ee8"


const sdk = new MetaMaskSDK({
  openDeeplink: link => {
    Linking.openURL(link);
  },
  timer: BackgroundTimer,
  dappMetadata: {
    name: 'React Native Test Dapp',
    url: 'example.com',
  },
});

const ethereum = sdk.getProvider();

const provider = new ethers.providers.Web3Provider(ethereum);




const AddWords = () => {

    const [engWord, setEngWord] = useState('')
    const [engWordExplained, setEngWordExplained] = useState('')
    const [engWordPronounciation, setEngWordPronounciation] = useState('')
    const [whetherTheWordExists, setWhetherTheWordExists] = useState('')

    const [plWord, setPlWord] = useState('')
    // const [engW, setEngW] = useState('')
    // const [plW, setplW] = useState('')

    // const [engW, setEngW] = useState([])
    const [engW, setEngW] = useState('')
    const [engWExplained, setEngWExplained] = useState('')
    const [plW, setplW] = useState([])

    const [englishWord, setEnglishWord] = useState('')
    const [englishWordPronounciation, setEnglishWordPronounciation] = useState('')
    const [englishWordExplained, setEnglishWordExplained] = useState('')
     const [whetherEWordExists2orNot, setwhetherEWordExists2orNot] = useState('')
     const [isdisabled, setIsDisabled] = useState(true)
    //let whetherEWordExists2orNot = ""
    

    const [engWToCheck, setEngWToCheck] = useState('')
    // const [engWToCheck, setEngWToCheck] = useState([])
    // const [data, setData] = useState('')
    //const [data, setData] = useState(1)
    const [data, setData] = useState([])

    const [ewordsCount, setEWordsCount] = useState(0)

    const [account, setAccount] = useState();
    const [chain, setChain] = useState();
    const [balance, setBalance] = useState();

    let ewordscount
    // let datacount = 1
    let datacount = 0;
    let countallewords_length

    // const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
    // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );

    // const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
    const provider = new ethers.providers.Web3Provider(ethereum, "any");
    console.log("provider", provider);
   // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );
    const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());


    useEffect(()=>{

        // const provider = new ethers.providers.getDefaultProvider("wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm", 1);
      
        //  const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
        // console.log("provider", provider);

        // const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );

        // console.log("engwordcontract", engwordcontract);

    },[])

    const getBalance = async () => {
        if (!ethereum.selectedAddress) {
          return;
        }
        const bal = await provider.getBalance(ethereum.selectedAddress);
        setBalance(ethers.utils.formatEther(bal));
      };



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

    const getWord = (val) => {

        console.log(val);
        setEngWord(val)

        const eword = {
            engword: engWord,
            engword_explained: engWordExplained,
            engword_pronounciation: engWordPronounciation
        };

        whetherEWordExists2(eword.engword);



    }

    const whetherEWordExists2 = async (engword) => {

        // try {
        
        //     const provider = new ethers.providers.getDefaultProvider("http://localhost:8545", 1);
        //     console.log("provider", provider);
    
        //     const engwordcontract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider );
    
        //     console.log("whetherEWordExists2-engwordcontract", engwordcontract);



        //     // return erc20.whetherEWordExists1(engword).then((result) => {
        //     return engwordcontract.whetherEWordExists1(engword).then((result) => {

        //         // console.log("whetherEWordExists2", result[1].engword);
        //         console.log("whetherEWordExists2", result);
        //        //console.log("whetherEWordExists2", result[0].engword);
    
               
    
        //         // let resultt = result[1].engword;
        //         // setWhetherTheWordExists(resultt);
        //         let resultt = result[0].engword;
   
        //         // setWhetherTheWordExists(resultt);
        //         // console.log("whetherTheWordExists", whetherTheWordExists)
                
        //         console.log("whetherTheWordExists", resultt)
    
        //        //
        //         // let resultt = result[1].engword;
        //         // setWhetherTheWordExists(result[1].engword);
        //         // result_engw = resultt;
        //        //
    
               
            
            
        //         //setWhetherTheWordExists(transaction);
    
        //     }).catch('error', console.error);
    



        //     // const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
        //     // console.log("whetherEWordExists2-provider", provider);

        //     // const erc20 = new ethers.Contract(ewordEngContract, EWordEngContract.abi, provider);

        //     // console.log("erc20", erc20);
    
            
        // } catch (error) {

        //     console.log("error", error);
            
        // }

        console.log("whetherEWordExists2", engword);

        const whetherwordexists = await engwordcontract.whetherEWordExists1(engword);
        console.log("whetherwordexists", whetherwordexists);




    }

      const submitWord = async () => {
     //   async function submitWord() {

       // const provider = new ethers.providers.Web3Provider(ethereum, "any");
       // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());


        console.log("submit word");

        console.log("engword", engWord);
        console.log("engword-pronounciation", engWordPronounciation);
        console.log("engword-meaning", engWordExplained);

        // ewordEngWContract.addEWord("endorsement","/ɪnˈdɔːsmənt/","a public statement or action showing that you support somebody/something");
        



    //    try {

            // const transaction = await ewordEngWContract.addEWord("endorsement","/ɪnˈdɔːsmənt/","a public statement or action showing that you support somebody/something");
          
          
            // const transaction = await ewordEngWContract.addEWord(engWord,engWordPronounciation,engWordExplained);
          
          
          ////////  ewordEngWContract.addEWord(engWord,engWordPronounciation,engWordExplained);


          //  console.log("add-word-transaction", transaction);
            
        // } catch (error) {
        //     console.log("add-word-error", error);
        // }



        ethereum.on('chainChanged', chain => {
            console.log(chain);
            setChain(chain);
          });
          ethereum.on('accountsChanged', accounts => {
            console.log(accounts);
            setAccount(accounts?.[0]);
      
            getBalance();
      
      
      
           ///// const provider = new ethers.providers.Web3Provider(ethereum, "any");
            // const data = ("variety","/vəˈraɪəti/","several different sorts of the same thing");
          /////  const data = ("reason","/ˈriːzn/","a cause or an explanation for something that has happened or that somebody has done");
      
        
          /////  console.log("provider", provider);
        
            // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt, provider.getSigner());
         ////   const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());
        
          /////  console.log("ewordEngWContract", ewordEngWContract);
        
            //  ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");
           
           
           
             ////this adds new word to the block
            // ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");
            //  ewordEngWContract.addEWord("correctly","/kəˈrektli/","in a way that is accurate or true, without any mistakes");
            
            
            
            ////ewordEngWContract.addEWord("endorsement","/ɪnˈdɔːsmənt/","a public statement or action showing that you support somebody/something");
      
      

            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            // const data = ("variety","/vəˈraɪəti/","several different sorts of the same thing");
            const data = ("reason","/ˈriːzn/","a cause or an explanation for something that has happened or that somebody has done");
      
        
            console.log("provider", provider);
        
            // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt, provider.getSigner());
            const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());
        
            console.log(ewordEngWContract);
      
      
      
        
      
      
      
      
      
          });













    

    }

    return (
        <View style={styles.container}>
            <Text>AddWords</Text>
           
           
            {/* <Text>Enter an english word to check whether it already in the base</Text>
            <TextInput 
            style={styles.input} 
            placeholder=' i.e. important'
            // onChangeText={(val) => setEngWord(val)}/>
            onChangeText={(val) => getWord(val)}/>

            <Text>engword: {engWord}</Text> */}




            <Text>Enter an english word details</Text>

            <TextInput 
            style={styles.input_engword} 
            placeholder=' i.e. kind'
            // onChangeText={(val) => setEngWord(val)}/>
            onChangeText={(val) => setEngWord(val)}/>

            <TextInput 
            style={styles.input_engword_pronounciation} 
            placeholder=' i.e. /kaɪnd/'
            // onChangeText={(val) => setEngWord(val)}/>
            onChangeText={(val) => setEngWordPronounciation(val)}/>

            <TextInput 
            style={styles.input_engword_meaning} 
            placeholder=' i.e. a group of people or things that are the same in some way; a particular variety or type'
            // onChangeText={(val) => setEngWord(val)}/>
            onChangeText={(val) => setEngWordExplained(val)}/>

            <Button title='Submit Word' onPress={()=> submitWord()} />

            <Button title={account ? 'Connected' : 'Connect'} onPress={connect} />





        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        border: 1,
        borderColor: '777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    input_engword: {
        border: 1,
        borderColor: '777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    input_engword_pronounciation: {
        border: 1,
        borderColor: '777',
        padding: 8,
        margin: 10,
        width: 200,
    },
    input_engword_meaning: {
        border: 1,
        borderColor: '777',
        padding: 8,
        margin: 10,
        width: 200,
        height: 100,
    },
});

export default AddWords;