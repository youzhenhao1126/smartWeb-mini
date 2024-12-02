import { View } from '@tarojs/components'
import {AtButton, AtRadio} from 'taro-ui'
import {useEffect, useState} from 'react'
import Taro from '@tarojs/taro'
import './index.scss'
import GlobalFooter from '../../components/GlobalFooter'
import questions from '../../data/questions.json'



export default () => {
  const [current, setCurrent] = useState<number>(1)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0])
  const questionOptions = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key }
  })
  const [currentAnswer, setCurrentAnswer] = useState<string>()
  // 保存已经选中的答案
  const [answerList] = useState<string[]>([])
  // 序号变化时切换当前问题
  useEffect(() => {
    setCurrentQuestion(questions[current - 1])
    setCurrentAnswer(answerList[current - 1])
  }, [current])
  return (
    <View className='doQuestionPage'>
      <View className='at-article__h2 title'>
        { current }{ currentQuestion.title }
      </View>
      <View className='options-wrrapper'>
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value)
            answerList[current - 1] = value
        }}
        />
      </View>
      {current < questions.length && (<AtButton type='primary' circle className='controlBtn' onClick={() => setCurrent(current + 1)} disabled={!currentAnswer}>下一题</AtButton>)}
      {current == questions.length && (<AtButton type='primary' circle className='controlBtn' disabled={!currentAnswer} onClick={() => {Taro.navigateTo({url: 'pages/result/index'}); Taro.setStorageSync('answerList', answerList)}}>查看结果</AtButton>)}
      {current > 1 && (<AtButton circle className='controlBtn' onClick={() => {setCurrent(current + 1)}}>上一题</AtButton>)}
      <GlobalFooter />
    </View>
  );
}
