var a = Math.abs(+process.argv[1]);
var b = Math.abs(+process.argv[2]);

greatestCommonDiviser(a, b)

function greatestCommonDiviser (a, b) {
    while (a != b && a > 0 && b > 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }

    process.stdout.write("" + a);
}