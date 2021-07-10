module.exports = {
    format_time: (date) => {
      const month = date.getMonth() + 1
      const day = date.getDate()
      let hour = date.getHours()
      const suffix = "AM"
      if(hour > 12) {
        hour = hour - 12;
        suffix = "PM"
      }
      else if(hour == 0) {
        hour = 12;
      }
      let minutes = date.getMinutes()
      if(minutes < 10) {
        minutes = `0${minutes}`
      }
      return(`${hour}:${minutes}${suffix} - ${month}/${day}`)
    }
  };
  