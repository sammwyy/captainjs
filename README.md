<img align="left" src="https://raw.githubusercontent.com/sammwyy/captainjs/master/docs/assets/captain.png" width="10%">

### Captain.js
A toolkit for NodeJS which contains Debugger and Console Utilities.  
<p align="center"> <a href="#debugger">Debugger</a> | <a href="#console">Console</a> | <a href="#colors">Colors</a> | <a href="#commands">Commands</a>

#### What is Captain.js?
Captain.js is a toolkit that provides console utilities such as debugging, logging, and commands.  

### Console
**Format console**  
add formats to the console that apply automatic colors, prefixes and other utilities.
```javascript
const Captain = require('captainjs');
console = new Captain.Console();

console.log("Hello");
console.error("This is an error");
console.warn("Warning! you are awesome.");
```

> Output:  
[23:57:44] [Log] Hello  
[23:57:44] [Error] This is an error  
[23:57:44] [Warn] Warning! you are awesome.  



**Custom Console configuration**  
All parameters are optional.
```javascript
console = new Captain.Console({
    "use_colors": true,
    "debug": false,
    "format": "§8[§d%time%§8] [%prefix%§8] §7%message%",
    "log_prefix": "§aLog",
    "warn_prefix": "§eWarn",
    "error_prefix": "§cError",
    "info_prefix": "§bInfo",
    "debug_prefix": "§bDebug"
});
```




### Colors
**Colors in console**  
Just do a console.log (); containing a string with color scapes.
```javascript
const Captain = require('captainjs');
console = new Captain.Console();

console.log("§dHello in Purple §aAnd goodbye in green");
```

Colors:  
§0 = Black  
§1 = Dark Blue  
§2 = Dark Green  
§3 = Dark Cyan  
§4 = Dark Red  
§5 = Dark Purple  
§6 = Gold  
§7 = Gray  
§8 = Dark Gray  
§9 = Blue  
§a = Green  
§b = Aqua  
§c = Red  
§d = Purple  
§e = Yellow  
§f = White  
§r = Reset  



**Colors in console using the Enumerator**  
You can concatenate a string to a color using the following enumerator.
```javascript
const Color = require("captainjs").Colors;

console.log(Color.Red + "Hello");
```




### Debugger
**Normal debugger**  
It shows in the console when the function is called, which in turn contains where it is called from and in which line of code.
```javascript
const Captain = require('captainjs');
const Debug = new Captain.Debugger();

Debug.call();
```

> Output:  
Debug called from Object.<anonymous>(); || test.js:4:7
  
  

**Debugger with message**  
It shows a message in the console when the function is called, which in turn contains where it is called from and in which line of code.
```javascript
const Captain = require('captainjs');
const Debug = new Captain.Debugger();

Debug.call("This works?");
```

> Output:  
This works? || test.js:4:7



**Debugger with console object**
```javascript
const Captain = require('captainjs');
console = new Captain.Console();

console.debug();
```
> Output:  
[23:57:44] [Debug] Debug called from Object.<anonymous>(); || test.js:5:9




### Commands
**Register a command**  
Registers a function that will be executed when the specified command is written to the terminal.  
```javascript
const Captain = require('captainjs');
const Commander = new Captain.Commander();

Commander.registerCommand("hello", (args) => {
    console.log("Hello world");
});

Commander.fetch();
```



**Change the command input prefix**  
change the text to be displayed when a command needs to be sent.  
```javascript
Commander.setPrefix("Type a command here: ");
```



**Handle unknown commands**  
executes an action when trying to execute a non-existent command.  
```javascript
Commander.onUnknownCommand((cmd) => {
    console.error("Invalid Command: " + cmd);
})
```
