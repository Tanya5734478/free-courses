var a = Math.abs(+process.argv[1]);
var b = Math.abs(+process.argv[2]);

process.stdout.write(String(greatestCommonDiviser(a, b)));

function greatestCommonDiviser(a, b) {
    if (b == 0) {
        return Math.abs(a);
    }
    return greatestCommonDiviser(b, a % b);
}