import React from 'react';

import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Style from './Style';
import { scale, verticalScale, moderateScale } from '../Component/Scale';
// import Modal from 'react-native-modal';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view_count: 0,
            count: 0
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={Style.container}>
                    <View style={Style.innerView}>
                        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: 30 }} onPress={() => this.props.navigation.openDrawer()}>
                            <Image source={require('../images/homeicon.png')} style={{ width: 30, height: 30, }} resizeMode='contain' />
                        </TouchableOpacity>
                        <Image source={require('../images/search.png')} style={{ width: 30, height: 30, alignSelf: 'center', marginLeft: 30 }} resizeMode='contain' />
                        <Image source={require('../images/OBJECTS.png')} style={Style.home} resizeMode='contain' />
                        <Image source={require('../images/noti.png')} style={{ width: 30, height: 33, alignSelf: 'center', position: 'absolute', right: 80 }} resizeMode='contain' />
                        <Image source={require('../images/profile.png')} style={{ width: 56, height: 56, alignSelf: 'center', position: 'absolute', right: 20 }} resizeMode='contain' />
                    </View>
                    <Text style={Style.homeText}>HOME</Text>
                    <Text style={Style.welcome}>Welcome back, Edward!</Text>
                    <View style={Style.designView}>
                        <View style={Style.homeView}>
                            <Image source={require('../images/OBJECTS.png')} style={Style.objectsimgView} resizeMode='contain' />
                            <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                                <Text style={Style.designText1}>Design Company</Text>
                                <Text style={Style.memberShip}>your membership</Text>
                            </View>

                        </View>

                        <View style={Style.viewcontainer}>
                            <Text style={Style.memberShip1}>Explore</Text>
                        </View>
                    </View>
                    <View style={Style.homeView}>
                        <Text style={Style.newsText}>News</Text>
                        <Text style={Style.viewText}>View all</Text>
                    </View>
                    <Text style={Style.support}>Future of customer support</Text>
                    <Text style={Style.dateText}>20 august 2019</Text>
                    <Text style={Style.support}>Digital trends in next 2020</Text>
                    <Text style={Style.dateText}>18 august 2019</Text>
                    <Text style={Style.support}>New iPhone leaked</Text>
                    <Text style={Style.dateText}>15 august 2019</Text>
                    <Text style={Style.support}>iPhone has a new feature</Text>
                    <Text style={Style.dateText}>14 august 2019</Text>

                    <View>
                        <Image source={require('../images/Image.png')} style={Style.teacherImg} />

                        <View style={Style.imageViews}>
                            <Image source={require('../images/msg.png')} style={Style.message} />
                            <Text style={Style.imageText}>23</Text>
                            <Image source={require('../images/heart.png')} style={Style.heart} />
                            <Text style={Style.imageText1}>642</Text>
                            <Image source={require('../images/calendar.png')} style={Style.calendar} />
                        </View>
                    </View>


                    <Text style={Style.support}>Business meeting</Text>
                    <Text style={Style.dateText}>13 august 2019</Text>

                    <View>
                        <Image source={require('../images/Image.png')} style={Style.teacherImg} />

                        <View style={Style.imageViews}>
                            <Image source={require('../images/msg.png')} style={Style.message} />
                            <Text style={Style.imageText}>23</Text>
                            <Image source={require('../images/heart.png')} style={Style.heart} />
                            <Text style={Style.imageText1}>642</Text>
                            <Image source={require('../images/medal.png')} style={Style.medal} />
                        </View>
                    </View>

                    <Text style={Style.homeText}>Never giving up</Text>
                    <Text style={Style.dateText}>11 august 2019</Text>

                    <View style={Style.rowContainer}>
                        <View style={Style.newView}>
                            <Image source={require('../images/event.png')} style={{ width: 44, height: 44, alignSelf: 'center' }} />
                            <Text style={Style.eventText}>Events</Text>
                        </View>
                        <View style={Style.newView}>
                            <Image source={require('../images/social.png')} style={{ width: 44, height: 44, alignSelf: 'center', }} />
                            <Text style={Style.eventText}>Social Wall</Text>
                        </View>
                        <View style={Style.newView}>
                            <Image source={require('../images/library.png')} style={{ width: 40, height: 40, alignSelf: 'center', }} />
                            <Text style={Style.eventText}>Library</Text>
                        </View>
                    </View>

                    <View style={Style.rowContainer2}>
                        <View style={Style.newView}>
                            <Image source={require('../images/challange.png')} style={{ width: 40, height: 40, alignSelf: 'center', }} />
                            <Text style={Style.eventText}>Challenges</Text>
                        </View>
                        <View style={Style.newView}>
                            <Image source={require('../images/course.png')} style={{ width: 40, height: 40, alignSelf: 'center', }} />
                            <Text style={Style.eventText}>Coursed</Text>
                        </View>
                        <View style={Style.newView}>
                            <Image source={require('../images/media.png')} style={{ width: 40, height: 40, alignSelf: 'center', }} />
                            <Text style={Style.eventText}>Multimedia</Text>
                        </View>
                    </View>
                    <Text style={Style.newsText}>Latest on Design Company</Text>
                    <Text style={Style.memText}>Your membership</Text>
                    <View style={Style.line} />
                    <View style={Style.newrowContainer1}>
                        <TouchableOpacity onPress={() => this.setState({ count: 0 })} style={[Style.activeView, { borderBottomWidth: this.state.count === 0 ? 3 : null }]}>
                            <Text style={[Style.active, { color: this.state.count === 0 ? '#2F4A92' : 'gray' }]}>Your {'\n'}Favourites</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ count: 1 })} style={[Style.activeView, { borderBottomWidth: this.state.count === 1 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.count === 1 ? 'black' : 'gray' }]}>Suggested {'\n'}Events</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ count: 2 })} style={[Style.activeView, { borderBottomWidth: this.state.count === 2 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.count === 2 ? 'black' : 'gray' }]}>Latest {'\n'}Content</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={Style.favContainer}>
                        <View style={Style.rightContainer}>
                            <Text style={Style.viewtype}>View all</Text>
                            <Image source={require('../images/Path.png')} style={{ width: 15, height: 15, alignSelf: 'center', marginLeft: scale(10) }} resizeMode='contain' />
                        </View>
                        <View style={Style.containerView}>
                            <View>
                                <Image source={require('../images/Imagefav.png')} resizeMode='contain' />
                                <Image source={require('../images/calendar.png')} style={Style.calendar2} />

                                <Text style={Style.comText}>Why choose a {'\n'}theme that looks {'\n'}good with...</Text>
                                <Text style={Style.timeText}>Sep 17, 2020 - 9:20AM</Text>
                            </View>

                            <View>
                                <Image source={require('../images/Image.png')} resizeMode='contain' />
                                <Image source={require('../images/videocam.png')} style={Style.calendar2} />

                                <Text style={Style.comText}>How to choose{'\n'} color</Text>
                                <Text style={Style.timeText}>Sep 17, 2020 - 10:35 min</Text>
                            </View>

                            <View>
                                <Image source={require('../images/Imagetheme.png')} resizeMode='contain' />
                                <Image source={require('../images/document.png')} style={Style.calendar2} resizeMode='contain' />

                                <Text style={Style.comText}>Choose a theme</Text>
                                <Text style={Style.timeText}>Sep 17, 2020 - 3 min read</Text>
                            </View>

                        </View>
                    </View>

                    <View style={Style.designView1}>
                        <View style={Style.rowContain}>
                            <Text style={Style.calText}>Calender</Text>
                            <View style={Style.dateView}>
                                <Text style={Style.dateText1}>2 Sep, 20 - 7 Sep, 20</Text>
                            </View>
                            <Image source={require('../images/cal.png')} style={{ width: 40, height: 40, alignSelf: 'center', position: 'absolute', right: 20 }} />
                        </View>
                        <View style={Style.homeView}>
                            <View style={Style.newView1}>
                                <Text style={Style.eventText1}>2</Text>
                                <Text style={Style.eventText1}>Mon</Text>
                            </View>
                            <View style={Style.newView1}>
                                <Text style={Style.eventText1}>3</Text>
                                <Text style={Style.eventText1}>Tue</Text>
                            </View>
                            <View style={Style.newView1}>
                                <Text style={Style.eventText1}>3</Text>
                                <Text style={Style.eventText1}>Wed</Text>
                            </View>
                            <View style={Style.newView1}>
                                <Text style={Style.eventText1}>4</Text>
                                <Text style={Style.eventText1}>Thu</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={Style.homeText}>Suggested</Text>

                    <View style={Style.rowContainer1}>
                        <TouchableOpacity onPress={() => this.setState({ view_count: 1 })} style={[Style.activeView, { borderBottomWidth: this.state.view_count === 1 ? 3 : null }]}>
                            <Text style={[Style.active, { color: this.state.view_count === 1 ? 'black' : 'gray' }]}>All</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ view_count: 0 })} style={[Style.activeView, { borderBottomWidth: this.state.view_count === 0 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.view_count === 0 ? 'black' : 'gray' }]}>Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ view_count: 2 })} style={[Style.activeView, { borderBottomWidth: this.state.view_count === 2 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.view_count === 2 ? 'black' : 'gray' }]}>Videos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ view_count: 3 })} style={[Style.activeView, { borderBottomWidth: this.state.view_count === 3 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.view_count === 3 ? 'black' : 'gray' }]}>Photos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ view_count: 4 })} style={[Style.activeView, { borderBottomWidth: this.state.view_count === 4 ? 3 : null }]}>
                            <Text style={[Style.past, { color: this.state.view_count === 4 ? 'black' : 'gray' }]}>Courses</Text>
                        </TouchableOpacity>
                    </View>

                    {this.state.view_count == 0 &&
                        <View style={Style.extraView}>
                            <Text style={Style.postText}>POST NOW</Text>
                            <View style={Style.newViewww}>
                                <Image source={require('../images/profile.png')} style={{ width: 40, height: 40, alignSelf: 'center', position: 'absolute', left: 10, top: 10 }} resizeMode='contain' />
                                <Text style={Style.dateText2}>What are you thinking?</Text>
                                <View style={Style.rowView}>
                                    <Image source={require('../images/camera.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <TextInput placeholder="Groups you're in" style={Style.newInput} />
                                    <View style={Style.sendButton}>
                                        <Image source={require('../images/send.png')} style={Style.sendImg} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                            <View style={Style.homeView}>
                                <Text style={Style.postText}>LASTEST POSTS</Text>
                                <Text style={Style.viewText}>View all</Text>
                            </View>
                            <View style={Style.newViewww1}>
                                <Image source={require('../images/profile.png')} style={{ width: 40, height: 40, alignSelf: 'center', position: 'absolute', left: 10, top: 10 }} resizeMode='contain' />
                                <Text style={Style.dateText2}>Dustin Houston</Text>
                                <Text style={Style.time}>5min ago</Text>
                                <Text style={Style.testtt}>Whether its a driving tour, a cruise or a bus, leaf viewing is a great way to spend a fall vacation 😂</Text>

                                <View style={Style.homeView}>
                                    <Image source={require('../images/Photo.png')} style={Style.imagetheme} resizeMode='contain' />
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={Style.homeView}>
                                            <Image source={require('../images/Photo2.png')} style={Style.comimagetheme} resizeMode='contain' />
                                            <Image source={require('../images/Photo3.png')} style={Style.comimagetheme} resizeMode='contain' />
                                        </View>
                                        <View style={Style.homeView}>
                                            <Image source={require('../images/Photo4.png')} style={Style.comimagetheme} resizeMode='contain' />
                                            <Image source={require('../images/Photo5.png')} style={Style.comimagetheme} resizeMode='contain' />
                                        </View>
                                    </View>
                                </View>
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>326</Text>
                                    <Image source={require('../images/mess.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>148</Text>
                                    <Image source={require('../images/camera.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>15</Text>
                                    <Image source={require('../images/heartfill.png')} style={Style.commonImg1} resizeMode='contain' />
                                </View>
                                <View style={Style.homeView}>
                                    <TextInput placeholder="Leave a comment" style={Style.newInput1} />
                                    <View style={Style.sendButton}>
                                        <Image source={require('../images/send.png')} style={Style.sendImg} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                            <View style={Style.newViewww3}>
                                <Image source={require('../images/profile.png')} style={{ width: 40, height: 40, alignSelf: 'center', position: 'absolute', left: 10, top: 10 }} resizeMode='contain' />
                                <Text style={Style.dateText2}>Sam Brighton</Text>
                                <Text style={Style.testtt}>Weekend is here! Enjoy your research and challenge for next week.</Text>
                                <View style={Style.homeView}>
                                    <TextInput placeholder="Leave a comment" style={Style.newInput1} />
                                    <View style={Style.sendButton}>
                                        <Image source={require('../images/send.png')} style={Style.sendImg} resizeMode='contain' />
                                    </View>
                                </View>
                            </View>
                        </View>}

                    {this.state.view_count === 1 && <ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} style={Style.imagemic} />
                                <Image source={require('../images/calendar.png')} style={Style.calendar1} />
                                <Text style={Style.commonText}>Feel Free To Focus</Text>
                                <View style={Style.view3}>
                                    <Text style={Style.colorText}>Michael Hyaat</Text>
                                </View>
                            </View>
                            <View style={Style.nextview2}>
                                <Image source={require('../images/Imagesita.png')} style={[Style.imagemic, { marginLeft: scale(10) }]} />
                                <Image source={require('../images/videocam.png')} style={Style.calendar1} />
                                <Text style={Style.commonText}>The Journey of Dreaming</Text>
                                <View style={Style.view3}>
                                    <Text style={Style.colorText}>Sita Rosida</Text>
                                </View>
                            </View>
                            <View style={Style.nextview2}>
                                <Image source={require('../images/Imagemake.png')} style={[Style.imagemic, { marginLeft: scale(10) }]} />
                                <Text style={Style.commonText}>Make: Getting Started With Pro...</Text>
                                <View style={Style.view3}>
                                    <Text style={Style.colorText}>Casey Reas & Ben Fry</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>}


                    {this.state.view_count === 2 && <View><ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <Text>Feel Free To Focus</Text>
                            </View>
                            <View style={{ flexDirection: 'column',marginTop:scale(20) }}>
                                <Image source={require('../images/wish.png')} style={Style.commonImg} resizeMode='contain' />
                                <Image source={require('../images/download.png')} style={[Style.commonImg,{marginTop:scale(20)}]} resizeMode='contain' />

                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <Text>The Journey of Dreaming</Text>
                            </View>
                            <View style={{ flexDirection: 'column',marginTop:scale(20)  }}>
                                <Image source={require('../images/wish.png')} style={Style.commonImg} resizeMode='contain' />
                                <Image source={require('../images/download.png')} style={[Style.commonImg,{marginTop:scale(20)}]} resizeMode='contain' />

                            </View>

                        </TouchableOpacity>
                    </ScrollView>
                        <View style={Style.outerView}>
                            <Image source={require('../images/Imagemic.png')} />
                            <View style={[Style.homeView,{marginTop:scale(30)}]}>
                                <Text style={{fontSize:scale(18)}}>Make: Getting Started With Pro...</Text>
                                <Image source={require('../images/wish.png')} style={[Style.commonImg,{position:'absolute',right:scale(20)}]} resizeMode='contain' />
                            </View>
                            <View style={[Style.homeView,{marginTop:scale(30)}]}>
                                <Text style={{fontSize:scale(18),color:'#5F686F'}}>Casey Reas & Ben Fry</Text>
                                <Image source={require('../images/download.png')} style={[Style.commonImg,{position:'absolute',right:scale(20)}]} resizeMode='contain' />
                            </View>
                        </View>
                    </View>}

                    {this.state.view_count === 3 && <View><ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                      
                    </ScrollView>
                    <ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                      
                    </ScrollView>
                    <ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                      
                    </ScrollView>
                    <ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={Style.view1} onPress={() => this.props.navigation.navigate('CourseDetail')}>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                            <View style={Style.view2}>
                                <Image source={require('../images/Imagemic.png')} />
                                <View style={Style.homeView}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                </View>
                            </View>
                        </TouchableOpacity>
                      
                    </ScrollView>
                    </View>}

                    {this.state.view_count === 4 && <ScrollView
                        style={Style.scrollview1}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}>
                        <TouchableOpacity style={Style.view1}>
                            <View style={Style.newview2}>
                                <Image source={require('../images/Image4.png')} />
                                <View style={[Style.homeView, { marginTop: scale(20) }]}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>25</Text>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>28,500</Text>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>36 Lessons</Text>
                                </View>
                                <Text>Sep 17, 2020 - 9:20AM</Text>
                                <Text style={Style.commonTextview}>Everything You Need to Know About Business</Text>
                                <View style={Style.homeView}>
                                    <Image source={require('../images/nicole.png')} style={{ width: 30, height: 30, position: 'absolute', left: 10 }} resizeMode='contain' />
                                    <Text style={{ marginLeft: scale(40) }}>Nicole Brown</Text>
                                    <Text style={{ marginLeft: scale(40) }}>$49.65</Text>
                                </View>
                            </View>
                            <View style={Style.newview2}>
                                <Image source={require('../images/Image4.png')} />
                                <View style={[Style.homeView, { marginTop: scale(20) }]}>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>25</Text>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>28,500</Text>
                                    <Image source={require('../images/msg.png')} style={Style.commonImg} resizeMode='contain' />
                                    <Text>36 Lessons</Text>
                                </View>
                                <Text>OPEN</Text>
                                <Text style={Style.commonTextview}>Statistics Data Science and Business Analysis</Text>
                                <View style={Style.homeView}>
                                    <Image source={require('../images/nicole.png')} style={{ width: 30, height: 30, position: 'absolute', left: 10 }} resizeMode='contain' />
                                    <Text style={{ marginLeft: scale(40) }}>Nicole Brown</Text>
                                    <Text style={{ marginLeft: scale(40) }}>$49.65</Text>
                                </View>
                            </View>

                        </TouchableOpacity>
                    </ScrollView>}

                    <View style={Style.exitview}>
                        <Image source={require('../images/chat.png')} style={{ width: 84, height: 84, alignSelf: 'center', }} />
                    </View>
                    {/* <Modal>

                    </Modal> */}
                </View>
            </ScrollView>
        )
    }

}

