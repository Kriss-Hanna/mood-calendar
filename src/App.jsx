import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [activeColor, setActiveColor] = useState("");

  const weekDays = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
  const defaultColor = "#888";
  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function getAllDays(year) {
    const firstDay = new Date(`January 1 ${year}`);
    const lastDay = new Date(`December 31 ${year}`);
    const days = [firstDay];
    let lastDayInArray = firstDay;

    while (lastDayInArray.getTime() !== lastDay.getTime()) {
      days.push(addDays(lastDayInArray, 1));
      lastDayInArray = days[days.length - 1];
    }

    return days;
  }

  const currentYear = new Date().getFullYear();
  const dates = getAllDays(currentYear);

  const handleMoodClick = (color) => {
    if (activeColor === color) {
      setActiveColor(defaultColor);
    } else {
      setActiveColor(color);
    }
  };

  console.log(mood);

  return (
    <>
      <div className="header">
        <h1>2023 Mood Calendar</h1>
        <h2>~ Chaque jour aura la couleur de ton mood ~</h2>
        <p>Sélectionne ton mood du jour</p>
        <i
          className="fa-regular fa-face-laugh-beam fa-2xl"
          style={{ color: "#2d6b5f" }}
          onClick={() => setMood("#2d6b5f")}
        ></i>
        <i
          className="fa-regular fa-face-smile-beam fa-2xl"
          style={{ color: "#72e3a6" }}
          onClick={() => setMood("#72e3a6")}
        ></i>
        <i
          className="fa-regular fa-face-meh fa-2xl"
          style={{ color: "#dff4c7" }}
          onClick={() => setMood("#dff4c7")}
        ></i>
        <i
          className="fa-regular fa-face-frown fa-2xl"
          style={{ color: "#edbf98" }}
          onClick={() => setMood("#edbf98")}
        ></i>
        <i
          className="fa-regular fa-face-sad-tear fa-2xl"
          style={{ color: "#ea3d36" }}
          onClick={() => setMood("#ea3d36")}
        ></i>
        <p>Ensuite clique sur le jour concerné !</p>
      </div>

      <div className="container-calendar">
        {months.map((month, index) => (
          <div key={index}>
            <h3>{month}</h3>
            <div className="week-days-container">
              {weekDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="mood-container">
              {dates.map((date, dateIndex) => {
                if (date.getMonth() === index) {
                  return (
                    <button
                      style={{ backgroundColor: activeColor }}
                      key={dateIndex}
                      className="days"
                      onClick={() => handleMoodClick(mood)}
                    >
                      {date.getDate()}
                    </button>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
