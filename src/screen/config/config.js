import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

import styles from './styles';
import DeleteMyAccount from '../login/deleteMyAccount';
import Logout from '../login/logout';
import Header from './header';
import { gray, green, highlight } from '../../theme/colorPalette';

export default function Config({ navigation }) {
  const [commentIsEnabled, setCommentIsEnabled] = useState(false);
  const [topicIsEnabled, setTopicIsEnabled] = useState(false);
  const [likeIsEnabled, setLikeIsEnabled] = useState(false);
  const commentToggleSwitch = () =>
    setCommentIsEnabled((previousState) => !previousState);
  const topicToggleSwitch = () =>
    setTopicIsEnabled((previousState) => !previousState);
  const likeToggleSwitch = () =>
    setLikeIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.containerView}>
      <Header navigation={navigation} />
      <View style={styles.notificationContainer}>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Notificação de novo comentário
          </Text>
          <Switch
            trackColor={{
              false: gray.rollingStone(),
              true: highlight.lochmara(),
            }}
            thumbColor={
              commentIsEnabled ? highlight.lightningYellow() : green.whiteIce()
            }
            ios_backgroundcolor={gray.outerSpace()}
            onValueChange={commentToggleSwitch}
            value={commentIsEnabled}
          />
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Notificação de novo tópico
          </Text>
          <Switch
            trackColor={{
              false: gray.rollingStone(),
              true: highlight.lochmara(),
            }}
            thumbColor={
              topicIsEnabled ? highlight.lightningYellow() : green.whiteIce()
            }
            ios_backgroundcolor={gray.outerSpace()}
            onValueChange={topicToggleSwitch}
            value={topicIsEnabled}
          />
        </View>
        <View style={styles.notification}>
          <Text style={styles.notificationText}>
            Notificação de likes e dislikes
          </Text>
          <Switch
            trackColor={{
              false: gray.rollingStone(),
              true: highlight.lochmara(),
            }}
            thumbColor={
              likeIsEnabled ? highlight.lightningYellow() : green.whiteIce()
            }
            ios_backgroundcolor={gray.outerSpace()}
            onValueChange={likeToggleSwitch}
            value={likeIsEnabled}
          />
        </View>
        <View style={[styles.notification, { marginTop: '10%' }]}>
          <Logout navigation={navigation} />
          <DeleteMyAccount navigation={navigation} />
        </View>
      </View>
    </View>
  );
}
