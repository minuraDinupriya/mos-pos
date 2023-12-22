let burgerArray = [
  {
    itemCode: "B1001",
    itemName: "Classic Burger (Large)",
    price: 750.0,
    discount: null,
  },
  {
    itemCode: "B1002",
    itemName: "Classic Burger (Regular)",
    price: 1500.0,
    discount: "15%",
  },
  {
    itemCode: "B1003",
    itemName: "Turkey Burger",
    price: 1600.0,
    discount: null,
  },
  {
    itemCode: "B1004",
    itemName: "Chicken Burger (Large)",
    price: 1400.0,
    discount: null,
  },
  {
    itemCode: "B1005",
    itemName: "Chicken Burger (Regular)",
    price: 800.0,
    discount: "20%",
  },
  {
    itemCode: "B1006",
    itemName: "Cheese Burger (Large)",
    price: 1000.0,
    discount: null,
  },
  {
    itemCode: "B1007",
    itemName: "Cheese Burger (Regular)",
    price: 600.0,
    discount: null,
  },
  {
    itemCode: "B1008",
    itemName: "Bacon Burger",
    price: 650.0,
    discount: "15%",
  },
  {
    itemCode: "B1009",
    itemName: "Shawarma Burger",
    price: 800.0,
    discount: null,
  },
  {
    itemCode: "B1010",
    itemName: "Olive Burger",
    price: 1800.0,
    discount: null,
  },
  {
    itemCode: "B1012",
    itemName: "Double-Cheese Burger",
    price: 1250.0,
    discount: "20%",
  },
  {
    itemCode: "B1013",
    itemName: "Crispy Chicken Burger (Regular)",
    price: 1200.0,
    discount: null,
  },
  {
    itemCode: "B1014",
    itemName: "Crispy Chicken Burger (Large)",
    price: 1600.0,
    discount: "10%",
  },
  {
    itemCode: "B1015",
    itemName: "Paneer Burger",
    price: 900.0,
    discount: null,
  },
  {
    itemCode: "B1016",
    itemName: "Crispy Chicken Submarine (Large)",
    price: 2000.0,
    discount: null,
  },
  {
    itemCode: "B1017",
    itemName: "Crispy Chicken Submarine (Regular)",
    price: 1500.0,
    discount: null,
  },
  {
    itemCode: "B1018",
    itemName: "Chicken Submarine (Large)",
    price: 1800.0,
    discount: "3%",
  },
  {
    itemCode: "B1019",
    itemName: "Chicken Submarine (Regular)",
    price: 1400.0,
    discount: null,
  },
  {
    itemCode: "B1020",
    itemName: "Grinder Submarine",
    price: 2300.0,
    discount: null,
  },
  {
    itemCode: "B1021",
    itemName: "Cheese Submarine",
    price: 2200.0,
    discount: null,
  },
  {
    itemCode: "B1022",
    itemName: "Double Cheese n Chicken Submarine",
    price: 1900.0,
    discount: "16%",
  },
  {
    itemCode: "B1023",
    itemName: "Special Horgie Submarine",
    price: 2800.0,
    discount: null,
  },
  {
    itemCode: "B1024",
    itemName: "MOS Special Submarine",
    price: 3000.0,
    discount: null,
  },
  {
    itemCode: "B1025",
    itemName: "Steak Fries (Large)",
    price: 1200.0,
  },
  {
    itemCode: "B1026",
    itemName: "Steak Fries (Medium)",
    price: 600.0,
  },
  {
    itemCode: "B1027",
    itemName: "French Fries (Large)",
    price: 800.0,
  },
  {
    itemCode: "B1028",
    itemName: "French Fries (Medium)",
    price: 650.0,
  },
  {
    itemCode: "B1029",
    itemName: "French Fries (Small)",
    price: 450.0,
  },
  {
    itemCode: "B1030",
    itemName: "Sweet Potato Fries (Large)",
    price: 600.0,
  },

  {
    itemCode: "B1031",
    itemName: "Chicken n Cheese Pasta",
    price: 1600.0,
    discount: "15%",
  },
  {
    itemCode: "B1032",
    itemName: "Chicken Penne Pasta",
    price: 1700.0,
    discount: null,
  },
  {
    itemCode: "B1033",
    itemName: "Ground Turkey Pasta Bake",
    price: 2900.0,
    discount: "10%",
  },
  {
    itemCode: "B1034",
    itemName: "Creamy Shrimp Pasta",
    price: 2000.0,
    discount: null,
  },

  {
    itemCode: "B1035",
    itemName: "Lemon Butter Pasta",
    price: 1950.0,
    discount: null,
  },
  {
    itemCode: "B1036",
    itemName: "Tagliatelle Pasta",
    price: 2400.0,
    discount: "1%",
  },
  {
    itemCode: "B1037",
    itemName: "Baked Ravioli",
    price: 2000.0,
    discount: "1%",
  },

  {
    itemCode: "B1038",
    itemName: "Fried Chicken (Small)",
    price: 1200.0,
    discount: null,
  },
  {
    itemCode: "B1039",
    itemName: "Fried Chicken (Regular)",
    price: 2300.0,
    discount: "10%",
  },
  {
    itemCode: "B1040",
    itemName: "Fried Chicken (Large)",
    price: 3100.0,
    discount: "5%",
  },
  {
    itemCode: "B1041",
    itemName: "Hot Wings (Large)",
    price: 2400.0,
    discount: null,
  },
  {
    itemCode: "B1042",
    itemName: "Devilled Chicken (Large)",
    price: 900.0,
    discount: null,
  },
  {
    itemCode: "B1043",
    itemName: "BBQ Chicken (Regular)",
    price: 2100.0,
    discount: null,
  },
  {
    itemCode: "B1044",
    itemName: "Pepsi (330ml)",
    price: 990.0,
    discount: "5%",
  },
  {
    itemCode: "B1045",
    itemName: "Coca-Cola (330ml)",
    price: 1230.0,
    discount: null,
  },
  {
    itemCode: "B1046",
    itemName: "Sprite (330ml)",
    price: 1500.0,
    discount: "3%",
  },
  {
    itemCode: "B1047",
    itemName: "Mirinda (330ml)",
    price: 850.0,
    discount: "7%",
  },
];


const addedItems=[];

function generateHTML(array) {
  let container = document.querySelector(".itm");

  array.forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("col-lg-3");

    let card = document.createElement("div");
    card.classList.add("card", "m-2");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title","text-danger");

    let image = document.createElement("img");
    image.src = "../asset/images/pic.jpg";
    image.classList.add("card-img-top");
    cardBody.appendChild(image);

    let cardTitleText = document.createTextNode(item.itemName);
    cardTitle.appendChild(cardTitleText);
    cardBody.appendChild(cardTitle);

    

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextText = document.createTextNode(item.itemCode);
    cardText.appendChild(cardTextText);
    cardBody.appendChild(cardText);

    // price div start
    let priceDiv = document.createElement("div");

    let priceSpan = document.createElement("span");
    priceSpan.textContent = "Price : Rs.";
    priceDiv.appendChild(priceSpan);

    let priceTag = document.createElement("span");
    let price = document.createTextNode(item.price);
    priceTag.appendChild(price);
    priceDiv.appendChild(priceTag);

    cardBody.appendChild(priceDiv);
    // price div end


    //   Discount div start
    let discountDiv = document.createElement("div");

    let discountSpan = document.createElement("span");
    discountSpan.textContent = "Discount : ";
    discountDiv.appendChild(discountSpan);

    let discountTag = document.createElement("span");
    let discount = document.createTextNode(item.discount);
    discountTag.appendChild(discount);
    discountDiv.appendChild(discountTag);

    cardBody.appendChild(discountDiv);
    //   Discount div end

    let button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.classList.add("btn", "btn-danger");


    button.onclick=() => {
      const obj = {
        name: item.itemName,
        price: item.price,
        discount: item.discount,
        count:1,
      };
    
      addedItems.push(obj);
      updateCartList();
    };
    
    
    cardBody.appendChild(button);

    card.appendChild(cardBody);
    div.appendChild(card);
    container.appendChild(div);
  });
}


function updateCartList() {
  let totalValueLabel=document.querySelector(".totalValueLabel")
  let totalValue = 0;
  cartList.innerHTML = ""; // Clear the existing list

  addedItems.forEach((item, index) => {
    let cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    let itemName = document.createElement("span");
    itemName.textContent = `${item.name} - Rs.${item.price}.00`;
    itemName.appendChild(document.createElement("br"));

    let itemCount = document.createElement("span");
    itemCount.textContent = `Count: ${item.count || 1}`; // Initial count

    let increaseButton = document.createElement("button");
    increaseButton.textContent = "+";
    increaseButton.classList.add("btn", "btn-sm", "btn-success");
    increaseButton.onclick = () => {
      // Increase the count for the item
      addedItems[index].count = (addedItems[index].count || 0) + 1;
      itemCount.textContent = `Count: ${addedItems[index].count}`;
      updateCartList();
    };

    let decreaseButton = document.createElement("button");
    decreaseButton.textContent = "-";
    decreaseButton.classList.add("btn", "btn-sm", "btn-warning");
    decreaseButton.onclick = () => {
      // Decrease the count for the item, but not below 0
      addedItems[index].count = Math.max((addedItems[index].count || 0) - 1, 0);
      itemCount.textContent = `Count: ${addedItems[index].count}`;
      updateCartList();
    };

    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("btn", "btn-sm", "btn-danger", "remove-button");
    removeButton.onclick = () => {
      // Remove the item from the addedItems array
      addedItems.splice(index, 1);
      updateCartList();
    };

    cartItem.appendChild(itemName);
    cartItem.appendChild(itemCount);
    cartItem.appendChild(increaseButton);
    cartItem.appendChild(decreaseButton);
    cartItem.appendChild(removeButton);

    cartList.appendChild(cartItem);

    // Calculate the total value
    totalValue += (item.price * (item.count || 1));
  });

  // Update the total value label
  totalValueLabel.textContent = `Total Value: Rs.${totalValue.toFixed(2)}`;
  // totalValueLabel.classList.add("fw-bold")
}

// updateCartList(); // Initial update


generateHTML(burgerArray);

// login form start

function validateLogin() {
  const validCredentials = {
    username: '1',
    password: '1',
  };

  const usernameInput = document.getElementById('loginUsername').value;
  const passwordInput = document.getElementById('loginPassword').value;

  if (usernameInput === validCredentials.username && passwordInput === validCredentials.password) {
      alert('Login successful! Redirecting...');
      window.location.href = '/view/dashBoard.html';
  } else {
      alert('Invalid username or password. Please try again.');
  }
}

// login form end