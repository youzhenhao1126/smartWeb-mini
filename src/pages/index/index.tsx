import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'
import headerBg from '../../assets/pic1.png'
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";



export default () => {
  return (
    <View className='indexPage'>
      <View className='at-article__h1 title'>
        MBTI 性格测试
      </View>
      <View className='at-article__h2 subTitle'>
        立即了解你的性格特点
      </View>
      <AtButton type='primary' circle className='enterBtn' onClick={() => {Taro.navigateTo({url: 'pages/doQuestion/index'})}}>开始测试</AtButton>
      <Image className='headerBg'
        src={headerBg}
      />
      <GlobalFooter />
    </View>
  );
}
