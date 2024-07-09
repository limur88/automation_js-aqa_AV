// 1. Создайте дженерик функцию getFirstElement, которая принимает массив элементов типа T, и возвращает первый элемент (типа T).
function getFirstElement<T>(array : T[]) : T{
return array[0]
}
const arr = [1, 2, 3];
console.log(getFirstElement(arr));

// 2. Создайте интерфейс Person, абстрактный класс Employee, который реализует интерфейс Person, и конкретные классы Manager и Developer.
//   - Интерфейс Person должен содержать:
//       Стринговые поля: name, surname, experienceYears
//       Метод, возвращающий строку: getDetails().
interface IPerson{
name: string;
surname: string;
experienceYears: number;
getDetails():void;
}

//   - Абстрактный класс Employee должен:
//       Реализовывать интерфейс Person.
//       Содержать защищенное поле: salary, не передающееся в конструктор (по дефолту 0)
//       Содержать защищенный абстрактный метод: calculateSalary().,
//         который считает зарплату и вызывается в конструкторе, и будет реализован в наследниках
abstract class Employee implements IPerson{
    constructor ( public name: string, public surname: string, public experienceYears: number){};
    protected abstract salary:number;
    public getDetails(): void {
        console.log(`Employee ${this.name} ${this.surname}`);
    }
    protected abstract calculateSalary(): void;
}  
//   - Конкретные классы Manager и Developer должны:
//       Наследоваться от Employee.
//       Класс менеджер должен на конструкторе получать поле prefered, которое может быть только 'scrum' или 'kanban'
//       Класс девелопер должен на конструкторе получать поле programmingLanguage, который может быть 'js', 'ts', 'java', 'python'
//       Метод calculateSalary должен для менеджера устанавливать зарплату по формуле: количество лет опыта * 500
//       Метод calculateSalary должен для девелопера устанавливать зарплату по формуле: количество лет опыта * 1000
//       Реализовывать метод getDetails(), который должен выводить полную информацию об объекте вида:
//         'My name is Elena TSovna, I am software developer with 6 years of experience in TypeScript and 6000$ salary' (пример для девелопера)
type Prefered = "scrum" | "kanban";
type programmingLanguage = "js" | "ts" | "java" | "pyton";
class Manager extends Employee{
    protected salary!: number;
    constructor ( public name: string, public surname: string, public experienceYears: number, public prefered: Prefered){
        super(name, surname, experienceYears);
    };
    calculateSalary(){
        return this.salary = this.experienceYears * 500;
    }
    public getDetails(): void {
        console.log(`Manager ${this.name} ${this.surname}, prefere ${this.prefered}, gets ${this.calculateSalary()}`);
    }
   

}

class Developer extends Employee{
    constructor ( public name: string, public surname: string, public experienceYears: number, public language :programmingLanguage){
        super(name, surname, experienceYears);
    };
    protected salary!: number;
    public calculateSalary(){
        return this.salary = this.experienceYears * 1000;
    }
    public getDetails(): void {
        console.log(`Developer ${this.name} ${this.surname}, knows ${this.language}, gets ${this.calculateSalary()}`);
    }
}

const jane = new Manager( "Jane", "Snow", 3, "scrum");
const jack = new Developer("Ken", "Dawson", 2, "js");
jane.getDetails();
jack.getDetails();
console.log(jane);
