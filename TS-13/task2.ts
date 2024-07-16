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

    constructor() { };

    add(data: T): void;
    add(data: Omit<T, 'id'>): void;

    add(data: T | Omit<T, "id">): void {
        if ("id" in data) {
            this.records.push(data as T);
        } else {
            if (this.records.length == 0) {
                let newId = 1;
                this.records.push({ ...data, id: newId } as T);
            } else {
                let ids = this.records.map((record) => record.id);
                let newId = Math.max(...ids) + 1;
                this.records.push({ ...data, id: newId } as T);
            }
        }
    }

    update(data: T): void {
        let index = this.records.findIndex(record => record.id === data.id);
        if (index !==-1){
            this.records[index] = data;
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


