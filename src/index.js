module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    let words = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    let ones = number % 10;
    let tens = Math.floor(number / 10) % 10;
    let hundreds = Math.floor(number / 100);
    let resultString = "";

    if (!!hundreds) resultString = words[hundreds] + " hundred ";

    if (!!ones) {
        if (!!tens) {
            if (tens === 1) {
                resultString += words[`${tens}${ones}`];
            } else {
                resultString += words[`${tens}0`] + " " + words[`${ones}`];
            }
        } else {
            resultString += words[`${ones}`];
        }
    } else {
        if (!!tens) resultString += words[`${tens}0`];
    }

    return resultString.trim();
};
