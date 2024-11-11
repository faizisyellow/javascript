var artist; // undefined
var ARTIST_DEFAULT; //undefined

ARTIST_DEFAULT = "lizzy";
artist = "lawrance";

function getArtist() {
  if (!artist) {
    var artist = ARTIST_DEFAULT;
  }
  return artist;
}

console.log(`OUTPUT: ${getArtist()}`);

var y = "Defined here!!";

function foo() {
  var x = 1;
  function bar() {
    var y = 2;
    console.log(x);
    console.log(y);
  }
  bar();
  console.log(x);
  console.log(y);
}

foo();

if (true) {
  var i = "hello world!";
}
console.log(i);
