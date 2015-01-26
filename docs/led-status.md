<!--remove-start-->
# Led Status

Run with:
```bash
node eg/led-status.js
```
<!--remove-end-->

```javascript
//
// Simple demonstration of Led.value, Led.mode,
// Led.isOn, and Led.isRunning following a variety
// of Led method calls.
//
var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Default to pin 11 (must be PWM)
  var led = new five.Led(process.argv[2] || 11);

  this.repl.inject({
    led: led
  });

  // Print defaut status
  console.log("default status");
  status();

  // Turn LED on and print status
  console.log("led.on()");
  led.on();
  status();

  // Start blink and print status
  console.log("led.blink()");
  led.blink();
  status();
  led.stop();

  // Set brightness and print status
  console.log("led.brightness(25)");
  led.brightness(25);
  status();

  // Start pulse and print status
  console.log("led.pulse(500)");
  led.pulse(500);
  status();

  // Wait 3 seconds, stop, and print status
  this.wait(3000, function() {
    console.log("led.stop()");
    led.stop();
    // Note that value/isOn will reflect the state of
    // the pulse when stop() was called.
    status();
  });

  function status() {
    console.log("led.value = %d", led.value); // print analog brightness of LED
    console.log("led.mode = %d", led.mode); // print the pin mode (1 is OUTPUT, 3 is PWM)
    console.log("led.isOn = %s", led.isOn); // print if the LED is on
    console.log("led.isRunning = %s", led.isRunning); // print if animation currently running
    console.log("");
  }
});

```


## Breadboard/Illustration


![docs/breadboard/led-status.png](breadboard/led-status.png)
[docs/breadboard/led-status.fzz](breadboard/led-status.fzz)




<!--remove-start-->
## License
Copyright (c) 2012, 2013, 2014 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
Copyright (c) 2014, 2015 The Johnny-Five Contributors
Licensed under the MIT license.
<!--remove-end-->
