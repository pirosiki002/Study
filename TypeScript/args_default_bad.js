function showTime(time) {
    // It outputs the current time if the 'time' argument is omitted.
    if (time === undefined) {
        return '現在時刻:' + (new Date()).toLocaleString();
    }
    else {
        return '現在時刻:' + time.toLocaleString();
    }
}
//console.log(showTime());
console.log(showTime(new Date('2023-08-28T11:29:00')));
