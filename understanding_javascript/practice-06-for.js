let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name:"도비", age: 3},
]
// undefined
for(let count = 0; count < persons. length; count++) {
    if(persons[count].age >=19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
// VM1071:5 미성년자입니다
// VM1071:3 성인입니다
// VM1071:5 미성년자입니다
// VM1071:3 성인입니다
// VM1071:5 미성년자입니다
undefined
for(let count = 0; count < persons.length; count++) {
    if(persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다");
    } else {
        console.log(persons[count].name++);
        }
    }

    // another example of 반복문

    const fruits = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
    ];
    // undefined
    for(let k = 0; k < fruits.length; k++) {
        console.log(fruits[k].number + " " + fruits[k].title)
    }
    // VM485:15 1 레드향
    // VM485:15 2 샤인머스켓
    // VM485:15 3 산청딸기
    // VM485:15 4 한라봉
    // VM485:15 5 사과
    // VM485:15 6 애플망고
    // VM485:15 7 딸기
    // VM485:15 8 천혜향
    // VM485:15 9 과일선물세트
    // VM485:15 10 귤
    // undefined
    for(let k = 0; k < fruits.length; k++) {
        console.log(`${fruits[k].number} ${fruits[k].title}`)
    }
    // VM767:2 1 레드향
    // VM767:2 2 샤인머스켓
    // VM767:2 3 산청딸기
    // VM767:2 4 한라봉
    // VM767:2 5 사과
    // VM767:2 6 애플망고
    // VM767:2 7 딸기
    // VM767:2 8 천혜향
    // VM767:2 9 과일선물세트
    // VM767:2 10 귤