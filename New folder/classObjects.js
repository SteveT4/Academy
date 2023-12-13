class TV {

    // when created, requires a, 
    constructor(brand, location, channel, volume) {

        //every TV has a:
        this.brand = brand;                   // a brand    
        this.location = location;             // a location
        this.channel = channel;               // a channel
        this.network = channel.split(' ')[0]; // a network
        this.ison = true;                    // on/off state
        this.volume = volume;
    }

    // every TV, can:

    turnOn() {
        //to turn on, you set the ison field true
        this.ison = true;
    }

    turnOff() {
        //to turn off, you set the ison field false
        this.ison = false;
    }

    report() {
        console.log(this.brand, this.location, this.channel, this.ison, this.volume);
    }
}

let lrTV = new TV("LG"  , "Living Room", "BBC 1", "Loud");
let brTV = new TV("Sony", "Bed Room", "ITV 1", "quiet");
let ktTV = new TV("Panasonic", "Kitchen", "5 USA", "Mid");


lrTV.report();
brTV.report();
ktTV.report();