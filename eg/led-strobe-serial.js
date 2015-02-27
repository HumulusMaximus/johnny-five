var five = require("johnny-five"),
  board, led;

board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` hardware instance
  led = new five.Led(13);

  // "strobe" the led in 100ms on-off phases
  setInterval(function() {
    led.toggle();
    console.log("led is on : " + led.isOn);
    //console.log("led is running : " + led.isRunning);
    console.log("led value : " + led.value);
    //console.log("led direction : " + led.direction);
    //console.log("led mode : " + led.mode);
  }.bind(this), 2000);
});
