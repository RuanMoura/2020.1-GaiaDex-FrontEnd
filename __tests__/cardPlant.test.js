import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

import PlantCard from '../src/screen/cardPlant/cardPlant';
import styles from '../src/screen/cardPlant/styles';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

const wrapper = mount(<PlantCard navigation={{ getParam: jest.fn() }} />);

describe('<TopicCreate />', () => {
  it('renders everything', () => {
    expect(wrapper).toMatchSnapshot;
    expect(wrapper.find('View').length).toBe(40);
    expect(wrapper.find('Header').length).toBe(1);
    expect(wrapper.find('ImageBackground').length).toBe(1);
    expect(wrapper.find('Text').length).toBe(36);
    expect(wrapper.find('TouchableOpacity').length).toBe(2);
    expect(wrapper.find('PlantCardTopic').length).toBe(1);
    expect(wrapper.find('NewTopic').length).toBe(1);
  });
  it('renders View correctly', () => {
    expect(wrapper.find('View').at(0)).toHaveStyle(styles.containerView);
    expect(wrapper.find('View').at(6)).toHaveStyle(styles.containerPlant);
    expect(wrapper.find('View').at(10)).toHaveStyle(styles.plantInfo);
    expect(wrapper.find('View').at(12)).toHaveStyle(styles.plantInfoStats);
    expect(wrapper.find('View').at(14)).toHaveStyle(styles.plantInfoDiv);
    expect(wrapper.find('View').at(16)).toHaveStyle(styles.plantInfoDiv);
    expect(wrapper.find('View').at(18)).toHaveStyle(styles.plantText);
    expect(wrapper.find('View').at(20)).toHaveStyle(styles.menuBar);
  });
  it('renders Header correctly', () => {
    expect(wrapper.find('Header').at(0)).toHaveProp('navigation');
  });
  it('renders Text correctly', () => {
    expect(wrapper.find('Text').at(8)).toHaveStyle(styles.plantInfoTitle);
    expect(wrapper.find('Text').at(12)).toHaveStyle(styles.plantInfoText);
    expect(wrapper.find('Text').at(16)).toHaveStyle(styles.plantInfoText);
    expect(wrapper.find('Text').at(20)).toHaveStyle(
      styles.plantTextDescription
    );
    expect(wrapper.find('Text').at(22)).toHaveStyle(styles.menuBarTabText);
  });
  it('renders TouchableOpacity correctly', () => {
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveStyle(
      styles.menuBarTab
    );
    expect(wrapper.find('TouchableOpacity').at(0)).toHaveProp('onPress');
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveStyle(
      styles.menuBarTab
    );
    expect(wrapper.find('TouchableOpacity').at(1)).toHaveProp('onPress');
  });
  it('renders PlantCardTopic correctly', () => {
    expect(wrapper.find('PlantCardTopic').at(0)).toHaveProp('navigation');
    expect(wrapper.find('PlantCardTopic').at(0)).toHaveProp('plantID');
  });
});
