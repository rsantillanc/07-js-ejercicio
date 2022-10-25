const me = {
  name: "Renzo",
  surname: "Santillan",
  age: 33,
  hight: 1.59,
  isDeveloper: true,
};

const franco = {
  name: "Franco",
  surname: "Villalaz",
  age: 31,
  hight: 1.61,
  isDeveloper: false,
};

const jhonatan = {
  name: "Jhonatan",
  surname: "Palacios",
  age: 35,
  hight: 1.82,
  isDeveloper: false,
};

const myAge = me.age;
const list = [me, franco, jhonatan];
console.log(list);

const sortedList = [...list];
sortedList.sort((a, b) => b.age - a.age);
console.log(sortedList);
