/*
Filename: complex_code.js
Content: A complex JavaScript code demonstrating a simulation of a smart home system. It includes various devices, user interactions, and automated actions.
*/

// Device class representing a device in the smart home system
class Device {
  constructor(name, type, status) {
    this.name = name;
    this.type = type;
    this.status = status;
  }

  turnOn() {
    this.status = "ON";
    console.log(`${this.name} turned on.`);
  }

  turnOff() {
    this.status = "OFF";
    console.log(`${this.name} turned off.`);
  }
}

// Create instances of devices
const livingRoomLight = new Device("Living Room Light", "Light", "OFF");
const kitchenLight = new Device("Kitchen Light", "Light", "OFF");

const smartTV = new Device("Smart TV", "Entertainment", "OFF");
const smartSpeaker = new Device("Smart Speaker", "Entertainment", "OFF");

const thermostat = new Device("Thermostat", "Climate Control", "OFF");
const securityCamera = new Device("Security Camera", "Security", "OFF");

// Define a user class representing a user in the smart home system
class User {
  constructor(name) {
    this.name = name;
    this.smartDevices = [];
  }

  addDevice(device) {
    this.smartDevices.push(device);
  }

  turnOnAllDevices() {
    console.log(`Hello ${this.name}! Turning on all devices...`);
    this.smartDevices.forEach((device) => {
      device.turnOn();
    });
  }

  turnOffAllDevices() {
    console.log(`Hello ${this.name}! Turning off all devices...`);
    this.smartDevices.forEach((device) => {
      device.turnOff();
    });
  }
}

// Create instances of users
const user1 = new User("John");
const user2 = new User("Emily");

// Add devices to users
user1.addDevice(livingRoomLight);
user1.addDevice(kitchenLight);
user1.addDevice(smartTV);

user2.addDevice(kitchenLight);
user2.addDevice(smartSpeaker);
user2.addDevice(thermostat);
user2.addDevice(securityCamera);

// Demonstrate user interactions with devices
user1.turnOnAllDevices();
user2.turnOffAllDevices();

// Simulate an automated action: turn on lights when entering a room
const enterRoom = (user, device) => {
  console.log(`${user.name} entered the room!`);
  device.turnOn();
};

enterRoom(user1, livingRoomLight);
enterRoom(user2, kitchenLight);

// More complex logic and interactions can be added here...

// Simulate other automated actions, scenarios, and user interactions...

// End of code