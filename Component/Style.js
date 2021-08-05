import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../Component/Scale';

const Style = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerView: {
        width: '100%',
        height: verticalScale(91),
        backgroundColor: '#3F53A528',
        flexDirection: 'row'
    },
    normalText: {
        alignSelf: 'center',
        fontSize: scale(26),
        color: '#172B4D',
        marginTop: scale(20),
    },
    textContainer: {
        fontSize: scale(14),
        color: '#7A869A',
        alignSelf: 'center',
        marginTop: scale(5)
    },
    textInputView: {
        width: '90%',
        height: verticalScale(46),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00AECC',
        marginTop: scale(40),
        flexDirection: 'row',
    },
    textInputView2: {
        width: '90%',
        height: verticalScale(46),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00AECC',
        marginTop: scale(10),
        flexDirection: 'row',
    },
    textInput: {
        marginLeft: scale(10),
        fontSize: scale(13),
        width:'100%'
    },
    textPassWordView: {
        width: '90%',
        height: verticalScale(46),
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#00AECC',
        marginTop: scale(20),
        flexDirection: 'row',
    },
    rowContainerView: {
        flexDirection: 'row',
        marginTop: scale(20),
        width: '90%',
        alignSelf: 'center'
    },
    checkContainer: {
        flexDirection: 'row',
    },
    remember: {
        fontSize: scale(13),
        color: '#00AECC',
        marginLeft: scale(5),
        alignSelf: 'center'
    },

    forgetPass: {
        position: 'absolute',
        right: scale(10),
        fontSize: scale(13),
        alignSelf: 'center',
        color: '#232323'
    },
    loginContainer: {
        width: scale(220),
        height: verticalScale(44),
        backgroundColor: '#00AECC',
        alignSelf: 'center',
        marginTop: scale(40),
        justifyContent: 'center',
        borderRadius: 5
    },
    loginContainer1: {
        width: scale(184),
        height: verticalScale(52),
        backgroundColor: '#2F4A92',
        alignSelf: 'center',
        marginTop: scale(50),
        justifyContent: 'center',
        borderRadius: 5
    },
    loginText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: scale(18),
    },
    accountContainer: {
        alignSelf: 'center',
        marginTop: scale(5),
        fontSize: scale(13)
    },
    selection1: {
        width: '90%',
        height: verticalScale(111),
        alignSelf: 'center',
        backgroundColor: '#7284CC',
        borderRadius: 20,
        marginTop: scale(30),
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E3E3E3',
    },
    columnContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        marginLeft: scale(10)
    },
    designText: {
        fontSize: 14,
        color: 'white',
        alignSelf: 'center'
    },
    membership: {
        color: 'white',
        fontSize: 9,
        alignSelf: 'center'
    },
    designText1: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center'
    },
    membership1: {
        color: 'white',
        fontSize: 12,
        alignSelf: 'center'
    },
    selection2: {
        width: '90%',
        height: verticalScale(90),
        alignSelf: 'center',
        backgroundColor: '#F2A32D',
        borderRadius: 20,
        marginTop: scale(30),
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E3E3E3',
    },
    textContainer1: {
        fontSize: 14,
        color: '#7A869A',
        alignSelf: 'center',
        marginTop: scale(5),
        width: scale(300),
        height: verticalScale(67)
    },
    innerContainer: {
        width: '90%',
        height: verticalScale(128),
        alignSelf: 'center',
        backgroundColor: '#7284CC',
        borderRadius: 25,
        marginTop: scale(40),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    passWordText: {
        alignSelf: 'center',
        fontSize: 30,
        color: 'black',
        marginTop: scale(20)
    },
    textContainer2: {
        fontSize: scale(14),
        color: 'gray',
        alignSelf: 'center',
        marginTop: scale(20),
        marginLeft:scale(20),
        marginRight:scale(20)
    },
    textContainer3: {
        fontSize: 15,
        color: 'gray',
        alignSelf: 'center',
        marginTop: scale(5),
        marginLeft:scale(20),
        marginRight:scale(20)
    },
    viewcontainer: {
        width: scale(197),
        height: verticalScale(55),
        alignSelf: 'center',
        backgroundColor: '#3F53A528',
        borderWidth: 1,
        marginTop: scale(30),
        borderColor: '#3F53A5',
        justifyContent: 'center',
        borderRadius: 8
    },
    home: {
        width: scale(52),
        height: verticalScale(63),
        alignSelf: 'center',
        marginLeft: scale(50)
    },
    homeText: {
        fontSize: scale(24),
        marginLeft: 30,
        marginTop: 20
    },
    welcome: {
        fontSize: scale(15),
        color: '#7D8592',
        marginTop: 2,
        marginLeft: 30
    },
    designView: {
        width: '100%',
        height: verticalScale(340),
        backgroundColor: '#3F53A5B0',
        marginTop: 10,
    },
    designText1: {
        alignSelf: 'center',
        fontSize: 25,
        color: 'white',
        marginTop: 20
    },
    memberShip: {
        fontSize: 17,
        color: 'white',
        alignSelf: 'center',
    },
    memberShip1: {
        fontSize: scale(32),
        color: 'white',
        alignSelf: 'center',
    },
    homeView: {
        flexDirection: 'row'
    },
    newsText: {
        fontSize: 40,
        marginTop: 30,
        marginLeft: 20
    },
    memText: {
        fontSize: 32,
        marginTop: 15,
        marginLeft: 20
    },
    designView1: {
        width: '100%',
        height: 150,
        backgroundColor: 'white',
        borderWidth: 5,
        borderColor: 'white',
        marginTop: scale(30),
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    imageView: {
        alignSelf: 'center',
        marginTop: scale(60),
        width: scale(105),
        height: verticalScale(105)
    },
    envlope: {
        width: scale(20),
        height: verticalScale(20),
        alignSelf: 'center',
        marginLeft: scale(10)
    },
    google:{
        width:scale(50),
        height:verticalScale(50)
    },
    right: {
        width: scale(20),
        height: verticalScale(20),
        alignSelf: 'center',
        position: 'absolute',
        right: scale(20)
    },
    objects: {
        width: scale(65),
        height: verticalScale(83),
        alignSelf: 'center',
        marginLeft: scale(30)
    },
    objectsimg: {
        width: scale(84),
        height: verticalScale(98),
        alignSelf: 'center'
    },
    objectsimgView: {
        width: scale(129),
        height: verticalScale(150),
        marginLeft: scale(20),
        marginTop: scale(30)
    },
    heart: {
        width: scale(40),
        height: verticalScale(40),
        position: 'absolute',
        top: scale(80),
        marginLeft: scale(20)
    },
    message: {
        width: scale(40),
        height: verticalScale(40),
        position: 'absolute',
        top: scale(30),
        marginLeft: scale(20)
    },
    calendar: {
        width: scale(42),
        height: verticalScale(37),
        position: 'absolute',
        top: scale(40),
        left:scale(280),
    },
    calendar1: {
        width: scale(42),
        height: verticalScale(37),
        position: 'absolute',
       top:scale(10),
       right:scale(10)
    },
    calendar2: {
        width: scale(42),
        height: verticalScale(37),
        position: 'absolute',
       top:scale(10),
      alignSelf:'center'
    },
    imageViews: {
        position: 'absolute',

    },
    imageText: {
        position: 'absolute',
        top: scale(65),
        marginLeft: scale(30),
        color: '#B2B2B6',
        fontSize: scale(12)
    },
    imageText1: {
        position: 'absolute',
        top: scale(120),
        marginLeft: scale(30),
        color: '#B2B2B6',
        fontSize: scale(12)
    },
    support: {
        fontSize: 24,
        color: 'black',
        marginTop: 20,
        marginLeft: 20
    },
    dateText: {
        fontSize: 16,
        color: '#999999',
        marginTop: 5,
        marginLeft: 20
    },
    dateText1: {
        alignSelf: 'center',
        color: '#8B8B8B'
    },
    medal:{
        width:scale(33),
        height:verticalScale(44),
        position: 'absolute',
        top: scale(40),
        left:scale(280),
    },
    newView: {
        width: scale(90),
        height: verticalScale(129),
        backgroundColor: '#EBEBEB',
        borderWidth: 6,
        borderRadius: 5,
        borderColor: '#EBEBEB',
        marginLeft: scale(20),
        marginTop: scale(20),
        justifyContent: 'center'
    },
    eventText: {
        fontSize: 14,
        fontWeight: "700",
        alignSelf: 'center',
        color: 'black'
    },
    rowContain:{
        flexDirection:'row',
        marginTop:scale(10)
    },
    calText: {
        color: 'black',
        fontSize: scale(16),
        marginLeft:scale(20)
    },
    imagemic:{
        width:scale(155),
        height:verticalScale(203),
        borderRadius:10
    },
    view2: {
        flexDirection: 'column',
        width: scale(155),
        borderRadius: 10,
        height: verticalScale(250),
        justifyContent: 'space-evenly',
        marginLeft: scale(10),
       
    },
    rowview2: {
        flexDirection: 'row',
        width: scale(155),
        borderRadius: 10,
        height: verticalScale(250),
        justifyContent: 'space-evenly',
        marginLeft: scale(10),
    },
    newview2: {
        flexDirection: 'column',
        width: scale(240),
        borderRadius: 10,
        height: verticalScale(361),
        justifyContent: 'space-evenly',
        marginLeft: scale(10),
        backgroundColor:'red'
    },
    exitview: {
        width: 80,
        height: 80,
        borderRadius: 70,
        justifyContent: 'center',
        marginTop: 30,
        alignSelf: 'flex-end',
        marginRight: 20
    },
    viewText: {
        fontSize: 17,
        position: 'absolute',
        right: 20,
        color: '#2F4A92',
        marginTop: 50,
    },
    teacherImg: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: scale(30),
        height: verticalScale(239)
    },
    rowContainer2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dateView: {
        width: '50%',
        height: 30,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 5,
        justifyContent: 'center',
        marginLeft:scale(30)
    },
    newView1: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#2F4A92B5',
        marginLeft: 20,
        marginTop: 20,
        justifyContent: 'center'
    },
    eventText1: {
        alignSelf: 'center'
    },
    rowContainer1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: scale(10),
    },
    newrowContainer1: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignSelf: 'center',
        marginTop: scale(40),
    },
    active: {
        fontSize: scale(20),
        alignSelf: 'center'
    },
    past: {
        fontSize: scale(20),
        alignSelf: 'center'
    },
    extraView: {
        width: '90%',
        height: scale(700),
        backgroundColor: '#3F53A528',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20
    },
    postText: {
        fontSize: 14,
        marginTop: 10,
        marginLeft: 20
    },
    newViewww: {
        width: '90%',
        height: scale(170),
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    newViewww1: {
        width: '90%',
        height: scale(287),
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    newViewww3: {
        width: '90%',
        height: scale(156),
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    dateText2: {
        marginTop: scale(20),
        marginLeft: 70,
        color: '#8B8B8B',
        fontSize:scale(12)
    },
    testtt: {
        fontSize: scale(14),
        alignSelf: 'center',
        marginLeft: scale(20),
        marginTop: scale(10),
        marginRight: scale(20),
        color:'#8F92A1'
    },
   
    view1: {
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
  
    commonText: {
        marginLeft: scale(10),
        width: scale(120)
    },
    commonTextview: {
        marginLeft: scale(10),
        width: scale(190)
    },
    view3: {
        flexDirection: 'row',
        marginLeft: scale(15)
    },
    colorText: {
        color: '#707070'
    },
    scrollview1: {
        marginLeft: scale(10),
        marginTop: scale(10),
        flex: 1
    },
    line:{
        width:'100%',
        height:verticalScale(1),
        marginLeft:scale(20),
        backgroundColor:'gray',
        marginTop:scale(10)
    },
    favContainer:{
        width:'95%',
        height:verticalScale(258),
        borderRadius:10,
        backgroundColor:'#3F53A528',
        alignSelf:'center',
        marginTop:scale(20)
    },
    rightContainer:{
        position:'absolute',
        right:scale(10),
        flexDirection:'row',
        marginTop:scale(10),
        justifyContent:'space-between'
    },
    viewtype:{
        fontSize:scale(14),
        color:'#2F4A92',
        alignSelf:'center'       
    },
    containerView:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:scale(60)
    },
    comText:{
        fontSize:scale(12)
    },
    timeText:{
        fontSize:scale(8),
        color:'gray'
    },
    rowView:{
        flexDirection:'row',
        marginTop:scale(90)
    },
    commonImg:{
        width:scale(28),
        height:verticalScale(28),
        marginLeft:scale(5)
    },
    commonImg1:{
        width:scale(22),
        height:verticalScale(20),
        position:'absolute',
        right:scale(20)
    },
    newInput:{
        borderWidth:1,
        marginLeft:scale(5),
        borderColor:'#D8E0F0',
        borderRadius:10,
        width:scale(130)
    },
    newInput1:{
        borderWidth:1,
        marginLeft:scale(25),
        borderColor:'#D8E0F0',
        borderRadius:10,
        width:scale(200)
    },
    sendButton:{
        width:scale(40),
        height:verticalScale(29),
        backgroundColor:'#2F4A92',
        justifyContent:'center',
        borderRadius:10,
        marginLeft:scale(5)
    },
    time:{
        marginLeft:scale(60),
        color:'#8F92A1',
        fontSize:scale(12)
    },
    imagetheme:{
        marginLeft:scale(20),
        marginTop:scale(10)
    },
    comimagetheme:{
        marginLeft:scale(3),
        marginTop:scale(10),
        width:scale(47),
        height:verticalScale(49)
    },
    outerView:{
        width:'90%',
        height:verticalScale(390),
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderColor:'#EBEBEB',
        alignSelf:'center',
        borderRadius:10
    },
    sendImg:{
        width:scale(24),
        height:verticalScale(24),
        alignSelf:'center'
    }
})

export default Style;