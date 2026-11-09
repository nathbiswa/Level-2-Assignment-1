Generics in TypeScript and Their Role in Asynchronous Programming
Introduction
Generics allow developers to write reusable code while preserving type safety. Instead of fixing a function to one data type, we can make it work with different types. TypeScript uses type parameters, commonly written as T, to represent these types. Generics are especially useful when handling arrays, reusable utilities, and asynchronous data.
How Generics Work
Consider a function that returns the first item of an array. Without generics, separate functions might be needed for strings and numbers. A generic function solves this problem:
function getFirst<T>(items: T[]): T | undefined {
return items[0];
}

const firstName = getFirst<string>(["Mina", "Rafi"]);
const firstScore = getFirst<number>([85, 92]);
TypeScript can often infer T, so explicitly writing <string> or <number> is optional. The return type remains connected to the input type.

Generics also work with Promises. A Promise<T> describes a promise that will eventually produce a value of type T. For example:
async function getUserName(): Promise<string> {
return "Mina";
}

async function getUserId(): Promise<number> {
return 42;
}
The Promise<string> annotation tells callers that awaiting the function produces a string. Similarly, Promise<number> produces a number. This makes asynchronous code easier to understand and helps TypeScript detect incorrect values.
Conclusion
Generics make functions flexible without sacrificing type checking. The Promise<T> pattern applies the same idea to future results, giving asynchronous functions clear and reliable return types.
