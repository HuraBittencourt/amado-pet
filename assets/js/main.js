jQuery(document).ready(function(){


  jQuery(".owl-carousel1").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true,
        loop:true
      }
    }
  }
  );
  jQuery(".owl-carousel2").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:2,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel3").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:true
      }
    }
  }
  );

  jQuery(".owl-carousel4").owlCarousel({
    loop:true,
    center: false,
    margin:20,
    responsiveClass:true,
    nav:true,
    responsive:{
      0:{
        items:1,
        nav:false,
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:2,
        nav:true,
        loop:true
      }
    }
  }
  );

  let email = ""
  let name = ""
  
  function changeMessage(name = "", email = "") {
    let message = `Olá, ${name ? `sou ${name} e` : ''} vim do site. Gostaria de mais informações sobre o serviço de vocês!
    
    ${email ? `Meu email é: ${email}` : ''}
    `
    
    $('#inputmessage').value = message + 
    $('#inputmessage').attr("placeholder", message)
  }

  $("#inputname").keyup(function(x) {

    name = x.target.value
    changeMessage(name, email)
  })
  
  $("#inputemail").keyup(function(x) {

    email = x.target.value
    changeMessage(name, email)
  })

  changeMessage()
});

function myFunction(x) {
  x.classList.toggle("change");
}