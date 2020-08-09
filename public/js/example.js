const gamepads = {};

function readValues() {
  const cgs = navigator.getGamepads();
  const indexes = Object.keys(gamepads);
  for (let x = 0; x < indexes.length; x++) {
    const buttons = cgs[indexes[x]].buttons;
    const axes = cgs[indexes[x]].axes;
    for (let y = 0; y < buttons.length; y++) {
      if (buttons[y].pressed) {
        console.log(`button ${y} pressed.`);
        document
          .querySelector("#events")
          .insertAdjacentHTML("afterbegin", `<div>Button ${y} pressed.</div>`);
      }
    }
    for (let y = 0; y < axes.length; y++) {
      if (axes[y] != 0) {
        const axe = Math.floor(y / 2);
        const dir = y % 2;
        let move = "up";
        if (dir === 0 && axes[y] == 1) {
          move = "right";
        } else if (dir === 0 && axes[y] == -1) {
          move = "left";
        } else if (dir === 1 && axes[y] == 1) {
          move = "down";
        }
        console.log(`axe ${axe} moved ${move}.`);
        document
          .querySelector("#events")
          .insertAdjacentHTML("afterbegin", `<div>Axe ${axe} moved ${move}.</div>`);
      }
    }
  }

  if (indexes.length > 0) {
    window.requestAnimationFrame(readValues);
  }
}

window.addEventListener("gamepadconnected", function (e) {
  console.log(`Gamepad connected: ${e.gamepad.id}`);
  document
    .querySelector("#events")
    .insertAdjacentHTML("afterbegin", "<div><b>Gamepad connected.</b></div>");
  gamepads[e.gamepad.index] = true;
  readValues();
});

window.addEventListener("gamepaddisconnected", function (e) {
  console.log(`Gamepad disconnected: ${e.gamepad.id}`);
  document
    .querySelector("#events")
    .insertAdjacentHTML("afterbegin", "<div><b>Gamepad disconnected.</b></div>");
  delete gamepads[e.gamepad.index];
});

document.querySelector("#connect-disconnect").addEventListener("click", function () {
  if (this.textContent === "Disconnect") {
    gamepadSimulator.disconnect();
    this.textContent = "Connect";
  } else {
    gamepadSimulator.connect();
    this.textContent = "Disconnect";
  }
});

rgamepadSimulator.create();
