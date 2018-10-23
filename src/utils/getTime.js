import dayjs from 'dayjs';

function getTime(time) {
  let t = time * 1;
  let DValue = new Date() - t;
  if (DValue >= 86400000) {
    let o = dayjs(t).toObject();
    return o.years + '年' + (o.months + 1) + '月' + o.date + '日';
  } else if (DValue >= 3600000 && DValue < 86400000) {
    let h = dayjs().hour() - dayjs(t).hour();
    if (h <= 0) {
      h = h + 24;
    }
    return h + '小时前';
  } else if (DValue >= 60000 && DValue < 3600000) {
    let s = dayjs().minute() - dayjs(t).minute();
    if (s <= 0) {
      s = s + 60;
    }
    return s + '分钟前';
  } else {
    return '刚刚';
  }
}

export default getTime;
