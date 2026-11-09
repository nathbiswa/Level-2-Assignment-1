# Access Modifiers in TypeScript Object-Oriented Programming

## Introduction

- Access modifiers control where class properties and methods can be used. TypeScript provides public, private, and protected modifiers, while readonly prevents a property from being reassigned after initialization. These features help developers design classes with clear boundaries and safer object-oriented code.

  # Understanding the Modifiers

  A public member can be accessed from inside or outside its class. It is the default visibility when no modifier is written. A private member can be accessed only inside the class that declares it. A protected member can be accessed inside its declaring class and its subclasses, but not directly from outside.
  class Employee {
  public position: string;
  protected name: string;
  private salary: number;
  readonly employeeId: number;

constructor(
name: string,
salary: number,
position: string,
employeeId: number
) {
this.name = name;
this.salary = salary;
this.position = position;
this.employeeId = employeeId;
}

public getSalary(): number {
return this.salary;
}
}

class Manager extends Employee {
getLabel(): string {
return `${this.name} - ${this.position}`;
}
}

# Here, Manager can use the protected name and public position inherited from Employee. It cannot access salary directly because that property is private. The public getSalary() method provides controlled access to the salary value. The employeeId property is readonly, so it can be assigned in the constructor but cannot later be reassigned.

# Conclusion

Access modifiers help encapsulate class data and define safe inheritance rules. Use private for internal details, protected for data intended for subclasses, public for the class's accessible API, and readonly for values that should not be reassigned.
