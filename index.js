// // tim tu dai nhat:

// const text = 'tim tu asasasdai nhaaaaaaaaaaaaaaaaaat';
// // let x = [];
// // x = text.split(' ');
// // let tudainhat = x[0];
// // console.log(x[0])
// // for (let i = 0; i < x.length - 1; i++) {
// //     console.log(i)
// //     if (tudainhat.length < x[i + 1].length) {
// //         tudainhat = x[i + 1];
// //     }

// // // }
// // // console.log("tudainhat la:", tudainhat);

// // // đảo ngược string. 
// // let str = 'Hello';

// // let arr= atr.split();
// // console.log(arr);



// //flat array:
// let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// const flatDepthArray = depthArray.reduce((newArray, item) => {
//     return newArray.concat(item);

// }, [])

// console.log(flatDepthArray);


// // lay ra cac khoa hoc dua vao mang moi

// let topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "Js"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "PHP"

//             },
//             {
//                 id: 2,
//                 title: "NodeJS"

//             }
//         ]
//     },
// ];

// const getAllCourses = topics.reduce((allCourses, titleCourse) => {
//     return allCourses.concat(titleCourse.courses)

// }, [])

// console.log(getAllCourses)

// let html = getAllCourses.map((course) => {
//     return course.title
// });

// console.log(html);


// let fun = (event) => {
//     event(123);
// };

// let myCallBack = (a) => {
//     console.log(a);

// }

// fun(myCallBack);

//dao nguoc string 

// let str = 'HELLO';
// let arr = str.split('');
// console.log(arr);
// const daotu = arr.reduce((item,index) => {
    
//     arr.push(arr.shift())
//     console.log("i= ", i , arr)
//     if(index = arr.length-1)


    
       
// })
// console.log(arr)


// let str = 'HELLO';

// const arrayStr = str.split('');
// const revertStr = arrayStr.map((item, index) => {
    
//     return arrayStr[arrayStr.length - index-1]
    
// })

// console.log("revertStr", revertStr)

//4. Trả về string với các từ có chữ cái đầu tiên viết hoa. 
// Ví dụ: I'm a little tea pot => I'm A Little Tea Pot.

// let text = "I'm a little tea pot";

// let arr = text.split(' ');
// console.log(arr);
// let firstChar = arr.splice(0,1).join()[0].toUpperCase();


// console.log(arr.splice(0,1).join()[0].toUpperCase());



// for (let i=0; i<= arr.length; i++) {

// }

// const setUpperCase = arr.map((item) => {

// })

// // console.log(setUpperCase);



// Trả về một mảng gồm các số lớn nhất của mỗi sub-array
// vd: [4, 5, 1, 3],


// let arr1 = [13, 4, 5, 1, 3,9, 12];

//  const timMax = arr1.reduce((max, item) => {
//     if(max<item) {
//         max = item
//     }
// return max;
//  })
//  console.log(timMax);


// Kiểm tra xem trong 1 string có chứa tất cả các kí tự của thứ 2 hay không.

// let text1 = 'i love you';
// let text2 = 'you';

// let arr = text1.split(' ');
// console.log(arr);


// for(let i=0;i<arr.length; i++) {
//     let a=0;
//         if(arr[i]===text2)
//         a++;
//         if(a>=1)
//         console.log("co ki tu trung");
// }
// const findText = arr.map(item => {
//     let i=0;
//     if(item===text2)
//     i++;
//     if(i>=1)
//     console.log("co ki tu trung") 
// });
   


// false, null, 0, "", undefined và NaN

// let arr= [null, 0, 1, 'iaf']
// let arr2=[];
// const filterArr = arr.map ((item) => {
//     if(item) 
//     arr2 = [...arr2, item]
// })

// console.log(arr2);

// 5. Trả về một mảng gồm các số lớn nhất của mỗi sub-array
// vd: [4, 5, 1, 3],
// [13, 27, 18, 26],

let arr1 = [4, 5, 1, 3];
let arr2 = [13, 27, 18, 26];
let arr3 = [];
let arr4 = [];
arr3.push(arr1)
arr3.push(arr2)
console.log(arr3);

const filterArr = arr3.map((item) => {
    console.log(item);

     const aw = item.map((item1) => {
        max = item1;
        if(max<item1)
        max = item1;
    arr4 = arr4.concat(max)
    console.log(">>>check arr",arr4)
    })
    console.log(arr4);
}) 
