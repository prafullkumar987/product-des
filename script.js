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
  name: 'Abstract Solo – Shapies',
  description: 'Shapes are fun to play with. Explore the shapes to create your cute buddies. This activity helps the kids to visualise characters through shapes.  This Fun little game can kill your kids’ screen time, which in turn improves creativity and curiosity. Let the kid create. <br> <br>You can also purchase this kit from Amazon.in.',
  price: '499',
  category: 'Little Whizzart Kit',
  img_url: 'https://shop.edtrix.in/wp-content/uploads/2022/03/Shapies-with-box-design.png',
}

document.getElementById("price").innerHTML= lis["price"]
document.getElementById("category").innerHTML= lis["category"]
document.getElementById("name").innerHTML= lis["name"]
document.getElementById("description").innerHTML= lis["description"]

var x=lis["imgUrl"];
// document.write('<img id="im" src='+x+' alt="Image not found">');
// document.getElementById('image');

var trafficlights = [
	'https://shop.edtrix.in/wp-content/uploads/2022/03/Shapies-with-box-design-300x300.png', 
	'https://shop.edtrix.in/wp-content/uploads/2019/01/IMG_0101-scaled.jpg', 
	'https://shop.edtrix.in/wp-content/uploads/2019/01/IMG_0102-scaled.jpg',
];
var num = 1

function nextlightsequence() {
  document.getElementById('light').src = trafficlights[num++ % trafficlights.length];
}
var numr = 1

function prevlightsequence() {
  document.getElementById('light').src = trafficlights[numr-- % trafficlights.length];
}