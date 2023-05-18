class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
      this.timer = null; // Initialize the timer property
    }
  
    display() {
      let date = new Date();
      let [hours, mins, secs] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds()
      ];
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => {
        this.display();
        console.log('\n'); // Add a line break between each loop
      }, 1000);
    }
  }
  
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision;
    }
  
    start() {
      super.stop(); // Stop previous interval, if any
      this.display(); // Display the initial time
      this.timer = setInterval(() => {
      super.display(); // Display the updated time
        //console.log('\n'); // Add a line break between each loop
      }, this.precision);
    }
  }
  
  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '07:00') {
      super(prefix);
      this.wakeupTime = wakeupTime;
    }
  
    start() {
      super.stop(); // Stop previous interval, if any
      this.timer = setInterval(() => {
        let currentTime = new Date();
        let [hours, mins] = [
          currentTime.getHours(),
          currentTime.getMinutes()
        ];
        if (hours < 10) hours = '0' + hours;
        if (mins < 10) mins = '0' + mins;
        let formattedTime = `${hours}:${mins}`;
        
        if (formattedTime === this.wakeupTime) {
          console.log('Wake Up');
          super.stop();
        } else {
          this.display();
          console.log('\n'); // Add a line break between each loop
        }
      }, 1000);
    }
  }
  
  const precisionClock = new PrecisionClock('precision clock:', 500); // Precision of 500ms
  precisionClock.start();
  
  const alarmClock = new AlarmClock('alarm clock:', '15:28'); // Set wakeup time to 15:22
  alarmClock.start();
  