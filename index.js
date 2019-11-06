function randomPosNeg() {
    let magicNum = Math.round(Math.random());
    if(magicNum == 0) {
        return 0;
    } else if(magicNum == 1) {
        return 1;
    }
};

function setCharAt(str, index, chr) {
    if(index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
}
let newI = 0;
setTimeout(function() {
    for(let i = 0; i != 15; i++) {
        setTimeout(function() {
            document.getElementById("header-title").innerHTML = setCharAt(document.getElementById("header-title").innerHTML, newI, randomPosNeg());
            newI++;
            if(newI == 4) {
                newI = 0;
            }
        }, 400 * i);
    }
}, 2500);
setTimeout(function() {
    document.getElementById("header-title").innerHTML = setCharAt(document.getElementById("header-title").innerHTML, 0, "B");
}, 8900);
setTimeout(function() {
    document.getElementById("header-title").innerHTML = setCharAt(document.getElementById("header-title").innerHTML, 1, "Y");
}, 9300);
setTimeout(function() {
    document.getElementById("header-title").innerHTML = setCharAt(document.getElementById("header-title").innerHTML, 2, "T");
}, 9700);
setTimeout(function() {
    document.getElementById("header-title").innerHTML = setCharAt(document.getElementById("header-title").innerHTML, 3, "e");
}, 10100);