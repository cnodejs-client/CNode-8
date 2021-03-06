import React,{
    Component
} from "react" ;
import SuperWebView from "../../component/WebView" ;
import { Share,Linking,View } from "react-native";
import { Col,Right,Button,Icon,Text,Fab  } from "native-base";
import url from "../../store/url" ;
import injectScript from "./script" ;
import { HeaderWithBackIcon as Header } from "../../component/LayoutHeaderWithoutIcon";
import {
    observer,
    inject
} from "mobx-react/native";
import { observable } from "mobx" ;
import alert from "../../component/Alert" ;
import Menu, { MenuItem } from 'react-native-material-menu';
import Toast from "react-native-easy-toast" ;
@inject("common")
@inject("topic")
@observer
export default class Topic extends Component{
    toast = null;
    @observable
    topic = {};
    static navigationOptions={header:null} ;
    setMenuRef = ref => {
        this.menu = ref;
    };
    refresh(){
        let { topic,getTopicById } = this.props.topic ;
        getTopicById(topic.id).then(()=>{
            this.toast.show("刷新成功！");
        });
        this.menu.hide();
    }
    share(){
        let { topic } = this.props.topic ;
        let link = url.share+topic.id;
        Share.share({
            message:link,
            title:"分享该文章",
            url:link
        });
    }
    openBrowser(){
        let { topic } = this.props.topic ;
        let link = url.share+topic.id;
        alert("是否在浏览器中打开?",()=>{
            this.hideMenu();
            Linking.openURL(link);
        });
    }
    hideMenu = () => {
        this.menu.hide();
    };
    showMenu = () => {
        this.menu.show();
    };
    back(){
        this.props.navigation.goBack();
    }
    render(){
        let { theme , markdownStyle} = this.props.common ;
        let { topic } = this.props.topic ;
        let html  = injectScript(topic,markdownStyle);
        return (<Col>
                    <Header title={topic.authorName} onPress={()=>this.back()} theme={theme}>
                        <Button onPress={()=>this.share()} transparent>
                            <Icon style={{color:theme.headerTextColor}} android={"md-share-alt"} ios={"ios-share-alt-outline"}/>
                        </Button>
                        <Menu
                            ref={this.setMenuRef}
                            button={(
                                <Button onPress={()=>this.showMenu()} transparent>
                                    <Icon style={{color:theme.headerTextColor}} android={"md-more"} ios={"ios-more-outline"}/>
                                </Button>
                            )}
                        >
                            <MenuItem onPress={()=>this.refresh()}>刷新</MenuItem>
                            <MenuItem onPress={()=>this.openBrowser()}>浏览器中打开</MenuItem>
                            <MenuItem onPress={()=>this.hideMenu()}>收藏</MenuItem>
                        </Menu>
                    </Header>
                    <SuperWebView theme={theme} html={html}/>
                    <Toast ref={(toast)=>this.toast = toast}/>
                    <Fab
                        direction="up"
                        style={{backgroundColor: theme.FabColor}}
                        position="bottomRight"
                        onPress={() =>this.props.navigation.navigate("Comment",{topic})}>
                        <Icon name="chatbubbles"/>
                    </Fab>
                </Col>)
    }
}