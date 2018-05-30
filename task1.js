var word = (process.argv[1]);
process.stdout.write(blockFilter(word));

function blockFilter(word) {
	word = '' + word;
	var result = "";
	for (var i = 0; i < word.length; i++) {
        if (word[i] !== "К" && word[i] !== "к"
            && word[i] !== "Р" && word[i] !== "р"
            && word[i] !== "Н" && word[i] !== "н") {
                result += word[i];
        }
	}
	return result;
}
