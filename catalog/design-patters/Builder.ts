// https://www.dofactory.com/net/builder-design-pattern

// This pattern was built using the C# documentation
// However Dofactor also has information on JavaScript patterns
// nodemon --exec ts-node Builder.ts

abstract class Builder {
  public abstract BuildPartA(): void;
  public abstract BuildPartB(): void;
  public abstract GetResult(): Product;
}

class Director {
  constructor() {}

  public Construct(builder: Builder): void {
    builder.BuildPartA();
    builder.BuildPartB();
  }
}

// The 'Builder' abstract class

// interface Product {}

class Product {
  private _parts: string[] = [];

  constructor() {}

  public Add(part: string): void {
    this._parts.push(part);
  }

  public Show(): void {
    console.log("\nProduct Parts -------");
    this._parts.forEach((part) => console.log(part));
  }
}

// ConcreteBuilder1 class
// public abstract BuildPartA(): void;
//     public abstract BuildPartB(): void;
//     public abstract GetResult(): Product;

class ConcreteBuilder1 extends Builder {
  private _product: Product = new Product();

  public override BuildPartA(): void {
    this._product.Add("PartA");
  }

  public override BuildPartB(): void {
    this._product.Add("PartB");
  }

  public override GetResult(): Product {
    return this._product;
  }
}

class ConcreteBuilder2 extends Builder {
  private _product: Product = new Product();

  public override BuildPartA(): void {
    this._product.Add("PartX");
  }

  public override BuildPartB(): void {
    this._product.Add("PartY");
  }

  public override GetResult(): Product {
    return this._product;
  }
}

const b1 = new ConcreteBuilder1();
const b2 = new ConcreteBuilder2();
const director = new Director();

// Construct two products;
director.Construct(b1);
director.Construct(b2);

const p1: Product = b1.GetResult();
const p2: Product = b2.GetResult();

p1.Show();
p2.Show();
