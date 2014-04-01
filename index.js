var $ = require("jquery")
  , methods = {
      "each" : "e",
      "map" : "m",
      "first" : "f",
      "last" : "l",
      "filter" : "fi",
      "not" : "n",
      "is" : "i",
      "has" : "h",
      "closest" : "c",
      "next" : "nx",
      "prev" : "p",
      "parent" : "pa",
      "parents" : "ps",
      "children" : "ch",
      "remove" : "r",
      "animate" : "a",
      "val" : "v",
      "addClass" : "ac",
      "removeClass" : "rc",
      "toggleClass" : "tc",
      "on" : "o",
      "css" : "cs",
      "show" : "s",
      "hide" : "hi"
    }

Object.keys(methods)
  .forEach(function(key){
    $.fn[methods[key]] = $.fn[key]
  })

module.exports = $
