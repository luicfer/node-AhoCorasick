# node-AhoCorasick

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

