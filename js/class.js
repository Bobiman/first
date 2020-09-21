class Square {
  constructor(imenavrednost) {
    this.strana1 = imenavrednost;
    this.strana2 = this.strana1;
  }
  getStrana() {
    return this.strana1;
  }
  get area() {
    return this.strana1 * this.strana2;
  }
  set strana(vrednostNaStrana) {
    this.strana1 = vrednostNaStrana;
    this.strana2 = vrednostNaStrana;
  }
  static povNa2Kocki(a, b) {
    return a.strana1 * a.strana2 + b.strana1 * b.strana2;
  }
}

let mysquare1 = new Square(4);
let mysquare2 = new Square(5);
Square.povNa2Kocki(mysquare1, mysquare2);
mysquare1.getStrana();

//nasleduvanje na klasa -->
// class Person{
//     constructor(asd){
//         this.strana1=askjd;
//     }
// }
// class Programmer extends Person{
//     constructor(asd,dsa){
//         super(asd);
//         this.strana2=dsa;
//     }
// }
