const execute = (command, request, method) => {
    return new Promise(function (res, rej) {
        executeInternal(appUrl, command, method, request, res, rej, 40000);
    });
}

const executeInternal = (url, command, request_path, requestData, success, fail, timeout) => {
    fail = ((fail == undefined) ? function () {
        //handle error
    } : fail);
    $.ajax({
        type: request_path,
        url: url + command,
        data: JSON.stringify(requestData),
        dataType: "json",
        contentType: "application/pdf; charset=utf-8",
        timeout: timeout == undefined ? 0 : timeout, // in milliseconds
        success: success,
        error: fail
    });
}