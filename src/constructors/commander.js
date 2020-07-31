const readline = require('readline');

class Commander {
    constructor() {
        this.commands = new Map();
        this.a = "x";

        this.fetcher = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    setPrefix(text) {
        this.prefix = text;
    }

    fetch() {
        this.fetcher.question((this.prefix ? this.prefix : ''), (out) => {
            this.executeCommand(out);
            this.fetch();
        });
    }

    executeCommand(text) {
        let command = text.split(" ")[0];
        let args = text.replace(command + " ", "");

        if (this.commands.has(command)) {
            let callback = this.commands.get(command);
            callback(args.split(" "));
        } else {
            this.unknownCommand(command);
        }
    }

    unknownCommand(name) {
        console.error(`Unknown command ${name}.`);
    }

    onUnknownCommand(callback) {
        this.unknownCommand = callback;
    }

    registerCommand(name, callback) {
        this.commands.set(name, callback);
    }

    unregisterCommand(name) {
        this.commands.delete(name);
    }

    existsCommand(name) {
        return this.commands.has(name);
    }

    end() {
        this.fetcher.close();
    }

    process(text) {
        console.log(text);
    }
}

module.exports = Commander;