/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import FlexImage from 'react-native-flex-image';
import Video from 'react-native-video';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import like from './assets/images/Favorite.png';
import comment from './assets/images/comment.png';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {}, []);

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const randomHeight = () => {
    const months = ['350', '400', '450', '500', '550', '600'];
    const random = Math.floor(Math.random() * months.length);
    return months[random];
  };

  const renderList = ({item, index}: any) => {
    const height = randomHeight();
    return (
      <View style={{flexGrow: 1}}>
        {item == 2 ? (
          <View style={{flex: 1, backgroundColor: '#000000CC'}}>
            <Video
              source={{
                uri: 'https://media.ritusedyam.in/stream/feeds/1689265538616_portrait/1689265538616_portrait.m3u8',
              }}
              style={{height: 500, width: Dimensions.get('window').width}}
              resizeMode={'cover'}
              playInBackground={false}
              paused={false}
              muted={false}
              repeat={true}
              poster={
                'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80'
              }
              posterResizeMode={'cover'}
            />
          </View>
        ) : (
          <FlexImage
            source={{
              uri: `https://picsum.photos/500/${height}?random=${index}`,
            }}
          />
        )}
        <View style={styles.info}>
          {item == 3 ? (
            <View style={styles.card}>
              <Text style={styles.imageText}>
                {
                  'The Lorem Ipsum for photos.Lorem ipsum, Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
                }
              </Text>
            </View>
          ) : (
            <Text style={styles.imageText}>
              {
                'The Lorem Ipsum for photos.Lorem ipsum, Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
              }
            </Text>
          )}

          <View style={styles.bottomOptions}>
            <Image
              source={like}
              resizeMode={'center'}
              style={{height: 40, width: 40, marginEnd: 15}}
            />
            <Image
              source={comment}
              resizeMode={'center'}
              style={{height: 40, width: 40}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <FlatList
          data={Array.from({length: 10}, (_, index) => index + 1)}
          renderItem={renderList}
          ItemSeparatorComponent={<View style={{height: 16}}></View>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  renderContainer: {
    backgroundColor: 'lightblue',
  },
  list: {
    flex: 1,
  },
  info: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  bottomOptions: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ffffff4D',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ffffffCC',
  },
});

export default App;
