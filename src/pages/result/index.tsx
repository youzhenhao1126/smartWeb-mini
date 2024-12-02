import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import Taro from '@tarojs/taro'

import headerBg from '../../assets/pic1.png'
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";
import questions from '../../data/questions.json'
import question_results from '../../data/question_results.json'
import {getMaxScore} from '../utils/bizUtils'

export default () => {
  const answerList = Taro.getStorageSync('answerList')
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: '答案为空',
      icon: 'error',
      duration: 3000
    })
  }
  const result = getMaxScore(answerList, questions, question_results)
  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTitle'>
        {result.resultDesc}
      </View>
      <AtButton type='primary' circle className='enterBtn' onClick={() => {Taro.reLaunch({url: 'pages/index/index'})}}>返回主页</AtButton>
      <Image className='headerBg'
        src={headerBg}
      />
      <GlobalFooter />
    </View>
  );
}

