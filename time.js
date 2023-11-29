const moment = require('moment-timezone');
const jalali = require("moment-jalaali");

exports.getTime = async (req, res) => {
    try {
        const iranTimeZone = 'Asia/Tehran';

        const iranDate = moment().tz(iranTimeZone).format('YYYY-MM-DD');
        const iranTime = moment().tz(iranTimeZone).format('HH:mm:ss');
        const jalaliDate = jalali(iranDate).format('jYYYY-jMM-jDD');

        return res.status(200).json({
            status: true,
            time: iranTime,
            date: jalaliDate,
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            message: 'Error in get data'
        });
    }
}