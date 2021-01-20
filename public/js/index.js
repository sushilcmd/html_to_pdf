$(document).ready(() => {
    $('.exportBtn').bind('click', () => {
        console.log('hello sushil');
        const requestData={
            htmlTemplate:$(".invoice-box").html()
        }
        $.ajax({
            url: 'http://localhost:3000/api/fs/html_to_pdf',
            method: 'POST',
            data: $(".invoice-box").html(),
            xhrFields: {
                responseType: 'blob'
            },
            success: function (data) {
                const a = document.createElement('a');
                const url = window.URL.createObjectURL(data);
                a.href = url;
                a.download = 'report.pdf';
                document.body.append(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            }
        });
    })
})