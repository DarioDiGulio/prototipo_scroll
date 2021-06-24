$(document).ready(function(){
            $('.aniview').AniView();

            $('#carouselExampleControls').carousel({
              pause: true,
              interval: false
          });       

            anime({
              targets: '.icon-hero',
              scale: [0,1],
              rotate: '1turn',
              duration: 3100,
              delay:1500
              });
          
              // anim titulo   
              var textWrapper = document.querySelector('.ml12');
              textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
          
              anime.timeline({loop: false})
              .add({
              targets: '.ml12 .letter',
              translateX: [40,0],
              translateZ: 0,
              opacity: [0,1],
              easing: "easeOutExpo",
              duration: 1300,
              delay: (el, i) => 1900 + 20 * i
              })
          
                // celular
              anime({
              targets: '.celular',
              opacity: [0,1],
              translateY: [100,0],
              easing: "easeInOutBack",
              duration: 2600,
              delay:1500
              });
          
              anime({
              targets: '.vermas img',
              opacity: [
              { value: 1, duration: 600, delay: 0 },
              { value: 0.9, duration: 900, delay: 100 }
              ],
              translateY: [
              { value: 15, duration: 600, delay: 0 },
              { value: 0, duration: 900, delay: 100 }
              ],
              easing: "easeOutBack",
              loop: true
              });
          
              anime({
              targets: '.vermas img',
              opacity: [0,1],
              easing: "easeOutBack",
              delay:3150
              });

  function  setInitValues() {

    // Parte 1
    anime.set('.part-1 .titlee', {
      opacity: 0,
      translateY: -300
    });
  
    anime.set('.title_plus img', {
      opacity: 0,
    });

    anime.set('.title_plus h2', {
      opacity: 0,
      translateX: 100
    });

    anime.set('.part-1-b .tabla', {
      opacity: 0,
      translateY: 100
    });

    anime.set('#part1b .tabla2', {
      opacity: 0,
      translateY: 100
    });

    anime.set('#part1_c .tabla3', {
      opacity: 0,
      translateY: 100
    });

    // Parte 2

    anime.set('.part-2 .icon, .part-2 .row img ', {
      opacity: 0,
      scale: 0,
    });

    // Parte 3

    anime.set('#part3 .title', {
      opacity: 0,
      scale: 0,
    });

    anime.set('#part3 .text', {
      opacity: 0,
      translateX: -100
    });

    anime.set('#part3 .icon', {
      opacity: 0,
      translateX: 100
    });

    anime.set('#part3_B .mano', {
      opacity: 0,
      translateY: 500
    });

    // Parte 4
  
    anime.set('#part4 .title, #part4 .images img',{
      opacity: 0,
      zoom: 2
    });

    anime.set('#line_part4 path',{
      strokeDashoffset: anime.setDashoffset,
    });

    anime.set('#part4 .titles',{
      opacity: 0,
    });

    

      // Parte 5
  
      anime.set('#part5 .title, #part5 .text',{
      opacity: 0,
      translateX: -100
    });

    anime.set('#part5 .celu',{
      opacity: 0,
      translateY: 200
    });

    // Parte 6
  
    anime.set('#part6 .text, #part6 .text4',{
      opacity: 0,
      scale: 0
    });

    anime.set('#part6 .text5',{
      opacity: 0,
    });

    anime.set('#part6 .text6',{
      opacity: 0,
      translateX: 200
    });

    anime.set('#part6 .img1',{
      opacity: 0,
      translateX: -100
    });

    anime.set('#part6 .img2',{
      opacity: 0,
      translateX: 100
    });

    anime.set('#part6 .text7',{
      opacity: 0,
      translateX: -200
    });

    // Parte 7
  
    anime.set('#part7 .carousel',{
    opacity: 0
  });

  // Parte 8

  anime.set('#part8 .title',{
    scale: 0,
    opacity: 0,
  });
  
  anime.set('#part8 .icon',{
    scale: 0.8,
    translateX: 200,
    opacity: 0
  });

  anime.set('#part8 .text',{
    scale: 0.8,
    translateX: -200,
    opacity: 0
  });

  // Parte 9

  anime.set('#part9 .text',{
    scale: 0,
    opacity: 0
  });

  anime.set('#part9 .title, #part9 .text2',{
    opacity: 0
  });

  anime.set('#part9 .icon',{
    opacity: 0,
    translateY: 200
  });

  // Parte 10

  anime.set('#part10 .icon',{
    opacity: 0,
    translateX: -200
  });

  anime.set('#part10 .text',{
    opacity: 0,
    translateX: 200
  });

  anime.set('#part11 .text2',{
    opacity: 0,
  });

  }

  setInitValues()

  // if($( window ).height() > 1020){
  //   anime({
  //     targets: '#part1 .titlee',
  //     opacity: 1,
  //     translateY: 0,
  //     easing: "easeInOutExpo",
  //     duration: 2000,
  //     delay:0
  //     })
 
  //     anime({
  //     targets: '.title_plus img',
  //     opacity: 1,
  //     rotate: '1turn',
  //     easing: "easeInOutBack",
  //     duration: 1800,
  //     delay: anime.stagger(2000, {start: 0})
  //     })

  //     anime({
  //     targets: '.title_plus h2',
  //     opacity: 1,
  //     translateX: 0,
  //     easing: "easeInOutBack",
  //     duration: 1800,
  //     delay: anime.stagger(2000, {start: 0})
  //     })

  //     anime({
  //     targets: '.part-1-b .tabla',
  //     opacity: 1,
  //     translateY: 0,
  //     easing: "easeInOutBack",
  //     duration: 2000,
  //     delay: anime.stagger(300, {start: 0})
  //     })
  // }

   $("#part1").attrchange({
    trackValues: true, // set to true so that the event object is updated with old & new values
    callback: function(evnt) {
        if(evnt.attributeName == "class") { // which attribute you want to watch for changes
          anime({
            targets: '.part-1 .titlee',
            opacity: 1,
            translateY: 0,
            easing: "easeInOutExpo",
            duration: 2000,
            delay:0
            })
       
            anime({
            targets: '.title_plus img',
            opacity: 1,
            rotate: '1turn',
            easing: "easeInOutBack",
            duration: 1800,
            delay: anime.stagger(2000, {start: 0})
            })
      
            anime({
            targets: '.title_plus h2',
            opacity: 1,
            translateX: 0,
            easing: "easeInOutBack",
            duration: 1800,
            delay: anime.stagger(2000, {start: 0})
            })
      
            anime({
            targets: '.part-1-b .tabla',
            opacity: 1,
            translateY: 0,
            easing: "easeInOutBack",
            duration: 2000,
            delay: anime.stagger(500, {start: 2000})
            })
        }
    } 
});

$("#part1_c").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes

        anime({
          targets: '#part1_c .tabla3',
          opacity: 1,
          translateY: 0,
          easing: "easeOutBack",
          duration: 1800,
          delay: anime.stagger(500, {start: 2000})
          })
      }
  } 
});

$("#part1b").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes

        anime({
          targets: '#part1b .tabla2',
          opacity: 1,
          translateY: 0,
          easing: "easeOutBack",
          duration: 1800,
          delay: anime.stagger(500, {start: 2000})
          })
      }
  } 
});

$("#part2").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '.part-2 .icon',
          opacity: 1,
          scale: 1,
          rotate: '1turn',
          duration: 4000,
          delay:0
          });
    
          var tl = anime.timeline({
            targets: '.part-2 .row .img1',
            delay: 2500,
            duration: 1000, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
          });
          
          tl
          .add({
            scale: 0.9,
            opacity: 1
          })
          .add({
            scale: 1,
            opacity: 0,
            delay: 0
          })
    
          var tl = anime.timeline({
            targets: '.part-2 .row .img2',
            delay: 2800,
            duration: 1000, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
          });
          
          tl
          .add({
            scale: 0.9,
            opacity: 1
          })
          .add({
            scale: 0.8,
            opacity: 0.5,
            delay: 0
          })
    
          var tl = anime.timeline({
            targets: '.part-2 .row .img3',
            delay: 3100,
            duration: 1000, // Can be inherited
            easing: 'easeOutExpo', // Can be inherited
          });
          
          tl
          .add({
            scale: 0.9,
            opacity: 1
          })
          .add({
            scale: 0.8,
            opacity: 0.5,
            delay: 0
          })
    
          anime({
            targets: '.part-2 .row .img4',
            opacity: 1,
            scale: 1,
            easing: "easeOutExpo",
            duration: 1000,
            delay: 3100
            })
      }
  } 
});

$("#part3").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part3 .title',
          opacity: 1,
          scale:1,
          easing: "easeInOutBack",
          duration: 2000,
          delay:1500
          })
  
       
  
     
      }
  } 
});

$("#part3_C").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part3 .text',
          opacity: 1,
          translateX:0,
          easing: "easeInOutExpo",
          duration: 2000,
          delay:2500
          })
          
        anime({
          targets: '#part3 .icon',
          opacity: 1,
          translateX:0,
          scale: [1,0.9],
          easing: "easeInOutExpo",
          duration: 1000,
          delay:3000
          })
      }
  } 
});

$("#part3_B").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part3_B .mano',
          opacity: 1,
          translateY:0,
          easing: "easeOutExpo",
          duration: 1000,
          delay:1500
          })
      }
  } 
});

$("#part4").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        

        anime({
          targets: '#part4 .title',
          opacity: 1,
          scale:1,
          easing: "easeInOutBack",
          duration: 1500,
          delay:2000
          })

          anime({
            targets: '#part4 .titles',
            opacity: 1,
            scale:1,
            easing: "easeOutExpo",
            duration: 1500,
            delay:2800
            })
  
          anime({
            targets: '#part4 .images img',
            opacity: 1,
            zoom:0.9,
            easing: "easeInOutBack",
            duration: 800,
            delay: anime.stagger(400, {start: 3000})
            })
  
            anime({
              targets: '#line_part4 path',
              strokeDashoffset: 0,
              easing: 'easeInOutSine',
              duration: 1000,
              delay: 2500,
            });
      }
  } 
});

$("#part5").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part5 .title',
          opacity: 1,
          translateX:0,
          scale:0.8,
          easing: "easeOutExpo",
          duration: 1500,
          delay:2000
          })
  
        anime({
          targets: '#part5 .text',
          opacity: 1,
          translateX:0,
          scale:0.7,
          easing: "easeOutExpo",
          duration: 2000,
          delay:2200
          })
  
        anime({
          targets: '#part5 .celu',
          opacity: 1,
          translateY:0,
          easing: "easeOutExpo",
          duration: 1500,
          delay:2200
          })
      }
  } 
});

$("#part6").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part6 .text',
          opacity: 1,
          scale: 1,
          easing: "easeInOutBack",
          duration: 2000,
          delay: anime.stagger(1300, {start: 0})
          })
      
        anime({
          targets: '#part6 .text4',
          opacity: 1,
          scale: 0.9,
          easing: "easeInOutBack",
          duration: 1600,
          delay: 1500
          })
        
          anime({
            targets: '#part6 .text5',
            opacity: 1,
            easing: "easeInOutBack",
            duration: 2000,
            delay: 1900
            })
      
         
      }
  } 
});

$("#part6_B").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part6 .text6',
          opacity: 1,
          translateX: 50,
          easing: "easeInOutExpo",
          duration: 2000,
          delay: 2500
          })
        anime({
          targets: '#part6 .img1',
          opacity: 1,
          translateX: 0,
          easing: "easeInOutExpo",
          duration: 2000,
          delay: 2500
          })
    
        anime({
          targets: '#part6 .text7',
          opacity: 1,
          translateX: 75,
          easing: "easeInOutExpo",
          duration: 2000,
          delay: 3000
          })
        anime({
          targets: '#part6 .img2',
          opacity: 1,
          translateX: 0,
          easing: "easeInOutExpo",
          duration: 2000,
          delay: 3000
          })
      }
  } 
});


$("#part7").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part7 .carousel',
          opacity: 1,
          easing: "easeOutExpo",
          duration: 1500,
          delay: 2500
          })
      }
  } 
});

$("#part8").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part8 .title',
          opacity: 1,
          scale:0.8,
          easing: "easeOutExpo",
          duration: 2000,
          delay: 2500
          })
  
          anime({
            targets: '#part8 .text, #part8 .icon',
            opacity: 1,
            translateX:0,
            easing: "easeOutExpo",
            duration: 3000,
            delay: 3000
            })
      }
  } 
});

$("#part9").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part9 .text',
          opacity: 1,
          scale: 1,
          easing: "easeInOutBack",
          duration: 1000,
          delay: anime.stagger(2300, {start: 0})
          })
  
          anime({
            targets: '#part9 .title',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 2000,
            delay: 2500
            })
          
        
          
                  
      }
  } 
});

$("#part9_B").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes

        anime({
          targets: '#part9 .text2',
          opacity: 1,
          easing: "easeOutExpo",
          duration: 2000,
          delay: 2500
          })

      

        anime({
          targets: '#part9 .icon',
          opacity: 1,
          translateY: 1,
          easing: "easeOutExpo",
          duration: 2000,
          delay: 3000
          })

          
      }
  } 
});

$("#part10").attrchange({
  trackValues: true, // set to true so that the event object is updated with old & new values
  callback: function(evnt) {
      if(evnt.attributeName == "class") { // which attribute you want to watch for changes
        anime({
          targets: '#part10 .icon, #part10 .text',
          opacity: 1,
          translateX:0,
          easing: "easeInOutBack",
          duration: 1000,
          delay: 200
          })

          anime({
            targets: '#part11 .text2',
            opacity: 1,
            easing: "easeInOutBack",
            duration: 1000,
            delay: 200
            })
      }
  } 
});



  // var isPart1 = false
  // window.addEventListener("scroll", () => { 

  //   // if($("#part1").hasClass( "animated" ) && isPart1 !== true){
  //   //   console.log('part1')
  //   //   anime({
  //   //     targets: '#part1 .titlee',
  //   //     opacity: 1,
  //   //     translateY: 0,
  //   //     easing: "easeInOutExpo",
  //   //     duration: 2000,
  //   //     delay:0
  //   //     })
   
  //   //     anime({
  //   //     targets: '.title_plus img',
  //   //     opacity: 1,
  //   //     rotate: '1turn',
  //   //     easing: "easeOutBack",
  //   //     duration: 1800,
  //   //     delay: anime.stagger(2000, {start: 0})
  //   //     })
  
  //   //     anime({
  //   //     targets: '.title_plus h2',
  //   //     opacity: 1,
  //   //     translateX: 0,
  //   //     easing: "easeOutBack",
  //   //     duration: 1800,
  //   //     delay: anime.stagger(2000, {start: 0})
  //   //     })
  
  //   //     anime({
  //   //     targets: '.part-1-b .tabla',
  //   //     opacity: 1,
  //   //     translateY: 0,
  //   //     easing: "easeOutBack",
  //   //     duration: 2000,
  //   //     delay: anime.stagger(300, {start: 0})
  //   //     })

  //   //   isPart1 = true
  //   // }

  // })

  });


  /**
   * @description celular scroll animation
  */

  const URL_BASE = "./images/Animacion_Celular_";
  let currentImg = 0;
  let previousY = 0;

  document.addEventListener("scroll", function () {
    const img = document.getElementById("img");
    updateImageOnScroll();
    img.src = URL_BASE + getImgId(currentImg) + ".png";
    if (window.scrollY > 1000 || window.scrollY < 200) {
      img.style.position = "static";
      // img.hidden = true;
    } else {
      img.style.position = "fixed";
      img.hidden = false;
    }
  });

function updateImageOnScroll() {
  if (isDownScroll() && isInImagePlace()) {
    currentImg++;
  } else {
    if (currentImg > 0) currentImg--;
  }
}

function isInImagePlace() {
  return currentImg < 103 && window.scrollY > 200;
}

  function isDownScroll() {
    let currentY = window.scrollY;
    isScrollDown = currentY > previousY;
    previousY = currentY;
    return isScrollDown;
  }

  function getImgId(currentImg) {
    return currentImg.toString().padStart(5, "0");
  }
