let year = +prompt('Введи свій рік народження:');
let city = prompt('В якому місті ти живеш?');
let sport = prompt('Твій улюблений вид спорту? Футбол, бокс або боротьба?');

if (year === null) {
    alert(`Шкода, що ти не захотів ввести свій рік народження`);
}

if (city === null) {
    alert(`Шкода, що ти не захотів ввести своє місто`);
}

const age = (2023-year);

let cityFrom;

if (city === "Київ") {
    cityFrom = "Ти живеш у столиці України";
 } else if (city === "Вашингтон") {
     cityFrom = "Ти живеш у столиці США";
 } else if (city === "Лондон") {
     cityFrom = "Ти живеш у столиці Великобританії";
 } else {
     cityFrom = (`Ти живеш у місті ${city}.`);
 }


 let choosenSport;
 if (sport === null) {
     alert("Шкода, що ти не захотів ввести свій улюблений вид спорту");
 } else if (sport === "футбол") {
     choosenSport = `Твій улюблений спорт -
     ${sport}
    Круто! Хочеш бути як Андрій Шевченко ? `;
 } else if (sport === "бокс") {
    choosenSport = `Твій улюблений спорт -
    ${sport}
     Круто! Хочеш бути як Володимир Кличко ? `;
 } else if (sport === "боротьба") {
    choosenSport = `Твій улюблений спорт -
     ${sport} Круто! Хочеш бути як Володимир Кличко ? `;
 } else {
     choosenSport = `Твій улюблений спорт -
     ${sport}`;
}

alert(`Тобі ${age} роки(-ів). ${cityFrom} ${choosenSport}`);





// // switch (Sport) {
// //     case ("футбол"):
// //         choosenSport = `Твій улюблений спорт -`
// //         $ {
// //             sport
// //         }
// //         `Круто!хочеш бути як Андрій Шевченко ? `;
// //         break;
// //     case ("бокс"):
// //         choosenSport = `Твій улюблений спорт -`
// //         $ {
// //             sport
// //         }
// //         `
// // Круто!хочеш бути як Володимир Кличко ? `;
// //         break;
// //     case ("боротьба"):
// //         choosenSport = `Твій улюблений спорт -`
// //         $ {
// //             sport
// //         }
// //         `
// // Круто!хочеш бути як Жан Беленюк ? `;
// //         break;
// // }




// // alert($ {
// //         age
// //     }\
// //     n $ {
// //         cityFrom
// //     }\
// //     n $ {
// //         choosenSport
// //     });