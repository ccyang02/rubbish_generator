const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}
const phrase = ['很簡單', '很容易', '很快', '很正常']

function getRandom(randomArray) {
  return randomArray[Math.floor(Math.random() * randomArray.length)]
}

function getTask(job) {
  switch (job) {
    case 'engineer':
      return { job: '工程師', taskItem: getRandom(task.engineer) }
    case 'designer':
      return { job: '設計師', taskItem: getRandom(task.designer) }
    case 'founder':
      return { job: '創業家', taskItem: getRandom(task.entrepreneur) }
    default:
      return 'Not found'
  }
}

function generateRubbish(options) {
  // there is no target key in options
  if (!options.target) {
    return `恭喜良心發現，少說幹話多做事的真諦`
  }

  const outcome = getTask(options.target)
  const phraseItem = getRandom(phrase)

  return `身為一個${outcome.job}，${outcome.taskItem}，${phraseItem}吧！`
}

module.exports = generateRubbish