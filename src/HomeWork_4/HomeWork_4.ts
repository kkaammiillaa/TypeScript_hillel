// Створіть класи Circle, Rectangle, Square і Triangle. У кожного з них є загальнодоступний
//  метод calculateArea.У кожної фігури є загальнодоступні властивості - колір і назва,
// які не можна змінювати після створення.У Square і Rectangle зі свого боку є
// ще додатковий метод print, який виводить рядок із формулою розрахунку площі

// ------------------------------------  with interface  ----------------------------------------

// interface IFigure {
//   readonly name: string;
//   readonly color: string;
// }

// class Circle implements IFigure {
//   constructor(public readonly name: string, public readonly color: string) {}
//   public calculateArea(radius: number): number {
//     return 2 * 3.14 * radius;
//   }
// }
// class Rectangle implements IFigure {
//   constructor(public readonly name: string, public readonly color: string) {}
//   public calculateArea(a: number, b: number): number {
//     return a * b;
//   }
//   public print(): string {
//     return 'S = a * b';
//   }
// }
// class Square implements IFigure {
//   constructor(public readonly name: string, public readonly color: string) {}
//   public calculateArea(a: number): number {
//     return a * a;
//   }
//   public print(): string {
//     return 'S = a * a';
//   }
// }
// class Triangle implements IFigure {
//   constructor(public readonly name: string, public readonly color: string) {}
//   public calculateArea(a: number, b: number, c: number): number {
//     const p: number = a + b + c;
//     return Math.sqrt(p * (p - a) * (p - b) * (p - c));
//   }
// }

// -------------------------------------------- with abstract class ------------------------------------------------------
abstract class Figure {
  public abstract readonly name: string;
  public abstract readonly color: string;
  public abstract calculateArea(a: number, b?: number, c?: number): number;
}

class Circle extends Figure {
  constructor(public readonly name: string, public readonly color: string) {
    super();
  }
  public calculateArea(radius: number): number {
    return 2 * 3.14 * radius;
  }
}
class Rectangle extends Figure {
  constructor(public readonly name: string, public readonly color: string) {
    super();
  }
  public calculateArea(a: number, b: number): number {
    return a * b;
  }
  public print(): string {
    return 'S = a * b';
  }
}
class Square extends Figure {
  constructor(public readonly name: string, public readonly color: string) {
    super();
  }
  public calculateArea(a: number): number {
    return a * a;
  }
  public print(): string {
    return 'S = a * a';
  }
}
class Triangle extends Figure {
  constructor(public readonly name: string, public readonly color: string) {
    super();
  }
  public calculateArea(a: number, b: number, c: number): number {
    const p: number = a + b + c;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
  }
}
