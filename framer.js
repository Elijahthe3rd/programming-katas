function frame(arr) {
    
    //var len = getLongestStr(arr);
    var len = getLongestStr(arr.slice(0));

    console.log(padRight("", len + 4, "*"));

    arr.forEach((txt) => {
        console.log("* " + padRight(txt, len) + " *");

    });

    console.log(padRight("", len + 4, "*"));
}

function getLongestStr(arr) {
    return arr.sort(function(a, b) {
        return b.length - a.length;
    })
    [0].length;
}

function padRight(nr, n, str) {
    return nr + Array(n - String(nr).length + 1).join(str || " ");
}

frame(["Write","good","code","every","day"])