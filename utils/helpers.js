module.exports = {
    format_time: (date) => {
      let month = date.getMonth() + 1
      let day = date.getDate()
      let hour = date.getHours()
      let suffix = "AM"
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
      const year = date.getFullYear()
      return(`${month}/${day}/${year} - ${hour}:${minutes}${suffix}`)
    }
  };
  