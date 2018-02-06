import React,{
    Component
} from "react" ;
import {
    View,
    Platform,
    ScrollView
} from "react-native";
import {
    Card,Body,Container,Content,
    Row,Col,Thumbnail,Right,Icon,CardItem,Text,Button
} from "native-base";
import Touchable from "../component/Touchable" ;
import {
    observer,
    inject
} from "mobx-react/native";
import StatusBar from "../component/StatusBar" ;
@inject("common")
@inject("user")
@observer
export default class Mine extends Component{
    openSkin(){
        let { navigate } = this.props.navigation ;
        navigate("SkinPicker");
    }
    login(){}
    render(){
        let theme = this.props.common.theme ;
        let { loginname , avatar_url  } = this.props.user.user ;
        return (
            <Container style={styles.white}>
                <StatusBar theme={theme}/>
                <ScrollView>
                    <Content padder>
                        <Card>
                            <Touchable onPress={()=>this.login()}>
                                <CardItem>
                                    <Body style={styles.row}>
                                    <View style={styles.center}>
                                        <Text style={styles.loginText}>{ loginname }</Text>
                                    </View>
                                    <View style={styles.center}>
                                        <Thumbnail source={avatar_url}/>
                                    </View>
                                    </Body>
                                </CardItem>
                            </Touchable>
                        </Card>
                        <Card>
                            <CardItem style={styles.borderBottom}><Text>我的文章</Text></CardItem>
                            <CardItem style={styles.borderBottom}><Text>我的收藏</Text></CardItem>
                            <CardItem><Text>消息通知</Text></CardItem>
                        </Card>
                        <Card>
                            <CardItem style={styles.borderBottom}><Text>清除缓存</Text></CardItem>
                            <CardItem style={styles.borderBottom}><Text>关于CNode</Text></CardItem>
                            <CardItem style={styles.borderBottom}><Text>关于本软件</Text></CardItem>
                            <CardItem style={styles.borderBottom}><Text>消息通知</Text></CardItem>
                            <Touchable onPress={()=>this.openSkin()}>
                                <CardItem>
                                    <Text >更换皮肤</Text>
                                </CardItem>
                            </Touchable>
                        </Card>
                        <View>
                            <Button block danger>
                                <Text>退出登录</Text>
                            </Button>
                        </View>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}
const styles= {
    white:{backgroundColor:"#fff"},
    row:{flexDirection:"row"},
    borderBottom:{borderBottomWidth:1,borderBottomColor:"#ededed"},
    center:{flex:1,alignItems:"center",justifyContent:"center",height:80},
    loginText:{fontSize:24}
};