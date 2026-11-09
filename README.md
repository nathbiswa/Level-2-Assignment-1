TypeScript Practice & Assignment
A collection of TypeScript exercises, solutions, and technical blog posts
This repository contains practice solutions for TypeScript problems and two short technical blog posts. It is organized so that readers can quickly find the source code, understand the topics covered, and run the examples locally.
📌 Project Overview
The assignment focuses on important TypeScript concepts, including:

- Function parameters, optional parameters, and return types
- Union types and type narrowing
- Readonly tuples
- Generics and generic constraints
- Interfaces and array filtering
- Classes, inheritance, and access modifiers
- Promises and asynchronous programming
  The repository also includes two blog posts explaining selected TypeScript concepts with examples.
  📁 Repository Structure
  ├── solutions.ts
  ├── generics-and-promises.md
  ├── access-modifiers-in-typescript.md
  └── README.md
  Replace the two blog filenames with your chosen topic-based names if you decide to rename the blog files.

File Description
solutions.ts TypeScript solutions for Problems 1–8
generics-and-promises.md Blog: Generics and asynchronous Promise<T>
access-modifiers-in-typescript.md Blog: Access modifiers in TypeScript OOP
README.md Project overview and usage instructions

🧠 Topics Covered
TypeScript coding exercises

1. Optional function parameters and default values
2. Union types and typeof narrowing
3. Readonly tuple types
4. Generic functions and array concatenation
5. Interfaces and filtering arrays of objects
6. keyof constraints and indexed access types (T[K])
7. Classes, inheritance, private, and protected
8. Promises, resolve, reject, and setTimeout
   Technical blog posts

- Generics in TypeScript and Their Role in Asynchronous Programming
- Access Modifiers in TypeScript Object-Oriented Programming
  ⚙️ Requirements
  To run or type-check the TypeScript solutions, install:
- Node.js
- TypeScript
  Install TypeScript in your project:
  npm install --save-dev typescript
  ▶️ How to Check the TypeScript File
  Run the TypeScript compiler:
  npx tsc solutions.ts --noEmit
  The --noEmit option checks for TypeScript errors without generating a JavaScript file.

To compile the file into JavaScript:
npx tsc solutions.ts
If you want to execute the compiled JavaScript, use:
node solutions.js
Note: The solutions.ts file contains function and class definitions only. It intentionally does not include console.log() statements or sample test calls, as required by the assignment. Add test calls in a separate file if you want to try the solutions.
✍️ Assignment Notes

- Function parameters and return types are explicitly typed.
- Generic constraints are used where required.
- The solutions avoid the any type.
- Function and class names follow the assignment specifications.
- Return strings follow the required wording and capitalization.
- Each blog post is kept in a separate Markdown file.
  📚 Learning Goals
  The goal of this project is to build a practical understanding of TypeScript's type system and object-oriented features. The examples demonstrate how to write reusable, readable, and type-safe code.
  Language: TypeScript and Markdown
  Project type: Learning assignment / practice repository
