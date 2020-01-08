function charCount(myChar, str) {
	let subStr = Array.from(str);
  let counter = {};
  subStr.forEach(function(myChar){
    if(!counter.hasOwnProperty(myChar)){
      counter[myChar]=0;
    }
    counter[myChar]++;
  })
  return counter;
}

charCount('1', 'he110')