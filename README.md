# node-AhoCorasick

Aho–Corasick string matching algorithm
[![Build Status](https://travis-ci.org/luicfer/node-AhoCorasick.svg?branch=master)](https://travis-ci.org/luicfer/node-AhoCorasick)[![Coverage Status](https://coveralls.io/repos/luicfer/node-AhoCorasick/badge.svg)](https://coveralls.io/r/luicfer/node-AhoCorasick)
# Installation

```bash
npm install node-aho-corasick
```

# Example

```js
var AhoCorasick = require('node-aho-corasick');

ac = new AhoCorasick();
ac.add('123');
ac.add('321');
ac.build();
var res = ac.search('12321');
// ["123","321"]

```

