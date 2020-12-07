import { StyleSheet, Dimensions } from 'react-native';

import Constants from 'expo-constants';
import { ceil, round } from 'react-native-reanimated';
import { NONE } from 'apisauce';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'column',
    backgroundColor: '#D6DADF',
    width: largura,
    backgroundColor: '#242528',
    flex: 0.8,
  },
  containerHeader: {
    flex: 0.15,
    backgroundColor: '#242528',
    width: largura,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerPlant: {
    flex: 0.3,
    backgroundColor: '#242528',
    flexDirection: 'column',
  },
  plantImg: {
    flex: 0.5,
    width: largura / 2.1,
    alignSelf: 'center',
    marginTop: '-15%',
  },
  plantInfo: {
    backgroundColor: '#242528',
    width: largura / 1.3,
    flex: 0.25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  plantInfoTitle: {
    flex: 0.6,
    color: '#D6DADF',
    fontSize: 23,
  },
  plantInfoStats: {
    flex: 0.4,
    flexDirection: 'row',
    width: largura / 1.3,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  plantInfoDiv: {
    width: '35%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  plantInfoText: {
    color: '#D6DADF',
    fontSize: 10,
  },
  plantText: {
    backgroundColor: '#242528',
    flex: 0.375,
    width: largura / 1.3,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plantTextDescription: {
    color: '#D6DADF',
    textAlign: 'left',
    padding: '4%',
    fontSize: 10,
  },
  containerBody: {
    flex: 0.6,
    backgroundColor: '#F9F6F4',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  bodyPlants: {
    width: largura / 1.1,
    alignSelf: 'center',
    padding: 10,
    flex: 0.28,
  },
  bodyPlantsTitle: {
    color: '#242528',
    fontSize: 16,
    marginBottom: 10,
  },
  userDiv: {
    padding: 5,
    width: largura / 5,
    alignItems: 'center',
  },
  UserImg: {
    width: largura / 6,
    height: largura / 6,
  },
  userName: {
    fontSize: 12,
    textAlign: 'center',
  },
  bodyTopics: {
    width: largura / 1.2,
    alignSelf: 'center',
    justifyContent: 'space-around',
    flex: 0.75,
  },
  bodyDescription: {
    flex: 0.45,
  },
  descriptionContainer: {
    flex: 0.7,
    width: largura / 1.25,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A8AFB9',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  descriptionContainerTextOpen: {
    flex: 1,
    width: largura / 1.25,
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#A8AFB9',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 20,
    width: largura / 1.25,
    backgroundColor: '#E5E5E5',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A8AFB9',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  descriptionContainerText: {
    fontSize: 10,
    fontWeight: '300',
    textAlign: 'left',
  },
  bodyInfo: {
    flex: 0.4,
  },
  basicContainer: {
    flex: 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  basicContainerDiv: {
    fontSize: 8,
    fontWeight: '300',
    textAlign: 'left',
    width: largura / 2.6,
    borderWidth: 1,
    borderColor: '#A8AFB9',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'space-around',
  },
  basicTitle: {
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'center',
  },
  basicContainerText: {
    fontSize: 8,
    fontWeight: '300',
    textAlign: 'left',
  },
});

export default styles;