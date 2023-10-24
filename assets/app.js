const foodItems = [
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Boil Egg",
    itemPrice: "40 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "breakfast",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Bun",
    itemPrice: "90 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "breakfast",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Paratha",
    itemPrice: "60 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "breakfast",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Chicken Qorma",
    itemPrice: "270 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "lunch",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Beef Biryani",
    itemPrice: "250 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "lunch",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "White Karhai",
    itemPrice: "320 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "lunch",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Daal Chana",
    itemPrice: "130 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "lunch",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Chocolate Shake",
    itemPrice: "220 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "shakes",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Snaker Shake",
    itemPrice: "240 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "shakes",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Ice Cream Shake",
    itemPrice: "180 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "shakes",
  },
  {
    itemImage: "./assets/images/footicon.png",
    itemName: "Energy Shake",
    itemPrice: "300 Rs.",
    itemDesc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quia? ",
    itemCategory: "shakes",
  },
];

const buttons = ["All", "Breakfast", "Lunch", "Shakes"];

const btnContainer = document.getElementById("category-tags");

buttons.forEach(function (button) {
  btnContainer.innerHTML += `
    <button onclick="showItems('${button.toLocaleLowerCase()}')">${button}</button>
  `;
});

const MenuContainer = document.getElementById("menu-items-container");

function showItems(category) {
  console.log(btnContainer);

  MenuContainer.innerHTML = "";

  var filteredItems = foodItems.filter(function (item) {
    if (item.itemCategory == category) {
      return true;
    }
  });

  if (filteredItems == "") {
    filteredItems = foodItems;
  }

  filteredItems.forEach(function (item) {
    MenuContainer.innerHTML += `
    <div class="d-flex gap-3 align-items-center col-lg-6 my-4">
    <img src=${item.itemImage} alt="" class="food-icon">
    <div>
        <span class="d-flex align-items-center justify-content-between mb-3">
            <h5 class="m-0">${item.itemName}</h5>
            <p class="m-0 price">${item.itemPrice}</p>
        </span>
        <p class="m-0 text-justify">${item.itemDesc}</p>
    </div>
    </div> 
  `;
  });
}

showItems();

// function showAllFoods() {
//   MenuContainer.innerHTML = "";

//   foodItems.forEach((item) => {
//     MenuContainer.innerHTML += `
// <div class="d-flex gap-3 align-items-center col-lg-6 my-4">
// <img src=${item.itemImage} alt="" class="food-icon">
// <div>
//     <span class="d-flex align-items-center justify-content-between mb-3">
//         <h5 class="m-0">${item.itemName}</h5>
//         <p class="m-0 price">${item.itemPrice}</p>
//     </span>
//     <p class="m-0 text-justify">${item.itemDesc}</p>
// </div>
// </div>
//         `;
//   });
// }
// showAllFoods();

// function showBreakfastItems() {
//   MenuContainer.innerHTML = "";

//   const breakfastItems = foodItems.filter((item) => {
//     if (item.itemCategory == "breakfast") {
//       return true;
//     }
//   });

//   breakfastItems.forEach((item) => {
//     MenuContainer.innerHTML += `
//             <div class="d-flex gap-3 align-items-center col-lg-6 my-4">
//             <img src=${item.itemImage} alt="" class="food-icon">
//             <div>
//                 <span class="d-flex align-items-center justify-content-between mb-3">
//                     <h5 class="m-0">${item.itemName}</h5>
//                     <p class="m-0 price">${item.itemPrice}</p>
//                 </span>
//                 <p class="m-0 text-justify">${item.itemDesc}</p>
//             </div>
//             </div>
//         `;
//   });
// }

// function showLunchItems() {
//   MenuContainer.innerHTML = "";

//   const lunchItems = foodItems.filter((item) => {
//     if (item.itemCategory == "lunch") {
//       return true;
//     }
//   });

//   lunchItems.forEach((item) => {
//     MenuContainer.innerHTML += `
//               <div class="d-flex gap-3 align-items-center col-lg-6 my-4">
//               <img src=${item.itemImage} alt="" class="food-icon">
//               <div>
//                   <span class="d-flex align-items-center justify-content-between mb-3">
//                       <h5 class="m-0">${item.itemName}</h5>
//                       <p class="m-0 price">${item.itemPrice}</p>
//                   </span>
//                   <p class="m-0 text-justify">${item.itemDesc}</p>
//               </div>
//               </div>
//           `;
//   });
// }

// function showShakesItems() {
//   MenuContainer.innerHTML = "";

//   const breakfastItems = foodItems.filter((item) => {
//     if (item.itemCategory == "shakes") {
//       return true;
//     }
//   });

//   breakfastItems.forEach((item) => {
//     MenuContainer.innerHTML += `
//                 <div class="d-flex gap-3 align-items-center col-lg-6 my-4">
//                 <img src=${item.itemImage} alt="" class="food-icon">
//                 <div>
//                     <span class="d-flex align-items-center justify-content-between mb-3">
//                         <h5 class="m-0">${item.itemName}</h5>
//                         <p class="m-0 price">${item.itemPrice}</p>
//                     </span>
//                     <p class="m-0 text-justify">${item.itemDesc}</p>
//                 </div>
//                 </div>
//             `;
//   });
// }
