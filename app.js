// your code here!

function getFormInput() {
  $('#user-text-input').submit(function(event) {
  event.preventDefault();
  //$(".js-results").empty();
  var rawUserInput = $(event.currentTarget).find('textarea[name="user-text"]').val(); 
  //writeFizzBuzz(userNum);
   //$(".js-results").text('<p>' + $(userNum)[0] + '</p>');
   console.log(rawUserInput);
  var processedInput = getTokens(rawUserInput);
  //$('dl.text-report').removeClass('hidden');
  $('p.output').text(rawUserInput);

  //writeWordAnalysis(processedInput);
  });
}

function getTokens(rawUserInput) {
  // NB: `.filter(Boolean)` removes any falsy items from an array
  return rawUserInput.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}
  
function mostFrequentWord(text) {
  var words = getTokens(text);
  var wordFrequencies = {};
  for (var i = 0; i <= words.length; i++) {
    if (words[i] in wordFrequencies) {
      wordFrequencies[words[i]]++;
    }
    else {
      wordFrequencies[words[i]]=1;
    }
  }
  var currentMaxKey = Object.keys(wordFrequencies)[0];
  var currentMaxCount = wordFrequencies[currentMaxKey];
  
  for (var word in wordFrequencies) {
    if (wordFrequencies[word] > currentMaxCount) {
      currentMaxKey = word;
      currentMaxCount = wordFrequencies[word];
    }
  }
  return currentMaxKey;
}

getFormInput();