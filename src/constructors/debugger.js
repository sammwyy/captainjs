const path = require('path');

class Debugger {
    constructor() {}

    call(text) {
        let error = new Error();
        let frame = error.stack.split("\n")[2];
        let pathName = frame.split("(")[1].split(")")[0];
        let fileName = path.basename(pathName).split(":")[0];
        let line = pathName.split(fileName)[pathName.split(fileName).length - 1].replace(":", "");
        let functionName = frame.split(" ")[5];

        if (console.debugLog) {
            if (text == null)
                console.debugLog(`Debug called from ${functionName}(); §8|| §9${fileName}§c:${line}`);
            else
                console.debugLog(`${text} §8|| §9${fileName}§c:${line}`);
        } else {
            if (text == null)
                console.log(`Debug called from ${functionName}(); || ${fileName}:${line}`);
            else
                console.log(`${text} || ${fileName}:${line}`);
        }

    }
}

module.exports = Debugger;