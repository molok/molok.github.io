import { defaultSalt, water } from "../model/index";
import { reducers } from "./index";
import { Actions } from "../actions";
import { createStore } from "redux";
it('filter salts', function () {
    var defaultState = { target: water("target"),
        sources: [water("water #1")],
        salts: [defaultSalt()]
    };
    var store = createStore(reducers, defaultState);
    expect(store.getState().salts).toHaveLength(1);
    store.dispatch(Actions.removeSalt(0));
    expect(store.getState().salts).toHaveLength(0);
});
it('promises', function () {
    var x = new Promise(function (resolve, reject) {
        console.log('bef');
        // setTimeout(2000);
        console.log('aft');
        resolve('ok');
    });
    x.catch(function (r) {
        console.log('errr: ', r);
    }).then(function (res) {
        console.log('res:', res);
    });
});
var doit = function (x) {
    switch (x.type) {
        case "A": return x.payload.a + 10;
        case "B": return x.payload.b + 20;
    }
};
it('typescript is cool', function () {
    console.log(doit({ type: "A", payload: { a: 100 } }));
    console.log(doit({ type: "B", payload: { b: 100 } }));
});
it('mapped', function () {
    var z = "foo";
    console.log(typeof z);
    // var z: Readonly<Point> = { x: 10, y: 20};
    // type Stringify<T> = {
    //     [P in keyof T]: string;
    // };
    // console.log(keyof Point);
});
//# sourceMappingURL=index.test.js.map