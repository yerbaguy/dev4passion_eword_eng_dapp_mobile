/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  Dimensions
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import BackgroundTimer from 'react-native-background-timer';

import MetaMaskSDK from '@metamask/sdk';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { NavigationContainer } from '@react-navigation/native';

const { width, height } = Dimensions.get("window")
const Tab = createBottomTabNavigator();



import {ethers} from 'ethers';

 import  EWordContractt  from './utils/EWordEngContract.json';
import EngWords from './EngWords';
import LearnEngWords from './LearnEngWords';
import EngWordss from './EngWordss';
import EngWordssss from './EngWordssss';
import AddWords from './AddWords';


 // import  abi  from './utils/EWordEngContract.json';


const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"


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



const BottomTabNavigator = () => {
  return (
    <View style={{
      width,
      height,
  }}>
    <Tab.Navigator>
      {/* <Tab.Screen name='Home' component={MainScreen} /> */}

      {/* <Tab.Screen name='Home' component={DrawerNavigator} /> */}
      
      {/* <Tab.Screen name='Learn' component={LearnnnnScreen} options={{ headerShown: false }}/> */}
      <Tab.Screen name='Learn' component={LearnEngWords} options={{ headerShown: false }}/>
      <Tab.Screen name='Add Word' component={AddWords} options={{ headerShown: false }}/>

      {/* <Tab.Screen name='Words' component={WordssScreen} /> */}
      {/* <Tab.Screen name='Words' component={EngWords} options={{ headerShown: false }}/> */}
      <Tab.Screen name='Words' component={EngWordssss} options={{ headerShown: false }}/>
      {/* <Tab.Screen name='Words' component={EngWordss} options={{ headerShown: false }}/> */}

      {/* <Tab.Screen name='Contact' component={ContactScreen} /> */}
    </Tab.Navigator>
    </View>
  )
}


const App: () => Node = () => {
  const [response, setResponse] = useState();
  const [account, setAccount] = useState();
  const [chain, setChain] = useState();
  const [balance, setBalance] = useState();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const textStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
    margin: 10,
    fontSize: 16,
  };

  const getBalance = async () => {
    if (!ethereum.selectedAddress) {
      return;
    }
    const bal = await provider.getBalance(ethereum.selectedAddress);
    setBalance(ethers.utils.formatEther(bal));
  };

  useEffect(() => {

    // const provider = new ethers.providers.Web3Provider(ethereum, "any");
    // const data = ("variety","/vəˈraɪəti/","several different sorts of the same thing");

    // console.log("provider", provider);

    // // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt, provider.getSigner());
    // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());

    // console.log(ewordEngWContract);

    // ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");



    // ewordEngWContract.addEWord({
    //   from: account,
    //   data: data
    // },
    // (err, res) => {
    //   console.log("error", err);
    //   console.log("res", res);
    
    // }
    
    // );

    ethereum.on('chainChanged', chain => {
      console.log(chain);
      setChain(chain);
    });
    ethereum.on('accountsChanged', accounts => {
      console.log(accounts);
      setAccount(accounts?.[0]);

      getBalance();



      const provider = new ethers.providers.Web3Provider(ethereum, "any");
      // const data = ("variety","/vəˈraɪəti/","several different sorts of the same thing");
      const data = ("reason","/ˈriːzn/","a cause or an explanation for something that has happened or that somebody has done");

  
      console.log("provider", provider);
  
      // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt, provider.getSigner());
      const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());
  
      console.log(ewordEngWContract);
  
      //  ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");
     
     
     
       ////this adds new word to the block
      // ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");
      //  ewordEngWContract.addEWord("correctly","/kəˈrektli/","in a way that is accurate or true, without any mistakes");
      ewordEngWContract.addEWord("endorsement","/ɪnˈdɔːsmənt/","a public statement or action showing that you support somebody/something");





  





    });


    // const provider = new ethers.providers.Web3Provider(ethereum, "any");
    // const data = ("variety","/vəˈraɪəti/","several different sorts of the same thing");

    // console.log("provider", provider);

    // // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt, provider.getSigner());
    // const ewordEngWContract = new ethers.Contract(ewordEngContract, EWordContractt.abi, provider.getSigner());

    // console.log(ewordEngWContract);

    // ewordEngWContract.addEWord("variety","/vəˈraɪəti/","several different sorts of the same thing");



  }, []);

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

  const exampleRequest = async () => {
    try {
      const result = await ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x89',
            chainName: 'Polygon',
            blockExplorerUrls: ['https://polygonscan.com'],
            nativeCurrency: {symbol: 'MATIC', decimals: 18},
            rpcUrls: ['https://polygon-rpc.com/'],
          },
        ],
      });
      console.log('RESULT', result);
      setResponse(result);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const sign = async () => {
    const msgParams = JSON.stringify({
      domain: {
        // Defining the chain aka Rinkeby testnet or Ethereum Main Net
        chainId: parseInt(ethereum.chainId, 16),
        // Give a user friendly name to the specific contract you are signing for.
        name: 'Ether Mail',
        // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
        verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
        // Just let's you know the latest version. Definitely make sure the field name is correct.
        version: '1',
      },

      // Defining the message signing data content.
      message: {
        /*
         - Anything you want. Just a JSON Blob that encodes the data you want to send
         - No required fields
         - This is DApp Specific
         - Be as explicit as possible when building out the message schema.
        */
        contents: 'Hello, Bob!',
        attachedMoneyInEth: 4.2,
        from: {
          name: 'Cow',
          wallets: [
            '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
            '0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF',
          ],
        },
        to: [
          {
            name: 'Bob',
            wallets: [
              '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
              '0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57',
              '0xB0B0b0b0b0b0B000000000000000000000000000',
            ],
          },
        ],
      },
      // Refers to the keys of the *types* object below.
      primaryType: 'Mail',
      types: {
        // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
        EIP712Domain: [
          {name: 'name', type: 'string'},
          {name: 'version', type: 'string'},
          {name: 'chainId', type: 'uint256'},
          {name: 'verifyingContract', type: 'address'},
        ],
        // Not an EIP712Domain definition
        Group: [
          {name: 'name', type: 'string'},
          {name: 'members', type: 'Person[]'},
        ],
        // Refer to PrimaryType
        Mail: [
          {name: 'from', type: 'Person'},
          {name: 'to', type: 'Person[]'},
          {name: 'contents', type: 'string'},
        ],
        // Not an EIP712Domain definition
        Person: [
          {name: 'name', type: 'string'},
          {name: 'wallets', type: 'address[]'},
        ],
      },
    });

    var from = ethereum.selectedAddress;

    var params = [from, msgParams];
    var method = 'eth_signTypedData_v4';

    const resp = await ethereum.request({method, params});
    setResponse(resp);
  };

  const sendTransaction = async () => {
    const to = '0x0000000000000000000000000000000000000000';
    const transactionParameters = {
      to, // Required except during contract publications.
      from: ethereum.selectedAddress, // must match user's active address.
      value: '0x5AF3107A4000', // Only required to send ether to the recipient from the initiating external account.
    };

    try {
      // txHash is a hex string
      // As with any RPC call, it may throw an error
      const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      setResponse(txHash);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NavigationContainer>
    <SafeAreaView style={backgroundStyle}>
      {/* <NavigationContainer> */}
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
          {/* <EngWords /> */}



        <Button title={account ? 'Connected' : 'Connect'} onPress={connect} />




        {/* <Button title="Sign" onPress={sign} />
        <Button title="Send transaction" onPress={sendTransaction} />
        <Button title="Add chain" onPress={exampleRequest} />

        <Text style={textStyle}>{chain && `Connected chain: ${chain}`}</Text> */}


        {/* <Text style={textStyle}>
          {' '}
          {account && `Connected account: ${account}\n\n`}
          {account && balance && `Balance: ${balance} ETH`}
        </Text> */}


        {/* <Text style={textStyle}>
          {' '}
          {response && `Last request response: ${response}`}
        </Text> */}


      </ScrollView>
      <BottomTabNavigator />
      {/* </NavigationContainer> */}
    </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
