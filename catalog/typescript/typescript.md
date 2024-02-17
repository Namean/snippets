# Snippets / TypeScript

## Snippets / TypeScript / W3Schools

0.  TS Introduction
1.  TS Get Started
2.  TS Simple Types
3.  TS Special Types
4.  TS Arrays
5.  TS Tuples
6.  TS Object Types
7.  TS Enums
8.  TS Aliases & Interfaces
9.  TS Union Types
10. TS Functions
11. TS Casting
12. TS Classes
13. TS Basic Generics
14. TS Utility Types
15. TS Keyof
16. TS Null
17. TS Definitely Typed
18. TS v5.0 Updates

## 0. TS Introduction

## 1. TS Get Started

## 2. TS Simple Types

## 3. TS Special Types

## 4. TS Arrays

## 5. TS Tuples

## 6. TS Object Types

TypeScript has a specific syntax for typing objects.

#### Example 1

snippet1.ts / car.ts

```ts
const car: { type: string; model: string; year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};
```

### Type Inference

TypeScript can infer the types of properties based on their values.

```ts
// snippet2.ts

const car = {
  type: "Toyota",
};

car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'
```

### Optional Properties

Optional properties are properties that don't have to be defined in the object definition.

#### Example without an optional property

```ts
// snippet3.ts
const car: { type: string; mileage: number } = {
  // Error: property 'mileage' is missing in type '{ type: string; }'
  // but required in type '{type: string; mileage: number; }'.
  type: "Toyota",
};
car.mileage = 2000;
```

### Optional Properties

Optional properties are properties that don't have to be defined in the object definition.

#### Example **without** an optional property

snippet4.ts / car.ts

```ts
const car: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type
  // '{ type: string; }' but required in type '{ type: string; mileage: number ; }'.
  type: "Toyota",
};
car.mileage = 2000;
```

#### Example **with** an optional property

snippet4.ts / car.ts

```ts
const car: { type: string; mileage?: number } = {
  type: "Toyota",
};

car.mileage = 2000;
```

####

snippet4.ts / car.ts

```ts

```

### Index Signatures

Index signatures can be used for objects without a defined list of properties.

####

snippet4.ts / car.ts

```ts
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
```

## 7. TS Enums

## 8. TS Aliases & Interfaces

## 9. TS Union Types

## 10. TS Functions

## 11. TS Casting

## 12. TS Classes

## 13. TS Basic Generics

## 14. TS Utility Types

## 15. TS Keyof

## 16. TS Null

## 17. TS Definitely Typed

## 18. TS v5.0 Updates
