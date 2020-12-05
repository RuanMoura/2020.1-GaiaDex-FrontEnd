import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Header from './header';
import styles from './style';
import { getPlant } from '../../services/backEnd';
import { Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';

export default function MyPlantCard({ navigation }){
    const plantID = navigation.getParam('itemID', '5fc843b413d9b0001c1ad57b'); // Recebe ID da planta a ser exibida ou apresenta valor default
    const [plant, setPlant] = useState({});
    const [isClick, setIsClick] = useState(false);
    useEffect(() => {
        getPlant(plantID)
        .then(res => setPlant(res.plant))
    }, []);

    const User = ( { item } ) => (
        <View style={styles.userDiv}>
            <ImageBackground source={require('../../assets/background.jpg') } style={styles.UserImg} imageStyle={{ borderRadius: 50 }}/>
            <Text style={styles.userName}>{item?.user?.username}</Text>
        </View>
      );
      const renderUser = ({ item }) => <User item={item} />;    
    
    
    return(
        <View style={styles.containerView}>
            <Header navigation={navigation}/>
            <View style={styles.containerPlant}>
                
                <ImageBackground source={{uri : plant?.profilePicture}} style={styles.plantImg} imageStyle={{ borderRadius: 25 }}/>
                <View style={styles.plantInfo}>
                        <Text style={styles.plantInfoTitle}>
                        {plant?.scientificName}
                        </Text>
                        <View style={styles.plantInfoStats}>
                            <View style={styles.plantInfoDiv}>
                                <Feather name="users" size={15} color="white" />
                                <Text style={styles.plantInfoText}>{plant?.topics?.length} Usuários</Text>
                            </View>
                            <View style={styles.plantInfoDiv}>
                                <FontAwesome5 name="comment" size={14} color="white" />
                                <Text style={styles.plantInfoText}>{plant?.topics?.length} Tópicos</Text>
                            </View>
                        </View>
                </View>
                <View style={styles.plantText}>
                        <Feather name="check-circle" size={18} color="green" style={{paddingBottom:10}}/>
                        <Text style={styles.plantTextDescription}>
                        Esta é uma comunidade certificada/padrão do app. Direcionada para se interagir sobre quaisquer assuntos envolvendo cenouras.
                        </Text>
                </View>
            </View>
            <View style={styles.containerBody}>
                <View style={styles.bodyTopics}>
                    <View style={styles.bodyDescription}>
                        <Text style={styles.bodyPlantsTitle}>Descrição</Text>
                        {!isClick ? 
                        <>
                            <View style={styles.descriptionContainer}>
                                <Text numberOfLines={2} style={styles.descriptionContainerText}>
                                    Cenouras são o alimento preferido do coelho. Essas divertidas plantas alaranjadas fazem muito bem para os olhos, pois contém muita vitamina A, que, como todos sabem, fazem muito bem para a vista.
                                </Text>  
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => setIsClick(!isClick)}>
                                <AntDesign name="down" size={15} color="black" />
                            </TouchableOpacity>
                        </>:
                        <>
                        <View style={styles.descriptionContainerTextOpen}>
                            <Text numberOfLines={10} style={styles.descriptionContainerText}>
                                Cenouras são o alimento preferido do coelho. Essas divertidas plantas alaranjadas fazem muito bem para os olhos, pois contém muita vitamina A, que, como todos sabem, fazem muito bem para a vista.
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.button} onPress={() => setIsClick(!isClick)}>
                                <AntDesign name="up" size={18} color="black" />
                            </TouchableOpacity>
                        </>
                        }
                            
                    </View>
                    <View style={styles.bodyInfo}>
                        <Text style={styles.bodyPlantsTitle}>Informações básicas</Text>
                        <View style={styles.basicContainer}>
                            <View style={styles.basicContainerDiv}>
                                <Text style={styles.basicTitle}>Caracteristicas</Text>
                                <Text style={styles.basicContainerText}>Nome científico: {plant?.scientificName}</Text>
                                <Text style={styles.basicContainerText}>Gênero: {plant?.genderName}</Text>
                                <Text style={styles.basicContainerText}>Família: {plant?.familyName}</Text>
                            </View>
                            <View style={styles.basicContainerDiv}>
                                <Text style={styles.basicTitle}>Informações</Text>
                                <Text style={styles.basicContainerText}>GbifID: {plant?.gbifID}</Text>
                                <Text style={styles.basicContainerText}>Extinção: {plant?.extinction}</Text>
                                <Text style={styles.basicContainerText}>Estado: {plant?.stateProvince}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bodyPlants}>
                    <Text style={styles.bodyPlantsTitle}>Comunidades relacionadas:</Text>
                    <FlatList
                        data={plant?.topics}
                        horizontal
                        renderItem={renderUser}
                        keyExtractor={(item) => item?._id}
                    />
                    
                </View>
            </View>
           
        </View>
    )
}