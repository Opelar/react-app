import moment from 'moment';

export default function getTime(time) {
  let t = time * 1;
  let DValue = new Date() - t;
  if (DValue >= 86400000) {
    let o = moment(t).toObject();
    return o.years + '年' + (o.months + 1) + '月' + o.date + '日';
  } else if (DValue >= 3600000 && DValue < 86400000) {
    let h = moment().hour() - moment(t).hour();
    if (h <= 0) {
      h = h + 24;
    }
    return h + '小时前';
  } else if (DValue >= 60000 && DValue < 3600000) {
    let s = moment().minute() - moment(t).minute();
    if (s <= 0) {
      s = s + 60;
    }
    return s + '分钟前';
  } else {
    return '刚刚';
  }
}
