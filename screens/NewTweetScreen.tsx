import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import ProfilePicture from '../components/ProfilePicture';

export default function NewTweetScreen() {

    const [ tweet, setTweet ] = useState('')
    const [ imageUrl, setImageUrl ] = useState('')

    const onPost = () => {
        console.warn(`Posting the tweet: ${tweet}
        Image: ${imageUrl}`)
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <AntDesign name='close' size={35} />
            <TouchableOpacity style={styles.button} onPress={onPost} >
                <Text style={styles.buttonText}>Tweet</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.newTweetContainer}>
            <ProfilePicture image={'https://miro.medium.com/max/1400/1*jDIj2SKAE-Bp32owLoHDjw.png'} />
            <View style={styles.inputContainer}>
                <TextInput 
                    value={tweet}
                    onChangeText={(value : string ) => setTweet(value)}
                    multiline={true}
                    numberOfLines={3}
                    style={styles.tweetInput}
                    placeholder={"What's happening?"}
                />
                <TextInput 
                    value={imageUrl}
                    onChangeText={(value : string ) => setImageUrl(value)}
                    style={styles.imageInput}
                    placeholder={"Image url (optional)"}
                />
            </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white',
    marginTop: 25,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  newTweetContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    maxWidth: 275,
    height: 100,
    maxHeight: 300,
    fontSize: 20,
    textAlignVertical: 'top',
    
  },
  imageInput: {

  },
});
