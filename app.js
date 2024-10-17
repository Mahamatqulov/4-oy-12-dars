//1-misol
// const products = [
//   { name: "Laptop", price: 1000, sales: 150 },
//   { name: "Phone", price: 500, sales: 300 },
//   { name: "Watch", price: 200, sales: 100 },
// ];
// function sortProducts(arr, key, order = "asc") {
//   return arr.sort((a, b) => {
//     if (order === "asc") {
//       return a[key] - b[key];
//     } else if (order === "desc") {
//       return b[key] - a[key];
//     }
//   });
// }

// console.log(sortProducts(products, "price", "asc"));
// console.log(sortProducts(products, "sales", "desc"));

//2-misol
// const students = [
//   { name: "Akmal", grades: [85, 90, 80] },
//   { name: "Salim", grades: [60, 70, 65] },
//   { name: "Nozim", grades: [50, 40, 55] },
// ];
// function calculateAverage(grades) {
//   const total = grades.reduce((sum, grades) => sum + grades, 0);
//   return total / grades.length;
// }
// function balipaststudents(arr) {
//   return arr.filter((students) => calculateAverage(students.grades) < 70);
// }

// console.log(balipaststudents(students));

//3-misol
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];
// const umumiyNarxi = products.map((products) => ({
//   name: products.name,
//   narxi: products.price * products.quantity,
// }));
// console.log(umumiyNarxi);

//4-misol
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2, tax: 100 },
//   { name: "Phone", price: 500, quantity: 3, tax: 50 },
//   { name: "Shoes", price: 100, quantity: 4, tax: 10 },
// ];
// const umumiyNarxi = products.map((products) => ({
//   name: products.name,
//   narxi: products.price * products.quantity + products.tax,
// }));
// console.log(umumiyNarxi);

//5-misol
// const books = [
//   { title: "Book A", author: "Author A" },
//   { title: "Book B", author: "Author A" },
//   { title: "Book C", author: "Author B" },
//   { title: "Book D", author: "Author C" },
// ];

// const muallifKitoblari = books.reduce((acc, book) => {
//   if (acc[book.author]) {
//     acc[book.author].push(book.title);
//   } else {
//     acc[book.author] = [book.title];
//   }
//   return acc;
// }, {});
// console.log(muallifKitoblari);

//6-misol
// const dates = [
//   { event: "Event A", date: new Date("2023-10-01") },
//   { event: "Event B", date: new Date("2022-12-15") },
//   { event: "Event C", date: new Date("2024-01-10") },
// ];

// const saralshOldest = dates.sort((a, b) => a.date - b.date);
// console.log("Eski sanalar bo'yicha:");
// console.log(saralshOldest);

// const saralshNewest = dates.sort((a, b) => b.date - a.date);
// console.log("Yangi sanalar bo'yicha:");
// console.log(saralshNewest);

//7-misol
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 500 },
//   { name: "Shoes", price: 100 },
// ];

// function ortachaNarxiniHisoblash(products) {
//   const jamiNarxi = products.reduce((sum, product) => sum + product.price, 0);
//   return jamiNarxi / products.length;
// }
// const ortachaNarxi = ortachaNarxiniHisoblash(products);
// console.log("O'rtacha narxi:", ortachaNarxi);

//8-misol
// const books = [
//   { title: "Book A", year: 2001 },
//   { title: "Book B", year: 1995 },
//   { title: "Book C", year: 2010 },
//   { title: "Book D", year: 2020 },
// ];

// const tartiblash = books.sort((a, b) => a.year - b.year);
// console.log(tartiblash);

//9-misol
//??

//10-misol
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 500, quantity: 3 },
//   { name: "Shoes", price: 100, quantity: 4 },
// ];
// const jamiMIqdori = products.reduce(
//   (sum, products) => sum + products.quantity,
//   0
// );
// console.log("Maxsulotning jami miqdori:", jamiMIqdori);

//11-misol
// const mahsulotlar = [
//   { name: "Laptop", quantity: 2 },
//   { name: "Telefon", quantity: 3 },
//   { name: "Laptop", quantity: 1 },
//   { name: "Tufli", quantity: 4 },
// ];

// const birlashtirilganMahsulotlar = mahsulotlar.reduce((yigindi, mahsulot) => {
//   const mavjudMahsulot = yigindi.find((item) => item.name === mahsulot.name);
//   if (mavjudMahsulot) {
//     mavjudMahsulot.quantity += mahsulot.quantity;
//   } else {
//     yigindi.push({ name: mahsulot.name, quantity: mahsulot.quantity });
//   }
//   return yigindi;
// }, []);

// console.log(birlashtirilganMahsulotlar);

//12-misol

// const products = [
//     { name: "Laptop", category: "Electronics" },
//     { name: "Phone", category: "Electronics" },
//     { name: "Shoes", category: "Fashion" }
//   ];

//12 -misol nimagadir  oxshamadi ishlay olmadim
