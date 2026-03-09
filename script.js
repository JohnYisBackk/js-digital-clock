// ===============================
// 1️⃣ GET ELEMENTS FROM DOM
// ===============================

const clockTime = document.getElementById("clockTime");
const clockDay = document.getElementById("clockDay");
const clockDate = document.getElementById("clockDate");

const themeToggle = document.getElementById("themeToggle");

// ===============================
// 2️⃣ ARRAYS FOR DAYS AND MONTHS
// ===============================

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ===============================
// 3️⃣ UPDATE CLOCK
// ===============================

function updateClock() {
  const now = new Date();

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const dayIndex = now.getDay();
  const dateNumber = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  clockTime.textContent = formattedTime;
  clockDay.textContent = DAYS[dayIndex];
  clockDate.textContent = `${MONTHS[monthIndex]} ${dateNumber}, ${year}`;
}

// ===============================
// 4️⃣ TOGGLE THEME
// ===============================

function toggleTheme() {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
}

// ===============================
// 5️⃣ EVENT LISTENERS
// ===============================

themeToggle.addEventListener("click", toggleTheme);

// ===============================
// 6️⃣ INIT
// ===============================
updateClock();

setInterval(updateClock, 1000);
