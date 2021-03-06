import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  FlatList,
} from 'react-native';
import { EvilIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import MenuBar from '../../assets/components/menuBar';
import { getUserLogged } from '../../services';
import styles from './styles';
import { gray, green } from '../../theme/colorPalette';

const { height } = Dimensions.get('screen');

function getDateFromLast(obj, total) {
  const last = total - 1;
  return new Date(obj[last]?.createdAt);
}

function sort(user) {
  let countTopics = user?.topics?.length;
  let countMyPlants = user?.myPlants?.length;
  const activity = [];

  for (let i = 0; i < 6 && countTopics + countMyPlants > 0; i += 1) {
    if (countTopics > 0 && countMyPlants > 0) {
      const topicDate = getDateFromLast(user?.topics, countTopics);
      const myPlantDate = getDateFromLast(user?.myPlants, countMyPlants);
      if (topicDate - myPlantDate > 0) {
        countTopics -= 1;
        activity.push(user?.topics[countTopics]);
      } else {
        countMyPlants -= 1;
        activity.push(user?.myPlants[countMyPlants]);
      }
    } else if (countTopics > 0) {
      countTopics -= 1;
      activity.push(user?.topics[countTopics]);
    } else if (countMyPlants > 0) {
      countMyPlants -= 1;
      activity.push(user?.myPlants[countMyPlants]);
    }
  }

  return activity;
}

const backgroundVector = require('../../assets/Vector.png');
const userDefaultImg = require('../../assets/userDefault.png');

function Item({ title, nickname, tempo }) {
  const agora = new Date();
  const acao = new Date(tempo);
  if (nickname) {
    return (
      <View style={[styles.item, styles.plantItem]}>
        <Text>Adicionou {nickname} à sua coleçao</Text>
        <Text style={styles.time}>
          {Math.trunc((agora - acao) / 1000 / 60 / 60)}h atrás
        </Text>
      </View>
    );
  }
  return (
    <View style={[styles.item, styles.topicItem]}>
      <Text>
        Criou o tópico: {title.length > 10 ? `${title.slice(0, 10)}...` : title}
      </Text>
      <Text style={styles.time}>
        {Math.trunc((agora - acao) / 1000 / 60 / 60)}h atrás
      </Text>
    </View>
  );
}

export default function MyProfile({ navigation }) {
  const [activityLog, setActivitLog] = useState([]);
  const [user, setUser] = useState({});
  useEffect(() => {
    getUserLogged()
      .then((res) => {
        setUser(res);
        return sort(res);
      })
      .then((res) => {
        setActivitLog(res);
      });
  }, []);
  const renderItem = ({ item }) => (
    <Item
      title={item?.title}
      nickname={item?.nickname}
      tempo={item?.createdAt}
    />
  );
  return (
    <>
      <View style={styles.framePerfil}>
        <View style={styles.perfilTextView}>
          <Text style={styles.perfilText}>Perfil</Text>
          <EvilIcons
            name="gear"
            size={height / 16}
            color={gray.iron()}
            onPress={() => navigation.push('Config')}
          />
        </View>
        <ImageBackground style={styles.vector} source={backgroundVector}>
          <ImageBackground
            style={styles.photoView}
            imageStyle={styles.photo}
            source={user?.photo ? { uri: user.photo } : { userDefaultImg }}
          />
          <Text style={styles.name}>{`${user?.username}\n${user?.email}`}</Text>
        </ImageBackground>
      </View>
      <View style={styles.sumary}>
        <View
          style={[
            styles.sumaryComponents,
            { borderRightColor: gray.shark(), borderRightWidth: 3 },
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="twitch"
              size={30}
              color={green.darkFern()}
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: gray.iron() }}>{user?.topics?.length}</Text>
          </View>
          <Text style={{ marginTop: 10, color: gray.iron() }}>Tópicos</Text>
        </View>
        <View
          style={[
            styles.sumaryComponents,
            { borderRightColor: gray.shark(), borderRightWidth: 3 },
          ]}
        >
          <View style={{ flexDirection: 'row' }}>
            <FontAwesome
              name="star-o"
              size={30}
              color={green.darkFern()}
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: gray.iron() }}>
              {user?.favorites?.length}
            </Text>
          </View>
          <Text style={{ marginTop: 10, color: gray.iron() }}>Favoritos</Text>
        </View>
        <View style={styles.sumaryComponents}>
          <View style={{ flexDirection: 'row' }}>
            <Entypo
              name="flower"
              size={30}
              color={green.darkFern()}
              style={{ marginRight: 13 }}
            />
            <Text style={{ color: gray.iron() }}>{user?.myPlants?.length}</Text>
          </View>
          <Text style={{ marginTop: 10, color: gray.iron() }}>Plantas</Text>
        </View>
      </View>
      <View style={styles.frameDown}>
        <Text style={styles.minhasAtividades}>Minhas Atividades</Text>
        <View style={styles.list}>
          <FlatList
            data={activityLog}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <MenuBar navigation={navigation} />
    </>
  );
}
