import dayjs from 'dayjs'
// передавать объект в функцию dayjs()
import objectSupport from 'dayjs/plugin/objectSupport'
import 'dayjs/locale/ru'
dayjs.extend(objectSupport)
dayjs.locale('ru')

/**
 * @typedef {Object} RawDate
 * @property {number} year
 * @property {number} month
 * @property {number | null} day
 */


/**
 * @returns {number} day
 */
export const dayToday = () => {
    return dayjs().date()
}

/**
 * @returns {number} month
 */
export const monthToday = () => {
    return dayjs().month()
}

/**
 * @returns {number} year
 */
export const yearToday = () => {
    return dayjs().year()
}

/**
 * @returns {string} fullDate
 */
export const fullDateToday = () => {
    return dayjs().format()
}

/**
 * @param {RawDate} date
 * @returns {string} fullDate
 */
export const fullDate = (date) => {
    return dayjs(date).format()
}

export { dayjs }