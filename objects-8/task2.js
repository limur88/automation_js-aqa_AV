// Task 2. Перед вами структура компани, и ниже представлены задания, относящиеся к ней. 
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ]
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ]
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ]
  }
]
// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. 
//Для предприятия посчитать сумму всех сотрудников во всех отделах.
function countEmployees(array) {
  const entreprise = [];
  for (let company of array) {
    let count = 0;
    let shortInfo = {};
    for (let i = 0; i < company.departments.length; i++) {
      count += company.departments[i].employees_count;
      shortInfo[company.name] = count;
      shortInfo[company.departments[i].name] = company.departments[i].employees_count;

    }
    entreprise.push(shortInfo);
  } return entreprise;
}

// 2. Написать функцию, которая будет принимать 1 аргумент 
//(id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2
function showCompany(idOrName) {
  for (let company of enterprises) {
    if (company.departments.find((department) => (department.id === idOrName || department.name === idOrName))) {
      return company.name
    }
  }
}

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия. 
//Пример:addEnterprise("Название нового предприятия")
console.log(addEnterprise("Название нового предприятия"))
function addEnterprise(companyName) {
  let companyId = lastId(enterprises) + 1;
  enterprises.push(
    {
      id: companyId,
      name: companyName,
      departments: [],
    }
  );
  return enterprises
}

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример: addDepartment(1, "Название нового отдела")
function lastId(list) {
  const idsTop = list.map(company => (company.id));
  const idsInside = [];
  for (let company of list) {
    idsInside.push(...(company.departments.map(department => (department.id))));
  } console.log(idsInside);
  return Math.max(...idsTop, ...idsInside);
}

function addDepartment(companyId, deptName) {
  const deptId = lastId(enterprises) + 1;
  console.log(deptId);
  for (let company of enterprises) {
    if (company.id === companyId) {
      company.departments.push(
        {
          id: deptId,
          name: deptName,
        },
      )
    }
  }
  return enterprises
}

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")
function editEnterprise(companyId, companyEditedName) {
  // 1 
  for (let company of enterprises) {
    if (company.id == companyId) {
      company.name = companyEditedName
    }
  } return enterprises;

  // 2
  //  return enterprises.forEach(company => {
  //   if (company.id === companyId){
  //     company.name = companyEditedName
  //   }
  // })
}

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")
function editDepartment(deptId, deptNewName) {
  for (let entreprice of enterprises) {
    entreprice.departments.forEach(department => {
      if (department.id == deptId) {
        department.name = deptNewName
      }

    })
  } return enterprises;
}

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
function deleteEnterprise(entrepriceId) {
  let indexOfCompany = enterprises.find(company => company.id === entrepriceId);
  enterprises.splice(indexOfCompany, 1);
  return enterprises;
}

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// // Пример:(deleteDepartment(10))
function deleteDepartment(departmentId) {
  for (let company of enterprises) {
    let indexOfDepartment = company.departments.findIndex(department => department.id == departmentId);
    if (indexOfDepartment != -1 && !company.departments[indexOfDepartment].employees_count > 0) {
      company.departments.splice(indexOfDepartment, 1);
      console.log(`department with id ${departmentId} is deleted!`)
    }
  }
  return enterprises;
}

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: 
//id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)
function moveEmployees(fromDeptId, toDeptId) {
  for (let company of enterprises) {
    let indexFrom = company.departments.findIndex(department => department.id === fromDeptId);
    let indexTo = company.departments.findIndex(department => department.id === toDeptId);
    if (indexFrom != -1 && indexTo != -1) {
      let howManyPeopleTransfer = company.departments[indexFrom].employees_count;
      company.departments[indexTo].employees_count += howManyPeopleTransfer;
      company.departments[indexFrom].employees_count = 0;
    };
  }
  return enterprises
}
