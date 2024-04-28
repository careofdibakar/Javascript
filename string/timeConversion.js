function timeConversion(s) {
  let amORpm = s.slice(8);
  let convertedHour, convertedFullTime;
  let restTime = s.slice(3, 8);
  switch (amORpm) {
    case "AM":
      if (parseInt(s.slice(0, 2)) == 12) {
        convertedHour = "00";
      } else {
        convertedHour = parseInt(s.slice(0, 2));
      }
      convertedFullTime = `${convertedHour}:${restTime}`;
      return convertedFullTime;
      break;

    case "PM":
      if (parseInt(s.slice(0, 2)) == 12) {
        convertedHour = 12;
      } else {
        convertedHour = parseInt(s.slice(0, 2)) + 12;
      }

      convertedFullTime = `${convertedHour}:${restTime}`;
      return convertedFullTime;
      break;

    default:
      break;
  }
}

console.log(timeConversion("01:01:00PM"));
