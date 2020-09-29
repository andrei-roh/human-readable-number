module.exports = function toReadable (number) {
  const readableNumbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const readableDozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let n = number.toString();
  if (number === 0){
    return number = 'zero'
  }
  else if (number < 20){
    return number = readableNumbers[number]
  }
  else if (number < 100){
    return number = (readableDozens[parseInt(number / 10)] + ' ' + readableNumbers[parseInt(number % 10)]).trim()
  }
  else if (number >= 100) {
    if (parseInt(number%100) < 20){
    return number = (readableNumbers[parseInt(number / 100)] + ' hundred ' + readableNumbers[parseInt(n.substring(1))]).trim()
    }
    else {
    return number = (readableNumbers[parseInt(number / 100)] + ' hundred ' + readableDozens[parseInt(n[1])] + ' ' + readableNumbers[parseInt(n[2])]).trim()
    }
  }
}
