const { FS_SERVICE } = require('../services/file_system.service')
const { template } = require('../helper/template');

const convert_file_html_pdf = async (req, res) => {
    const htmlTemplate=req["body"];
    const bufferData = await FS_SERVICE.htmlToPdf(template);
    res.writeHead(200, {
        'Content-type': 'application/pdf',
        'Content-disposition': `attachment; filename=report.pdf`
    });

    res.end(bufferData);
}

exports.FS = {
    convert_file_html_pdf
}