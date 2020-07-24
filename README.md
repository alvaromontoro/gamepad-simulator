# gamepad-simulator

A JS simulator for testing the Gamepad API.

This module creates a virtual gamepad on the screen that triggers the same events that a real gamepad gamepad would.

## How to use

1. Import the file to your project
2. Create the virtual gamepad on the screen with `gamepadSimulator.create()`
3. Simulate the gamepad connection with `gamepadSimulator.connect()`
4. Click ont he icons and axes and read the values using the standard `navigator.getGamepads()`
5. Simulate the gamepad disconnection with `gamepadSimulator.disconnect()`
6. Remove the virtual gamepad from the screen with `gamepadSimulator.destroy()`
