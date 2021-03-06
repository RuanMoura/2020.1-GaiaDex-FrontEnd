import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather, FontAwesome5, Octicons } from '@expo/vector-icons';
import Header from './header';
import styles from './styles';
import { getPlant } from '../../services';
import NewTopic from './plantTopic/newTopic';
import PlantCardInfo from './plantInfo/myPlantCard';
import PlantCardTopic from './plantTopic/cardPlantTopic';
import { gray, green } from '../../theme/colorPalette';

export default function PlantCard({ navigation }) {
  const plantID = navigation.getParam('itemID', '5fcc46c17940a300617a93ab'); // Recebe ID da planta a ser exibida ou apresenta valor default
  const [plant, setPlant] = useState({});
  const [stateCard, setStateCard] = useState(false);
  useEffect(() => {
    getPlant(plantID).then((res) => setPlant(res.plant));
  }, []);
  return (
    <View style={styles.containerView}>
      <Header navigation={navigation} />
      <View style={styles.containerPlant}>
        <ImageBackground
          source={{ uri: plant?.profilePicture }}
          style={styles.plantImg}
          imageStyle={{ borderRadius: 25 }}
        />
        <View style={styles.plantInfo}>
          <Text style={styles.plantInfoTitle}>{plant?.scientificName}</Text>
          <View style={styles.plantInfoStats}>
            <View style={styles.plantInfoDiv}>
              <Feather name="users" size={15} color={gray.iron()} />
              <Text style={styles.plantInfoText}>
                {plant?.topics?.length} Usuários
              </Text>
            </View>
            <View style={styles.plantInfoDiv}>
              <FontAwesome5 name="comment" size={14} color={gray.iron()} />
              <Text style={styles.plantInfoText}>
                {plant?.topics?.length} Tópicos
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.plantText}>
          <Feather
            name="check-circle"
            size={18}
            color={green.malachite()}
            style={{ paddingBottom: 10 }}
          />
          <Text style={styles.plantTextDescription}>
            Esta é uma comunidade certificada/padrão do app. Direcionada para se
            interagir sobre quaisquer assuntos envolvendo cenouras.
          </Text>
        </View>
        <View style={styles.menuBar}>
          <TouchableOpacity
            style={styles.menuBarTab}
            onPress={() => setStateCard(true)}
          >
            <Text style={styles.menuBarTabText}>Informações</Text>
            <Octicons
              name="primitive-dot"
              size={20}
              color={stateCard ? 'green' : gray.iron()}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuBarTab}
            onPress={() => setStateCard(false)}
          >
            <Text style={styles.menuBarTabText}>Topicos</Text>
            <Octicons
              name="primitive-dot"
              size={20}
              color={stateCard ? gray.iron() : 'green'}
            />
          </TouchableOpacity>
        </View>
      </View>
      {stateCard ? (
        <>
          <PlantCardInfo navigation={navigation} plantID={plantID} />
        </>
      ) : (
        <>
          <PlantCardTopic navigation={navigation} plantID={plantID} />
          <NewTopic
            onPress={() =>
              navigation.push('TopicCreate', { itemID: plant?._id })
            }
          />
        </>
      )}
    </View>
  );
}
