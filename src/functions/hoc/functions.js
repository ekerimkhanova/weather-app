import { months } from '../../constans/months';

export const formateDate = (date) => {
    const arr = date.split('-');

    let num = arr[2][0] === '0' ? arr[2][1] : arr[2];
    let month = months.find(el => (el.num === String(arr[1])) && el.month)

    return num + ' ' + month.month
}

export const formateNum = num => Math.ceil(num) === '-0' ? '0' : Math.ceil(num);

export const formateNumToFixed = num => (num.toFixed(1)).replace('.', ',');
