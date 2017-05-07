// your code here!

function getTokens(rawString) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawString.toString().toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

function getFormInput() {
  $('#user-text-input').submit(function(event) {
  event.preventDefault();
  var rawInput = $(event.currentTarget).find('textarea[name="user-text"]').val(); 
  var text = getTokens(rawInput);
  printWordStats(doWordStats(text));

  });
}

function getWordAvgLength(words) {
  var wordSum = words.reduce( function(sum, word) { return sum + word.length; }, 0 );
  return (wordSum / words.length).toFixed(2); //average of length (of each word)
}

function wordsUnique(words) {
  uniqueWordList = Array.from(new Set(words));
  return String(uniqueWordList.length);
}

function doWordStats(text) {
  var words = getTokens(text);
  var wordCount = words.length;
  var uniqueWordLength = wordsUnique(words);
  var avgWordLength = getWordAvgLength(words);
  return [wordCount, uniqueWordLength, avgWordLength];
}

function printWordStats(wordStats) {
  var wordCount = wordStats[0];
  var uniqueWordLength = wordStats[1];
  var avgWordLength = wordStats[2];
  
  $("dl.text-report").removeClass('hidden');
  $(".word-count").text(wordCount);
  $(".unique-word-length").text(uniqueWordLength);
  $(".avg-word-length").text(avgWordLength);
}

getFormInput();