function say () {
  console.log('hello');
  test(-1);
}
function test (a) {
  if (a < 0) {
   a = -a;
  }
  return a;
}
say();
222
111
