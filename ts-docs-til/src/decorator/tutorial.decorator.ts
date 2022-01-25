function f() {
  console.log('f(): evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('f(): called');
  };
}

function g() {
  console.log('g(): evaluated');
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('g(): called');
  };
}

class C {
  @f()
  @g()
  method() {}
}

function main() {
  const c: C = new C();
  c.method();
}

main();
