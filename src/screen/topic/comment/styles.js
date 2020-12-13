import { StyleSheet, Dimensions } from 'react-native';

const largura = Dimensions.get('screen').width;
const altura = Dimensions.get('screen').height;
const styles = StyleSheet.create({
  topicDivLikes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  shareIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  commentsBarDiv: {
    flex: 1,
    marginTop: 20,
    backgroundColor: 'white',
  },
  commentsListDiv: {
    flex: 5,
    backgroundColor: '#D8A3E0',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  commentsBar: {
    flex: 5,
    backgroundColor: '#D8A3E0',
    alignContent: 'flex-start',
    flexDirection: 'row',
  },
  commentsBarText: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-start',
    paddingLeft: largura / 10,
    paddingTop: 12,
  },
  commentsBarIcon: {
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  commentsList: {
    flex: 1,
    backgroundColor: '#D6DADF',
  },
  commentIcon: {
    flexDirection: 'row',
  },
  commentItemDiv: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignSelf: 'center',
    width: largura / 1.1,
    height: altura / 7,
    marginVertical: 5,
    borderRadius: 5,
    paddingTop: 10,
    paddingLeft: 10,
  },
  commentUser: {
    flexDirection: 'row',
  },
  commentContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    flex: 4,
    backgroundColor: 'white',
    maxHeight: altura / 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: largura / 1.8,
  },
  imgUserComment: {
    marginLeft: 10,
    width: largura / 8,
    height: largura / 8,
    borderRadius: 50,
  },
  commentUsername: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingLeft: 10,
  },
  commentData: {
    fontSize: 7,
    fontWeight: '200',
    paddingTop: 5,
    paddingLeft: 10,
  },
  commentDescription: {
    fontSize: 10,
    fontWeight: '300',
    paddingTop: 5,
    paddingLeft: 10,
  },
});
export default styles;