export function getMaxScore (answerList, questions, questionResults) {
  const optionCount = {}
  for (const question of questions) {
    for (const answer of answerList) {
      for (const option of question.options) {
        if (option.key === answer) {
          const result = option.result
          if(!optionCount[result]) {
            optionCount[result] = 0
          }
          optionCount[result]++
        }
      }
    }
  }
  let maxScore = 0
  let maxScoreResult = questionResults[0]
  for (const result of questionResults) {
    const score = result.resultProp.reduce((count, prop) => {
      return count + (optionCount[prop] || 0)
    }, 0)
    if (score > maxScore) {
      maxScore = score
      maxScoreResult = result
    }
  }
  return maxScoreResult
}
