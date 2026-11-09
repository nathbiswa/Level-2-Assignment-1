// Problem 1

function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier === undefined) {
    return value * 2;
  }

  return value * multiplier;
}

// Problem 2

function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

// Problem 3

function formatCoordinate(value: readonly [number, number, string]): string {
  const latitude = value[0];
  const longitude = value[1];
  const locationName = value[2];

  return `Location: ${locationName} (${latitude},${longitude})`;
}

// We can use to both function

// function concatenateArrays<T>(...arrays: T[][]): T[] {
//   return arrays.flat();
// }

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return ([] as T[]).concat(...arrays);
}

// Prblem 5

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter((course) => {
    return course.isPublished === true && course.students >= minStudents;
  });
}

// Problem 6
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

// Problem 7

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");

// Problem 8

function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}

async function main() {
  try {
    const result1 = await validateAgeAsync(20);
    console.log(result1);
  } catch (error) {
    console.log(error);
  }

  try {
    const result2 = await validateAgeAsync(15);
    console.log(result2);
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}

main();
