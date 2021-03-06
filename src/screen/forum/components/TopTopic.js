import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import styles from '../styles';
import { gray } from '../../../theme/colorPalette';

export default function TopTopic({ navigation, topTopic }) {
  const TopPost = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.push('TopicView', { itemID: item?._id })}
    >
      <ImageBackground
        source={{ uri: item?.plant?.profilePicture }}
        style={styles.topPostBack}
        imageStyle={{ borderRadius: 20 }}
      >
        <View style={styles.topPostPlant}>
          <View style={styles.topPostInfo}>
            <Text numberOfLines={1} style={styles.postTitle}>
              {item?.title}
            </Text>
            <Text numberOfLines={2} style={styles.postDescription}>
              {item?.description}
            </Text>
            <Text style={styles.postData}>{item?.createdAt}</Text>
            <View style={styles.posStatus}>
              <View style={styles.postLikes}>
                <FontAwesome5
                  name="comment-alt"
                  size={20}
                  color={gray.iron()}
                />
                <Text style={styles.postTitle}>{item?.comments.length}</Text>
              </View>
              <View style={styles.postLikes}>
                <AntDesign name="arrowup" size={20} color={gray.iron()} />
                <Text style={styles.postTitle}>{item?.likes.length}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
  return (
    <FlatList
      data={topTopic}
      keyExtractor={(item) => item?._id}
      renderItem={({ item }) => <TopPost item={item} />}
    />
  );
}
