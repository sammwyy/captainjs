const Captain = require('./src');
const Commander = new Captain.Commander();

console = new Captain.Console();


Commander.setPrefix(console.formatString("Input", "$ "));

Commander.registerCommand("test", (args) => {
    console.log("Arguments: " + args);
    console.log("Hello asdasdasdasd", "world", "here", "my", "code", "example")
});

Commander.registerCommand("eval", (args) => {
    let expression = args.join(" ");
    try {
        let evaluated = eval(expression);
        if (evaluated != null)
            console.log("Evaled code result: " + evaluated);
    } catch (e) {
        console.error("Failed to eval code: " + e.message);
    }
})

Commander.onUnknownCommand((cmd) => {
    console.error("Invalid Command: " + cmd);
})

Commander.fetch();

let x = "aa";

function greet(name) {
    console.log("Hello " + name);
}

function plus() {
    return 5 + 10;
}