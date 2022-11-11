$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

const lis = 
  {
    id: 1,
    name: 'Levis T-shirt',
    description: 'Cotton Slim Fit Tshirt',
    price: '8.99',
    category: 'T-shirts',
    imgUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTug9mWx7yRjE5NOeRQ7iWun2x9JU3Pv_cr19khYABul_V0ae026Ltsl6XzlWsGlPbGKbXC_BnXyqY&usqp=CAc",
  }

document.getElementById("price").innerHTML= lis["price"]
document.getElementById("category").innerHTML= lis["category"]
document.getElementById("name").innerHTML= lis["name"]
document.getElementById("description").innerHTML= lis["description"]

var x=lis["imgUrl"];
// document.write('<img id="im" src='+x+' alt="Image not found">');
// document.getElementById('image');

var trafficlights = [
	'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008__340.png', 
	'https://media.istockphoto.com/id/1328049157/photo/mens-short-sleeve-t-shirt-mockup-in-front-and-back-views.jpg?b=1&s=170667a&w=0&k=20&c=CZ5Emlrh-C4jzojJ8b8YBy1frxpQr6aMcLmEBrkty7Q=', 
	'https://media.istockphoto.com/id/471951938/photo/blue-t-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=pyxmdKWcO5rlVGIb7f2YCAlRC_imespbWs0ixWjOo4A=',
  "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTug9mWx7yRjE5NOeRQ7iWun2x9JU3Pv_cr19khYABul_V0ae026Ltsl6XzlWsGlPbGKbXC_BnXyqY&usqp=CAc"
];
var num = 1

function nextlightsequence() {
  document.getElementById('light').src = trafficlights[num++ % trafficlights.length];
}
var numr = 1

function prevlightsequence() {
  document.getElementById('light').src = trafficlights[numr-- % trafficlights.length];
}