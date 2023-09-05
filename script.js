class Foo {
  Bar1() {
    console.log('Bar1');
    return this;
  }

  Bar2() {
    console.log('Bar2');
    return this;
  }
}

const obj = new Foo();

obj.Bar1().Bar2();

/* Bar1
Bar2 */
