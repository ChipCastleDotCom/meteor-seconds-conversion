SecondsConversion = {
  duration: function(seconds) {
    var converted = '0:00';
    try {
      if (!seconds || isNaN(parseFloat(seconds))) {
        throw new Error('requires a positive integer');
      }
      var SECONDS_PER_MINUTE = 60;
      var SECONDS_PER_HOUR = 60 * SECONDS_PER_MINUTE;

      var remainder = seconds;

      var hours = parseInt(remainder / SECONDS_PER_HOUR, 10);
      remainder -= (hours * SECONDS_PER_HOUR);

      var minutes = parseInt(remainder / SECONDS_PER_MINUTE, 10);
      remainder -= (minutes * SECONDS_PER_MINUTE);

      if (hours !== 0) {
        converted = sprintf("%d:%02d:%02d", hours, minutes, remainder);
      } else if (minutes !== 0) {
        converted = sprintf("%d:%02d", minutes, remainder);
      } else {
        converted = sprintf("0:%02d", remainder);
      }
    }
    catch(e) {
      return e.message;
    }
    finally {
      return converted;
    }
  }
};
