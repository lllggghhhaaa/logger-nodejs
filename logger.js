const { createWriteStream } = require("fs");

exports.Log = async (message, type, dir) => {
    let logmessage;
    var stream = createWriteStream(dir + "/log.txt");

    const options = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };

    const date = new Intl.DateTimeFormat([], options);
    let time = (date.format(new Date()));

    switch(type)
    {
        case 0:
            logmessage = `[${time}] [Message] ${message}`;
            break;
        case 1:
            logmessage = `[${time}] [Warning] ${message}`;
            break;
        case 2:
            logmessage = `[${time}] [Error] ${message}`;
            break;
    }
    stream.write(logmessage + "\n");
    console.log(logmessage);
}
exports.LogType = {
    Message: 0,
    Warning: 1,
    Error: 2
}
