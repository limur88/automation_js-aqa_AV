// Создайте дженерик класс Storage<T>, где T должен быть ограничен объектом, имеющим КАК МИНИМУМ {id: number}.
// Задача класса - хранить объекты типа Т в приватном массиве
// Реализуйте в классе следующие методы:
//   - constructor должен принимать необзятельный массив объектов соответствующего типа. 
//     Если массив пришел - объекты запушить в хранилище.
//   - add, принимающий либо объект типа Т, либо объект типа Т без id. Метод должен быть реализовать с помощью ПЕРЕГРУЗКИ.
//     Если на вход подан объект без айди - айди надо сгенерировать, затем запушить обьект в хранилище
//     Если на вход подан объект с айди - запушить его в хранилище
//     Для типизации используйте Utility Types
//   - update, принимающий объект с айди и любым набором остальных ключей из типа Т. 
//   - remove, принимающий на вход id и удаляющий объект из массива
//   - getById(id), возвращающий объект по айди если найден
//   - getAll(), возвращает все объекты в хранилище

class StorageClass<T extends { id: number }> {
    private records: T[] = [];

    constructor() {};

    private createId(): number{
        let newId = this.records.length ===0? 1: (Math.max(...this.records.map((record) => record.id))+1);
        return newId;
    
    }
    
    add(data: T): void;
    add(data: Omit<T, 'id'>): void;

    add(data: T | Omit<T, "id">): void {
        if(!("id" in data)) {
            const id = this.createId();
            const newData = {...data, id};
            this.records.push(newData as T)
        } else {
            this.records.push(data as T);
            }
        }
    

    update(data: Partial<T> & Pick<T, "id">): void {
        let index = this.records.findIndex(record => record.id === data.id);
        if (index !==-1){
            this.records[index] = {...this.records[index],...data as T};
    }
}
    remove(id: number): void {
        let index = this.records.findIndex((record) => record.id === id);
        this.records.splice(index, 1);
    }
    getById(id: number): void {
        this.records.find((record) => record.id === id);
    }

    getAll(): T[] {
        return this.records;
    }
}
const storage = new StorageClass;
storage.add({ id: 1, name: 'Anatoly', age: 33 }); // valid
storage.add({ name: 'Elena', age: 25 }); // valid, created with id === 2

storage.update({ id: 1, name: 'Egor' });
storage.update({ id: 2, name: 'Tatiana', age: 33 });

console.log(storage.getById(1)); // { id: 1, name: 'Egor', age: 33 }
console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }, { id: 2, name: 'Tatiana', age: 33 }]

storage.remove(2);

console.log(storage.getAll()); // [{ id: 1, name: 'Egor', age: 33 }]

