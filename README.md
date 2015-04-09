# node-AhoCorasick
[![Build Status](https://travis-ci.org/luicfer/node-AhoCorasick.svg?branch=master)](https://travis-ci.org/luicfer/node-AhoCorasick)
[![Coverage Status](https://coveralls.io/repos/luicfer/node-AhoCorasick/badge.svg)](https://coveralls.io/r/luicfer/node-AhoCorasick)
[![Dependency Status](https://david-dm.org/luicfer/node-AhoCorasick.svg)](https://david-dm.org/luicfer/node-AhoCorasick)
[![devDependency Status](https://david-dm.org/luicfer/node-AhoCorasick/dev-status.svg)](https://david-dm.org/luicfer/node-AhoCorasick#info=devDependencies)

Aho–Corasick string matching algorithm
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

