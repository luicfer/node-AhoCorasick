var createTrie = require("array-trie");
var createAC = require("aho-corasick-automaton");

var ac = module.exports = function () {
    this._tree = createTrie();
};

/**
 * add a string as a pattern
 * @param string
 */
ac.prototype.add = function (string) {
    var len = string.length;
    var arr = [];
    for(var i = 0; i < len; i++) {
        arr.push(string.charCodeAt(i));
    }
    this._tree.set(arr,string);
};

/**
 * build the aho-corasick-automaton
 */
ac.prototype.build = function () {
    this._root = createAC(this._tree);
};

/**
 * match the patterns
 * @param {String} string
 * @returns {String[]}
 */
ac.prototype.search = function (string) {
    if(!this._root) throw Error("please build before search");
    var data = string.split('').map(function (it) {
        return it.charCodeAt(0);
    });
    var res = [];
    for(var state=this._root, i=0; i<data.length; ) {

        state=state.push(data[i++]);

        if(state.value ) {
            for(var cur = state; cur.value ; cur = cur.next) {
                res.push(cur.value);
            }
        }
    }
    return res;
};