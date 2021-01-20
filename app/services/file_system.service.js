const pdf = require('html-pdf');

const htmlToPdf = (htmlTemplate) => {
    let options = { format: 'Letter' }
    return new Promise((res, rej) => {
        pdf.create(htmlTemplate, options).toBuffer((err, bufferData) => {
            if (err) {
                rej([500, "s500", true, { msg: "Error occur in htmlToPdf conversion", err }]);
            }
            res(bufferData);
        });
    });
};

exports.FS_SERVICE = {
    htmlToPdf
}