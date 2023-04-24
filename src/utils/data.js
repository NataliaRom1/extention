let obj = [
  {
    name: 'Настя',
    mood: 'Радостный'
  },
  {
    name: 'Петя',
    mood: 'Злюсь'
  },
  {
    name: 'Костя',
    mood: 'Расстроен'
  },
  {
    name: 'Аня',
    mood: 'Удивлен'
  },
  {
    name: 'Катя',
    mood: 'Веселый'
  },
  {
    name: 'Аня',
    mood: 'Удивлен'
  },
  {
    name: 'Лиза',
    mood: 'Устал'
  },
  {
    name: 'Наташа',
    mood: 'Удивлен'
  },
  {
    name: 'Женя',
    mood: 'Злюсь'
  },
  {
    name: 'Максим',
    mood: 'Злюсь'
  },
  {
    name: 'Никита',
    mood: 'Удивлен'
  },
]

let emotionsMassiv = [];
obj.forEach(item => { emotionsMassiv.push(item.mood)}) // Получаем массив эмоций


let emotionsObj = emotionsMassiv.reduce((acc, elem) => { // Получаем объект эмоций с указанием количества
  acc[elem] = (acc[elem] + 1) || 1;
  return acc;
}, {});


let labels = Object.keys(emotionsObj)
let data = Object.values(emotionsObj)




