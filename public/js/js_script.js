function MenuItem(name, pic, kCal, description, contains) {
this.name = name;
this.pic = pic;
this.kCal = kCal;
this.description = description;
this.contains = contains;
}
/*
var burger1 = new MenuItem('The Cheese n Bacon Burger', 'https://www.mathiaszachau.com/wp-content/uploads/2016/05/saftiga-hamburgare-e1463035643226.jpg', '583 kCal', 'Our popular beef burger with the perfect cooked bacon and A LOT of cheese', 'Angus beef, lactose, gluten, tomato, onion');
var burger2 = new MenuItem('THE Crispy Chicken Burger', 'https://static1.squarespace.com/static/596e7cdfa5790aab89b70f49/5977680f725e25b1cccdf632/5ad182448a922d44a43955a6/1524025316943/DSC_0639.jpg?format=2500w', '499 kCal', 'The crispiest burger you will ever taste with a fresh apple and mint dressing', 'Lactose, chicken, gluten, garlic and tomato');
var burger3 = new MenuItem('Sticky Honey Aubergine n Halloumi Burger', 'https://www.hellomagazine.com/imagenes/cuisine/2017051839042/sticky-honey-aubergine-halloumi-burger-recipe/0-207-390/Vegetable-Burger-t.jpg', '389 kCal', 'Our fresh veggie burger with honey glazed aubergine and halloumi', 'Lactose and gluten');
var burger4 = new MenuItem('The Allergy Friendly Burger', 'https://d2814mmsvlryp1.cloudfront.net/wp-content/uploads/2017/07/WGC-Veggie-Quinoa-Burger-2-copy-2.jpg', '359 kCal', 'Our Allergy Friendly Burger for you who needs something special', 'Blackbeans, onion, bell peppers, feta cheese and garlic');
var burger5 = new MenuItem('Fishyfishy Burger', 'https://www.svtstatic.se/image-cms/svtse/1508939009/gokvall/article15728508.svt/alternates/extralarge/fiskburgare-web-jpg', '265 kCal', 'Our fish burger with capris, yummi!!!', 'Cod, gluten and tomato');
var burger6 = new MenuItem('The Ultimate Kids Burger', 'https://burgerburger.co.nz/wp-content/uploads/2016/12/Kids-Chicken-Burger.jpg', '265 kCal', 'Our new Kids Burger, has the perfect size and come WITH fries', 'Angus beef, gluten egg, tomato and lactose');
*/
var burgerList = food;

const addBurger = function(parent, MenuItem) {
  var div = document.createElement("div");
  var checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", MenuItem.name);
  var name = document.createElement("h4");
  var img = document.createElement("img");
  var list = document.createElement("ul");
  var kCal = document.createElement("li");
  var description = document.createElement("li");
  var contains = document.createElement("li");

  checkbox.className = "checkbox";
  name.innerHTML = MenuItem.name;
  img.src = MenuItem.img;
  img.className = "BurgerPic";
  kCal.innerHTML = MenuItem.kCal;
  description.innerHTML = MenuItem.description;
  contains.innerHTML = MenuItem.contains;

  div.appendChild(checkbox);
  div.appendChild(name);
  div.appendChild(img);
  list.appendChild(kCal);
  list.appendChild(description);
  list.appendChild(contains);
  div.appendChild(list);
  name.appendChild(checkbox);
  parent.appendChild(div);
}

var jsburgers = document.getElementById("jsburgers");

for (var i = 0; i < burgerList.length; i += 1) {
  addBurger(jsburgers, burgerList[i]);
}

function getInfo() {
  var checkbox = document.getElementsByClassName("checkbox");
  var name = document.getElementById("fullname").value;
  var emailadress = document.getElementById("emailadress").value;
  var location = document.getElementById("street").value;
  var number = document.getElementById("streetnumber").value;
  var payment = document.getElementById("payment").value;

  var genderArray = document.getElementsByName("gender");

  for (var i = 0; i < genderArray.length; i += 1) {
    console.log(genderArray);
    if (genderArray[i].checked) {
      console.log(genderArray[i].value);
      var gender = genderArray[i].value;
    }
  }
  //console.log(checkbox);
  var returnBurgers = [];
  for (var i = 0; i < checkbox.length; i += 1) {
    if (checkbox[i].checked) {
        console.log(checkbox[i].value);
        returnBurgers.push(checkbox[i].name);
      }
  }
  var allInfo = [returnBurgers.toString(), name, emailadress, location, number, payment, gender];
  return allInfo;
}

function printInfo(parent) {
  var infoArray = getInfo();
  parent.innerHTML = '';
  for (var i = 0; i < infoArray.length; i += 1) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(infoArray[i]));
    parent.appendChild(div);
      }
}
/*
var myButton = document.getElementById('myButtonID');

myButton.addEventListener("click", chooseBurger);

function chooseBurger() {

  printInfo(infoSection);
  //console.log("Button Clicked!");
}
*/
