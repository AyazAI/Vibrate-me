import React from 'react';
import './style.css';

export default function App() {
  const handleVibrate = () => {
    // simple vibration
    // navigator.vibrate(200);
    // series of vibrations
    // navigator.vibrate([
    //   100, 30, 100, 30, 100, 30, 200, 30, 200, 30, 200, 30, 100, 30, 100, 30,
    //   100,
    // ]); // Vibrate 'SOS' in Morse.
    // navigator.vibrate([100, 1000, 100]);

    // vibrate for 100ms after every 1000ms
    startPersistentVibrate(100, 1000);
  };

  var vibrateInterval;

  // Starts vibration at passed in level
  function startVibrate(duration) {
    console.log('Vibrating now!');
    navigator.vibrate(duration);
  }

  // Stops vibration
  function stopVibrate() {
    // Clear interval and stop persistent vibrating
    if (vibrateInterval) clearInterval(vibrateInterval);
    navigator.vibrate(0);
  }

  // Start persistent vibration at given duration and interval
  // Assumes a number value is given
  function startPersistentVibrate(duration, interval) {
    // constant vibrations

    vibrateInterval = setInterval(function () {
      startVibrate(duration);
    }, interval);
  }

  return (
    <div>
      <h1>You can click below button to vibrate the device</h1>
      <p>Vibrations can only be performed on Mobile devices</p>
      <button onClick={handleVibrate}>Vibrate me!</button>

      <button onClick={stopVibrate}>Stop Vibrating</button>
    </div>
  );
}
