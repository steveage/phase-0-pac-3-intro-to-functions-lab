function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
      let returnMessage;

      if (string===string.toLowerCase()) {
          returnMessage = "I can\'t hear you!";
      }
      else if (string ===string.toUpperCase()) {
          returnMessage = "YES INDEED!";
      }
      else if (string ==="Let's have dinner together!") {
          returnMessage = "I would love to!";
      }
      return returnMessage;
  }