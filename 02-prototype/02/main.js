

Function.prototype.defer = function(time) {
    setTimeout(f, time)
}
function f() {
    alert('Hello!');
  }


//   
f.defer(3000)