import {StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    TopicCreateheader: {
        backgroundColor:'black',
        flexDirection: 'row',
        width:largura,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10,
        flex:0.8,
        marginBottom:10,   
    },
    TopicCreatepublicarDiv:{
        flexDirection:"row-reverse",
        alignSelf:'center',
        flex:1
    },
    TopicCreatepublicarText:{
        marginTop:2.5,
        marginRight:20,
        color:'white',
        fontSize:15,
        fontWeight: '100',
    },
    TopicCreatebackButton:{
        padding:10
    },
    TopicCreateUserDiv: {
        flexDirection: 'row',
        flex:1,
        marginBottom:30,   
    },
    TopicCreateimgUser : {
        width:largura/5,
        height:largura/5,
        borderRadius:50,
        
        
    },
    TopicCreatenameUser : {
        fontSize:18,
        fontWeight:'bold',
        paddingTop:10,
        paddingLeft:5
        
    },
    TopicCreatetopicComment: {
        backgroundColor: '#D6DADF',
        borderRadius: 10,
        height: altura/2.1,
        textAlignVertical:'top',
        paddingLeft:20,
        paddingTop:10
    },
    TopicCreatetituloTopic: {
        backgroundColor: '#D6DADF',
        borderRadius: 10,
        height: altura/15,
        paddingLeft:20,
    },
    TopicCreatetituloDiv: {
        backgroundColor: 'skyblue',
        marginBottom:altura/20,
        borderRadius: 10
    },
    TopicCreatecontainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        flex:8,
        width: largura/1.2,
        alignSelf:'center'
        
    },
    TopicCreatemasterView: {
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap:'nowrap' ,
        flex:1,
        width: largura,
        alignSelf:'center'
        
    },
    TopicCreatescrollView: {
        height:altura/16,
        marginLeft:10
    },
    TopicCreatescrollDiv: {
        backgroundColor:'#19BB53',
        borderRadius:10,
        marginTop:20,
        marginBottom:40,
        width:largura
    },
    TopicCreateicon2:{
        marginLeft:5,
    },
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
    deleteButton:{
        alignSelf:'flex-end',
        justifyContent:'center',
        margin:10,
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
    commentIcon:{
        flexDirection:'row',
    },
    commentItemDiv:{
        backgroundColor:'white',
        flexDirection:'column',
        alignSelf:'center',
        width:largura/1.1,
        height:altura/7,
        marginVertical:5,
        borderRadius:5,
        paddingTop:10,
        paddingLeft:10
    },
    commentUser:{
        flexDirection:'row', 
    },
    commentContainer:{
        flexDirection: 'row',
        alignSelf:'flex-end',   
        flex:4,
        backgroundColor:'white',
        maxHeight:altura/30,
        borderRadius:8,
        alignItems:'center',
        justifyContent: 'space-between',
        width:largura/1.8
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
        fontSize:10,
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
export default styles;