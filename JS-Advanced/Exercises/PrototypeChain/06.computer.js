function createComputerHierarchy() {
        class Keyboard {
            constructor(manufacturer, responseTime) {
                this.manufacturer = manufacturer;
                this.responseTime = responseTime;
            }
        }

        class Monitor {
            constructor(manufacturer, width, height) {
                this.manufacturer = manufacturer;
                this.width = width;
                this.height = height;
            }
        }

        class Battery {
            constructor(manufacturer, expectedLife) {
                this.manufacturer = manufacturer;
                this.expectedLife = expectedLife;
            }
        }

        class Computer {
            constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
                if(new.target === Computer) {
                    throw new Error ('This is an abstract Class, please extend it instead');
                }

                this.manufacturer = manufacturer;
                this.processorSpeed = processorSpeed;
                this.ram = ram;
                this.hardDiskSpace = hardDiskSpace;
            }
        }

        class Laptop extends Computer {
            constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
                super(manufacturer, processorSpeed, ram, hardDiskSpace);
                this.weight = weight;
                this.color = color;
                this.battery = battery;
            }

            set battery(newBattery) {
                if(! (battery instanceof Battery)) {
                    throw TypeError('not a valid battery'); 
                }
                this._battery = newBattery;
            }
            get battery() {
                return this._battery;
            }
        }

        class Desktop extends Computer {
            constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
                super(manufacturer, processorSpeed, ram, hardDiskSpace);
                this.keyboard = keyboard;
                this.monitor = monitor;
            }

            set keyboard(newKeyboard) {
                if(!(newKeyboard instanceof Keyboard)) {
                    throw new TypeError('not a valid keyboard');
                }
                this._keyboard = newKeyboard;
            }

            get keyboard() {
                return this._keyboard;
            }

            set monitor(newMonitor) {
                if(!(newMonitor instanceof Monitor)) {
                    throw new TypeError('not a valid monitor');
                }
                this._monitor = newMonitor;
            }

            get monitor() {
                return this._monitor;
            }

        }

    return {
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}
