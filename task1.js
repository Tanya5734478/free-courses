var word = (process.argv[2]);
var result = "";

for (var i = 0; i < word.length; i++) {
        if (word[i] !== "К" && word[i] !== "к"
        	&& word[i] !== "Р" && word[i] !== "р"
        	&& word[i] !== "Н" && word[i] !=="н") {
                result += word[i];
        }
}

process.stdout.write(result);
