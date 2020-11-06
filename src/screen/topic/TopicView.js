<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { AntDesign, Feather, Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Header from './header';
import styles from './styles';
import AvatarUser from '../../assets/AvatarUser.png';
import { 
  getTopic, 
  updateTopic, 
  createComment, 
  likeTopic, 
  dislikeTopic,
  likeComment,
  dislikeComment,
  getUserLogado, 
} from '../../services/backEnd';
import Comments from './comment/comment';

export default function TopicView({ navigation }) {
  const topicID = navigation.getParam('itemID', '5fc8fd6d2911e1001c6210e0');
  const [user, setUser] = useState({});
  const [topic, setTopic] = useState({});
  const [isNewComment, setIsNewComment] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [commentText, setCommentText] = useState('');
  const [topicisLiked, setTopicIsLiked] = useState(false);
  const [topicisNotLiked, setTopicIsNotLiked] = useState(false);
  const [commentisLiked, setcommentIsLiked] = useState(false);
  const [isDeletd, setIsDeletd] = useState(false);
  useEffect(() => {
    getUserLogado()
      .then(res => setUser(res));

    getTopic(topicID)
      .then((res) => setTopic(res))
      .then(() => {
        if (topic?.title == 'Topico Deletado') {
          setIsDeletd(true);
        }
      })
      .then(() =>{
        if (topic?.user?._id == user?._id) {
         setIsEditable(true);
        }
      });
  }, []);
  const putTopic = async () => {
    const topicBody = {
      title: topic.title,
      description: topic.description,
    };
    updateTopic(topic?._id, topicBody).then(() => setIsEditing(false));
  };
  const deleteTopic = async () => {
    const topicBody = {
      title: 'Topico Deletado',
      description: 'Topico Deletado',
    };
    updateTopic(topic?._id, topicBody)
      .then((data) => setTopic(data))
      .then(() => setIsDeletd(true))
      .catch((error) => console.error(error));
  };
  const postComment = async () => {
    const commentBody = {
      text: commentText,
    };
    createComment(topic._id, commentBody)
      .then((res) => setTopic(res))
      .then(() => setIsNewComment(true));
  };

  const like = async (type, id = null) => {
    const options = {
      topic: () => {
          likeTopic(topic?._id).then(res => {
          const { likes } = res;
          setTopic({ ...topic,likes})
          setTopicIsLiked(true);
          setTopicIsNotLiked(false);
        });
      },
      comment: () => {
        likeComment(id).then(res => {
          const { comments } = res;
          setTopic({ ...topic,comments})
         
        });
      },
    };
    if (options[type]) options[type]();
  };

  const deslike = async (type, id = null) => {
    const options = {
      topic: () => {
          dislikeTopic(topic?._id).then(res => {
          const { likes } = res;
          setTopic({ ...topic,likes})
          setTopicIsLiked(false);
          setTopicIsNotLiked(true);
        });
      },
      comment: () => {
        dislikeComment(id).then(res => {
          const { comments } = res;
          setTopic({ ...topic,comments})
         
        });
      },
    };
    if (options[type]) options[type]();
  };
  
  return (
    <KeyboardAvoidingView style={styles.containerMaster}>
      <Header
        title={topic?.plant?.scientificName}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.UserDiv}>
          <Image
            style={styles.imgUser}
            source={{ uri: topic?.user?.profile_picture }}
            defaultSource={AvatarUser}
          />
          <View>
            <Text style={styles.nameUser}>{topic?.user?.username}</Text>
            <Text style={styles.dataTopic}>{topic?.createdAt}</Text>
          </View>
        </View>
        <View style={styles.topicDiv}>
          {isEditing ? (
            <>
              <View style={{ marginTop: 10 }}>
                <TextInput
                  style={styles.topicDivTitle}
                  defaultValue={topic?.title}
                  onChangeText={(title) => setTopic({ ...topic, title })}
                />
              </View>
              <TextInput
                blurOnSubmit
                multiline
                style={styles.topicDescriptionInput}
                defaultValue={topic?.description}
                onChangeText={(description) =>
                  setTopic({ ...topic, description })
                }
              />
              {!isDeletd && (
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={() => putTopic()}
                >
                  <Text style={styles.saveButtonText}>salvar</Text>
                </TouchableOpacity>
              )}
            </>
          ) : (
            <>
              <View style={{ marginTop: 10 }}>
                <Text style={styles.topicDivTitle}>{topic?.title}</Text>
              </View>
              <ScrollView style={styles.scrollViewDescription}>
                <Text style={styles.topicDivDescription}>
                  {topic?.description}
                </Text>
                {!!topic?.profile_picture && (
                  <Image
                    style={styles.imgDescription}
                    source={{ uri: topic?.profile_picture }}
                  />
                )}
              </ScrollView>
              {!!isEditable && (
              <Feather
                style={styles.deleteButton}
                onPress={() => deleteTopic()}
                name="trash-2"
                size={24}
                color="black"
              />
              )}
            </>
          )}
          <View style={styles.topicContainer}>
            <View style={styles.topicDivLikes}>
              <AntDesign
                name={'arrowup'}
                size={18}
                color={topicisLiked ?'red':'black'}
                onPress={() =>like('topic', topicID)}
              />
              <Text>{topic?.likes?.length}</Text>
              <AntDesign
                name={'arrowdown'}
                size={18}
                color={topicisNotLiked ?'red':'black'}
                onPress={() => deslike('topic', topicID)}
              />
            </View>
            {!!isEditable && (
              <View style={styles.commentIcon}>
                <Feather
                  name="edit"
                  size={18}
                  color="black"
                  onPress={() => !isDeletd && setIsEditing(!isEditing)}
                />
              </View>
            )}
            <View style={styles.shareIcon}>
              <Feather name="corner-up-right" size={15} color="black" />
              <Text style={{ fontSize: 10 }}>Compartilhar</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.commentsBarDiv}
        onPress={() => setIsNewComment(!isNewComment)}
      >
        <View style={styles.commentsBar}>
          <Text style={styles.commentsBarText}>Novo Comentário</Text>
          <Entypo
            style={styles.commentsBarIcon}
            name={isNewComment ? 'triangle-right' : 'triangle-down'}
            size={15}
            color="black"
          />
        </View>
      </TouchableOpacity>
      <View style={styles.commentsListDiv}>
        <View style={styles.commentsList}>
          {isNewComment ? (
            <Comments topic={topic} setTopic={setTopic} user={user} like={like} deslike={deslike} topicisLiked={topicisLiked}/>
          ) : (
            <View style={styles.commentContent}>
              <TextInput
                blurOnSubmit
                multiline
                style={styles.commentDescriptionInput}
                placeholder="Escreva um comentário ..."
                onChangeText={(val) => setCommentText(val)}
              />
              <TouchableOpacity
                style={styles.saveButton}
                onPress={() => postComment()}
              >
                <Text style={styles.saveButtonText}>salvar</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
=======
import React ,{useState, useEffect}from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome, Feather, Entypo } from '@expo/vector-icons';
import Header from './header'
import { TextInput } from 'react-native-gesture-handler';
const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

export default function TopicView(){

    const enderecoIpv4 = '192.168.0.40'; //inserir o endereço o ip do localhost
    const porta = '3000'; // inserir a porta em que o backend esta rodando
    const topicID = '5fa473db6ad7aa001cb7654a'; //inserir o id da planta  ser exibido
    const [topic, setTopic] = useState({})
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');   
    const [isNewComment, setIsNewComment] = useState(true);
    const [newComment, setNewComment] = useState({});
    const [isEditing, setIsEditing] = useState(true);
    
    useEffect(() => {
        fetch('http://192.168.0.40:3000/topic/find/5fa473db6ad7aa001cb7654a')
          .then((response) => response.json())
          .then((json) => setTopic(json.topic))
          .catch((error) => console.error(error))
      }, []);
    const putTopic = async() => {
      const requestOptions = {
          method:'PUT',
          headers: {
              'Content-Type':'application/json'
          },
          body:JSON.stringify({
              title:topic.title,
              description:topic.description
              })
          };
          fetch(`http://${enderecoIpv4}:${porta}/topic/update/${topic._id}`,requestOptions)
              .then(response => response.json())
              .catch((error) => console.error(error))         
    }
    const postComment = async() => {
        const requestOptions = {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                title:topic.title,
                description:topic.description
                })
            };
            fetch(`http://${enderecoIpv4}:${porta}/topic/update/${topic._id}`,requestOptions)
                .then(response => response.json())
                .catch((error) => console.error(error))
           
      }
    const likeTopic = async() => {
        const requestOptions = {
            method:'POST',
            };
            fetch(`http://${enderecoIpv4}:${porta}/topic/like/${topicID}`,requestOptions)
                .then(response => response.json())
                .then(data => setTopic(data))

      }
      const deslikeTopic = async() => {
        const requestOptions = {
            method:'POST',
            };
            fetch(`http://${enderecoIpv4}:${porta}/topic/dislike/${topicID}`,requestOptions)
                .then(response => response.json())
                .then(data => setTopic(data))   
      }
      


      function Topics({description, username}){
        return(
            <View style={styles.commentItemDiv}>
                <Image
                    style={styles.imgUserComment}
                    defaultSource={require('../../assents/AvatarUser.png')}
                    />
                <ScrollView>
                    <Text style={styles.commentDescription}>{username}</Text>
                    <Text style={styles.commentDescription}>{description}</Text>
                    <Text style={styles.commentData}>2 horas atrás</Text>
                </ScrollView>
            </View>
        )
    }    
      return(
          <View style={styles.containerMaster}>
                <Header />
                <View style={styles.container}>
                    <View style={styles.UserDiv}>
                        <Image
                            style={styles.imgUser}
                            source={{uri: topic?.user?.profile_picture}}
                            defaultSource={require('../../assents/AvatarUser.png')}
                        />
                        <View>
                            <Text style={styles.nameUser}>{topic?.user?.username}</Text>
                            <Text style={styles.dataTopic}>{topic?.createdAt}</Text>     
                        </View>
                    </View>
                    <View style={styles.topicDiv}>
                        {
                        !isEditing?
                            <>
                                <View style={{marginTop:10}}>
                                    <Text style={styles.topicDivTitle}>{topic?.title}</Text>
                                    </View>
                                <ScrollView style={styles.scrollViewDescription}>
                                    <Text style={styles.topicDivDescription}>{topic?.description}</Text>
                                    {!!topic.profile_picture && 
                                        <Image
                                            style={styles.imgDescription}
                                            source={{uri: topic.profile_picture}}
                                        />
                                    }   
                                </ScrollView>
                            </>:
                            <>
                            <View style={{marginTop:10}}>
                                <TextInput style={styles.topicDivTitle} defaultValue={topic?.title} onChangeText={(title) => setTopic({...topic,title})}></TextInput>
                                </View>
                                <TextInput multiline style={styles.topicDescriptionInput} defaultValue={topic?.description} onChangeText={(description) => setTopic({...topic,description})}></TextInput>
                                <TouchableOpacity style={styles.saveButton} onPress={() => putTopic()}><Text style={styles.saveButtonText}>salvar</Text></TouchableOpacity>
                        </>
                        }
                        <View style={styles.topicContainer} >
                            <View style={styles.topicDivLikes}>
                                <AntDesign name="arrowup" size={18} color="black" onPress={() => likeTopic() }/>
                                    <Text>{topic.likes - topic.dislikes}</Text>
                                <AntDesign name="arrowdown" size={18} color="black" onPress={() => deslikeTopic() }/>
                            </View>
                            <View style={styles.commentIcon}>
                                <FontAwesome name="comment-o" size={15} color="black" onPress={() => setIsEditing(!isEditing) }/>
                            </View>
                            <View style={styles.shareIcon}>
                                <Feather name="corner-up-right" size={15} color="black" />
                                <Text style={{fontSize:10}}>Compartilhar</Text>
                            </View>    

                        </View>  
                    </View>
                </View>
                    <TouchableOpacity style={styles.commentsBarDiv} onPress={() => setIsNewComment(!isNewComment)}>
                        <View style={styles.commentsBar}>
                            <Text style={styles.commentsBarText}>Novo Comentário</Text>
                            <Entypo style={styles.commentsBarIcon} name={isNewComment?"triangle-right":"triangle-down"} size={15} color="black" />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.commentsListDiv}>
                        <View style={styles.commentsList}>
                        {
                            isNewComment?
                            <FlatList
                                data={topic.comments}
                                keyExtractor={item => item._id}
                                renderItem={({item}) => <Topics  username={item.user.username} description={item.text}/> }
                            />
                            :
                            <View style={styles.commentContent}>
                                <TextInput multiline style={styles.commentDescriptionInput} defaultValue={topic?.description} onChangeText={(description) => setTopic({...topic,description})}></TextInput>
                                <TouchableOpacity style={styles.saveButton} onPress={() => putTopic()}><Text style={styles.saveButtonText}>salvar</Text></TouchableOpacity>
                            </View>
                        }
                        </View>
                    </View>
                
        </View>        
      );
  };
const styles = StyleSheet.create({
    UserDiv: {
        flexDirection: 'row',
        flex:0.6,
        marginTop:altura/50
        
    },
    imgUser : {
        width:largura/5,
        height:largura/5,
        borderRadius:50,
    },
    nameUser : {
        fontSize:18,
        fontWeight:'400',
        paddingTop:5,
        paddingLeft:10
        
    },
    dataTopic : {
        fontSize:12,
        fontWeight: '200',
        paddingLeft:10,
        paddingTop:0
    },
    topicDiv:{
        flexDirection: 'column',
        alignContent:'space-between',
        flex:1.4,        
        
    },
    topicDivTitle:{
        fontSize:18,
        fontWeight:'600'
    },
    scrollViewDescription:{
        maxHeight:altura/4.4,
    },
    imgDescription:{
        alignSelf:"center",
        width:largura/1.2,
        height:largura/1.2,
        margin:10
    },
    topicDescriptionInput:{
        flex:1
    },
    saveButton:{
        backgroundColor:'#D8A3E0',
        alignSelf:'flex-end',
        justifyContent:'center',
        margin:10,
        height:largura/12,
        width:largura/4,
        borderRadius:10
    },
    saveButtonText:{
        fontSize:16,
        color:'black',
        textAlign:'center',
        textAlignVertical:"center",
        
    },

    topicDivDescription:{
        fontSize:12,
        fontWeight:'400',
        paddingTop:20
    },
    topicContainer:{
        flexDirection: 'row',
        flex:6,
        backgroundColor:'#D6DADF',
        maxHeight:altura/20,
        borderRadius:8,
        alignItems:'center',
        justifyContent: 'space-between',
        
    },
    topicDivLikes:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingLeft:10
        
    },
    shareIcon : {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'flex-end',
        paddingHorizontal:10,
        
    },
    commentsBarDiv:{
        flex:1,
        marginTop:20,
        backgroundColor:'white'
    },
    commentsListDiv:{
        flex:5,
        backgroundColor:'#D8A3E0',
        justifyContent: 'center',
        flexWrap:'nowrap',
    },
    commentsBar:{
        flex:5,
        backgroundColor:'#D8A3E0',
        alignContent:'flex-start',
        flexDirection:"row",
    },
    commentsBarText:{
        fontSize:16,
        fontWeight:'500',
        alignSelf:'flex-start',
        paddingLeft:largura/10,
        paddingTop:12        
    },
    commentsBarIcon:{
        alignSelf:'center',
        justifyContent:'center',
        paddingLeft:5 
    },
    commentsList:{
        flex:1,
        backgroundColor:'#D6DADF'
    },
    commentItemDiv:{
        backgroundColor:'white',
        flexDirection:'row',
        alignSelf:'center',
        width:largura/1.1,
        height:altura/8,
        marginVertical:5,
        borderRadius:5,
        paddingTop:10,
        paddingLeft:10
    },
    imgUserComment:{
        marginLeft:10,
        width:largura/8,
        height:largura/8,
        borderRadius:50,
    },
    commentUsername:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        paddingLeft:10
    },
    commentData:{
        fontSize:7,
        fontWeight:'200',
        paddingTop:5,
        paddingLeft:10
    },
    commentDescription:{
        fontSize:9,
        fontWeight:'300',
        paddingTop:5,
        paddingLeft:10
    },
    container: {
        flex:7,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        width: largura/1.2,
        height:altura,
        alignSelf:'center'
        
    },
    containerMaster:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        width:largura,
        height:altura,
    },
    commentContent:{
        flexDirection:'column',
        alignContent:'center',
        alignContent:'center',
        alignSelf:'center',
        padding:15
    },
    commentDescriptionInput:{
        backgroundColor:'white',
        height:altura/5,
        width:largura/1.2,
        alignSelf:'center',
        borderRadius:5,
        padding:10,

    }
}) 
>>>>>>> 470bf07 (adding topic view)
