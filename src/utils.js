import dayjs from 'dayjs'
// плагин позволяет передавать объект в функцию dayjs()
import objectSupport from 'dayjs/plugin/objectSupport'
import 'dayjs/locale/ru'
dayjs.extend(objectSupport)
dayjs.locale('ru')

export { dayjs }