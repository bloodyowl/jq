# jq

jq adds shortcuts to jQuery to make you code faster and more productively

## methods

[here](https://github.com/bloodyowl/jq/blob/master/index.js#L3-L26)

## e.g.

```javascript
var dollars = require("jq")

dollars(".content ul li")
  .o("click", function(e){
    console.log(e)
    dollars(this)
      .ac("foo")
      .s()
  })
  .hi()
```
