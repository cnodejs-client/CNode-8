# CNode

由React Native 开发的移动APP,数据接口由 `http://cnodejs.org/` 提供
## 注意
在运行debug模式的apk可能会比较，但是在真机上运行release版本不会出现这种情况 
## 使用教程
1. 三方库列表
    1. color
    1. lodash
    1. mobx
    1. mobx-react
    1. moment
    1. native-base
    1. react-native-easy-toast
    1. react-native-material-menu
    1. react-navigation

1. 下载项目
    ###### `git clone git@github.com:25juan/CNode.git`
1. 执行 yarn 命令安装项目运行所需要的包 
    ###### `yarn`
1. 运行程序
    ###### `react-native run-ios ` or `react-native run-android`
1. 如果想查看真实数据请将`CNode/src/store/url.js`中的 ```let dev = true``` 置为true即可
## 功能列表
1. <del>主题列表展示</del>
1. <del>主题列表详情展示</del>
1. <del>换肤功能</del>
1. <del>主题刷新在浏览器中打开</del>
1. <del>主题刷新、分享、转发功能</del>
1. <del>app 桌面图标</del>
1. <del>个人资料查看</del>
1. <del>APP启动页</del>
1. <del>个人登录</del>
1. <del>退出登录功能</del>
1. <del>文章发布</del>
1. 图片单击预览功能(待完成)
1. 主题收藏(待完成)
1. 杂项(待完成)

## 项目截图
#### Android
<img src="./document/image/android/share.jpg">
<img  src="./document/image/android/ask.jpg" >
<img   src="./document/image/android/job.jpg" >
<img   src="./document/image/android/mine.jpg" >
<img   src="./document/image/android/detail.jpg" >
<img   src="./document/image/android/detail2.jpg" >
<img   src="./document/image/android/theme.jpg" >
<img   src="./document/image/android/user.jpg" >
#### IOS
<img  src="./document/image/ios/ask.png" >
<img   src="./document/image/ios/job.png" >
<img   src="./document/image/ios/mine.png" >
<img   src="./document/image/ios/detail.png" >
<img   src="./document/image/ios/detail2.png" >
<img   src="./document/image/ios/theme.png" >
<img   src="./document/image/ios/user.png" >

## 总结
在这一次的开发中，遇到了不少的问题，但是其中也学到了不少的东西，这里做一个记录，方便以后查阅.

#### Q&A

#### Q: 为什么不用redux 而用 mobx
A: redux对于初学者来说比较复杂，学习曲线比较陡峭。mobx相对比较轻量级点，容易上手，redux含有
中间件的配置，也是比较复杂的。如果把redux比作拖拉机的话，mobx就是跑车。比较适合这种小型项目。不用考虑
太多的东西，所以选择mobx。但是具体选择哪一种根据自己的业务逻辑来进行选择
#### Q: `TabNavigator` 嵌套在某组件中，某组件再加入到`StackNavigator`中，那么`TabNavigator`
的子组件可以导航到 `StackNavigator` 里面的组件吗？
A: 不能。解决方法，将 `StackNavigator` 的 `navigation` 传入到 `TabNavigator` 的`screenProps`里面，
TabNavigator的子组件可以 调用 this.props.screenProps.navigate("StackNavigator配置的路由")
#### Q: mobx `componentWillReact` 第一次没有执行？
A: mobx `componentWillReact`方法在组件第一次渲染的时候是不会调用的，只有当接受到新的Props 或者
state 改变的时候才会调用。在以后的组件生命周期里面，都会执行`componentWillReact`，如果组件渲染完成
要执行代码，则可以调用React 的组件生命周期方法`componentDidMount`
#### Q: 在windows 下进行Android开发的是运行`react-native run-android`的报错？
A: 可以将cmd 切换到 `项目名/android` 文件夹下，执行`gradlew clean`,然后再执行`react-native run-android`
#### Q: mobx数据改变了没更新UI？
A: mobx数据是响应式的，请确保你的组件加上了 `@observer` 注解，需要的数据可以通过`@inject(需要的数据)`来
注入到组件的属性上面。
#### Q: 在使用webview的时候比较慢？
A: 在使用webview 的时候，可以先把数据准备好(异步)然后再打开对应画面加载webview,
这样数据回来的时候webview 已经加载了部分css和js资源了。能够提高webview 打开的速度
。但是能够用RN 解决的尽量不用webview,毕竟会影响用户体验性的。
#### Q: 下载 ```gradle-wrapper.jar``` 慢 ?
A: 将 ```android\gradle\wrapper\gradle-wrapper.properties``` 上面的文件通过迅雷下载下来，然后将 distributionUrl 指向本地的文件
####Q: ios下配置启动图标和启动屏之后运行`react-native run-ios`没有生效?
A: 删除项目 ```ios``` 文件夹下的build 文件夹，当通过xcode 改变了底层的代码的时候，如：app 图标，app 的启动屏应该重新build 












     
    