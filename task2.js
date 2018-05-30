var str1 = (process.argv[1]);
var str2 = (process.argv[2]);

process.stdout.write(String(getMinMove(str1, str2)));

function getMinMove(str1, str2) {
    var arrFirstInput = str1.split("");
    var arrSecondInput = str2.split("");

    var arrFirstInputRightMove = arrFirstInput.slice(0, arrFirstInput.length);

    for (var i = 0; i < arrFirstInputRightMove.length; i++) {
        if (arrFirstInputRightMove.join("") === arrSecondInput.join("")) {
            return Math.min(i, arrFirstInput.length - i);
        }

        arrFirstInputRightMove.push(arrFirstInputRightMove.shift());
    }

    return -1;
}