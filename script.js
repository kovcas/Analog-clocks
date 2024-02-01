function updateClock() {
     const now = new Date();
     const hours = now.getHours() % 12; // Convert to 12-hour format
     const minutes = now.getMinutes();
     const seconds = now.getSeconds();

     const hourHand = document.getElementById('hour');
     const minuteHand = document.getElementById('minute');
     const secondHand = document.getElementById('second');

     const hourDeg = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
     const minuteDeg = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
     const secondDeg = seconds * 6; // 6 degrees per second

     hourHand.style.transform = `rotate(${hourDeg}deg)`;
     minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
     secondHand.style.transform = `rotate(${secondDeg}deg)`;
   }

   setInterval(updateClock, 1000); // Update every second
   updateClock();