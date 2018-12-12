import 'isomorphic-fetch';
export var MAX_INT_32BIT = 2147483647;
var waterToWs = function (water) {
    return {
        l: Math.min(water.l, MAX_INT_32BIT),
        name: water.name,
        ca: water.ca,
        mg: water.mg,
        na: water.na,
        so4: water.so4,
        cl: water.cl,
        hco3: water.hco3
    };
};
var saltToWs = function (salt) {
    return {
        dg: Math.min(salt.dg, MAX_INT_32BIT),
        name: salt.name,
        ca: salt.ca,
        mg: salt.mg,
        na: salt.na,
        so4: salt.so4,
        cl: salt.cl,
        hco3: salt.hco3
    };
};
var toWsInput = function (waters, salts, target) {
    return {
        target: waterToWs(target),
        waters: waters.map(function (w) { return waterToWs(w); }),
        salts: salts.map(function (s) { return saltToWs(s); })
    };
};
export var asyncFindRecipe = function (waters, salts, target) {
    var input = toWsInput(waters, salts, target);
    console.log("wsinput:", input);
    return fetch('https://m1ust5mpoa.execute-api.eu-west-1.amazonaws.com/Prod/calc', {
        body: JSON.stringify(input),
        method: 'POST',
    })
        .then(function (resp) { return resp.text(); })
        .then(function (txt) { console.log("API RESPONSE:", txt); return txt; })
        .then(function (txt) { return JSON.parse(txt).output; });
};
//# sourceMappingURL=Api.js.map