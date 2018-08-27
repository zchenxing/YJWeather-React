let Plugins = {

    /**
     * cond_code 天气情况，code码
     * time 时间
     * return 图片
     */
    getWeatherIcon: (cond_code, time) => {
        time = time.length > 10 ? time.substring(11, 16) : time;

        cond_code = parseInt(cond_code)

        // 夜晚
        if (time < '06:00' && time > '18:00') {

            if (cond_code === 100 || cond_code === 103 || cond_code === 104 ||
                cond_code === 300 || cond_code === 301 ||
                cond_code === 406 || cond_code === 407) {
                cond_code = `${cond_code}n`
            }
        }
        return require(`../images/weather/${cond_code}.png`)
    },

    /**
     * 返回上午下午时间段 
     * dateTime 'yyyy-MM-dd HH:mm'
     */
    coverNowTime: (dateTime) => {
        let date = dateTime.substring(0, 10)
        let now = Plugins.getNowFormatDate()

        if (date === now) {
            dateTime = '今天' + dateTime.substring(11, 16)
        } else {
            dateTime = '明天' + dateTime.substring(11, 16)
        }

        return dateTime
    },


    //获取当前时间，格式YYYY-MM-DD
    getNowFormatDate: () => {
        var date = new Date();
        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    }
}



export default Plugins;