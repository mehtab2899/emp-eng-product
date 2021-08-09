export default class JS {
  static dateTime = () => {
    const date = new Date();

    // day
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var dayName = days[date.getDay()];

    const output = dayName + ",";
    return output;
  };
}
