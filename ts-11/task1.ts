// 1. Создайте interface ItEmployee
// 2. В интерфейсе ItEmployee сделайте поле name которое может быть только string
// 3. В интерфейсе ItEmployee сделайте поле surname которое может быть только string
// 4. В интерфейсе ItEmployee сделайте поле salary которое может быть только number и доступно только для чтения
// 5. Создайте тип данных Grade для стринговой переменной, которая может принимать значения: junior, middle, senior, lead
// 6. В интерфейсе ItEmployee сделайте поле grade типа Grade
// 7. Создайте enum OCCUPATION, который будет представлять професси в айти вида DEVELOPER = "Developer" и так далее
// 8. В интерфейсе ItEmployee сделайте поле occupation типа OCCUPATION
// 9. Создайте интерфейс IAddress, предствляющий объект с полями country, street, house, flat
// 10. В интерфейсе ItEmployee сделайте необязательное поле address типа IAddress
// 11. В интерфейсе ItEmployee сделайте projectNames, типа массив строк (названий проектов)
// 12. Создайте объект с типом ItEmployee

type Grade = 'junior' | 'middle' | 'senior' | 'lead';

enum OCCUPATION {
    DEVELOPER = 'Developer',
    QA = 'QA',
    PM = 'Project Manager',
    DO = 'DevOps',
    SDET = 'Automation QA'
}

interface ItEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    grade: Grade;
    occupation: OCCUPATION;
    address? : IAddress;
    projectNames: string[]
}

interface IAddress {
    country: string;
    street: string;
    house: number;
    flat: number;
}

let me: ItEmployee = {
    name: 'Anna',
    surname: 'Voronova',
    salary: 300,
    grade: 'junior',
    occupation: OCCUPATION.QA,
    projectNames: ['course', 'internship', 'pet project', 'dreamwork!']
}
function getEmployeeInfoIT(
    employee:{
        name: string , 
        surname: string , 
        readonly salary: number ,  
        address? : IAddress ,
        projectNames: string[],
    }){
            return `Employee ${employee.name} ${employee.surname}, income ${employee.salary}, projects ${employee.projectNames}`
        }
console.log(me);

//task 2.1

// 1. Создайте интерфейс IEmployee с полями name, surname, salary, address (типы для этих полей такие же как в ItEmployee из таск 1)
//   Создайте функцию getEmployeeInfo(employee), выводящую в консоль всю информацию про employee (формат текста придумать самим)
//   Создайте type guard isItEmployee, принимающий юнион типов IEmployee и ItEmployee. Используйте его в функции getEmployeeInfo. 
//   Если на входе itEmployee - выводите в консоль все поля айтишника (а не только те, что в employee)
//   Функция должна принимать union type между IEmployee и ItEmployee, и через тайпгвард определять что за объект и как работать с ним 
interface IEmployee {
    name: string;
    surname: string;
    readonly salary: number;
    address?: IAddress;
}
let anna: IEmployee = {
    name: 'Anna',
    surname: 'Voronova',
    salary: 300,

}
function getEmployeeInfo(
    employee: IEmployee) {
    return `Employee ${employee.name} ${employee.surname}, income ${employee.salary}`
}
function isItEmployee(employee: IEmployee | ItEmployee): employee is ItEmployee {
    return "occupation" in employee;
}

function isInItGetDetails(workerOrIt: IEmployee | ItEmployee) {
    if (isItEmployee(workerOrIt)) {
        return (`Employee ${workerOrIt.name} ${workerOrIt.surname}, income ${workerOrIt.salary}, projects ${workerOrIt.projectNames}. Works in IT`);
    } else {
        return(`Employee ${workerOrIt.name} ${workerOrIt.surname}, income ${workerOrIt.salary}. Not in IT`)
    }
}
console.log(isInItGetDetails(anna));
console.log(isInItGetDetails(me));
