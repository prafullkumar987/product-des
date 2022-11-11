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
document.write('<img id="im" src='+x+' alt="Anurag">');
document.getElementById('image');