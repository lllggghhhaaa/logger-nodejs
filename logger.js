const { createWriteStream } = require("fs")

exports.Log = async (message, type) => {
    let logmessage;
    var stream = createWriteStream(__dirname + "/log.txt", {flags:'a'});
    switch(type)
    {
        case 0:
            logmessage = `[Message] ${message}\n`
            break;
        case 1:
            logmessage = `[Error] ${message}\n`
            break;
    }
    stream.write(logmessage)
    console.log(message)
}