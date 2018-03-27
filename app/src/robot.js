'use strict'

export default class Robot {

  static process(items) {
    let result = '';
    let packetLength = 0;
    for (let item of items) {
      let itemLength = parseInt(item);
      if( (packetLength+itemLength) <= 10) {
        packetLength += itemLength;
        result += item;
      } else {
        result += `/${item}`;
        packetLength = itemLength
      }
    }
    return result;
  }
}
