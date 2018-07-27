function shout(it) {
  return it.toUpperCase()
}

function whisper(it) {
  return it.toLowerCase()
}

function logShout(it) {
  console.log(it.toUpperCase())
}

function logWhisper(it) {
  console.log(it.toLowerCase())
}

function sayHiToGrandma(string) {
  var stringUpper = string.toUpperCase()
  var stringLower = string.toLowerCase()
  
  if (string === stringUpper)
    return "I can't hear you!"
  else if (string === stringLower)
    return "YES INDEED!"
  else if (string === "I love you, Grandma.")
    return "I love you, too"
  else
    return "Whhhatt are those??"
}