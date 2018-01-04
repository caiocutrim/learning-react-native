import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import Button from './Button';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const {title, artist, thumbnail_image, image, url} = album;
  const {
    imageStyle,
    thumbNailStyle,
    headerContentStyle,
    headerTextStyle,
    thumbNailContainerStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbNailContainerStyle}>
          <Image
            style={thumbNailStyle}
            source={{uri: thumbnail_image}}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={imageStyle}
          source={{uri: image}}/>
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18,
  },
  thumbNailStyle: {
    height: 50,
    width: 50,
  },
  thumbNailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
export default AlbumDetail;