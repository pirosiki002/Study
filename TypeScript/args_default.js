function showTime(time) {
    if (time === void 0) { time = new Date(); }
    return '現在時刻 :' + time.toLocaleString();
}
//console.log(showTime()); // 結果例：2023/8/28 14:05
console.log(showTime(new Date('2023-08-28T11:29:00'))); // 結果例：2023/8/28 14:05
