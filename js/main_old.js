
  function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
    } else {
    document.addEventListener("DOMContentLoaded", fn);
    }
  }

  // Animaciones en la Entrada 
  docReady(function() {

    // anime({
    // targets: '.navbar',
    // opacity: [0,1],
    // easing: "easeInOutBack",
    // duration: 1500,
    // delay:100
    // });

    // logo
    // anime({
    // targets: '.navbar-brand',
    // opacity: [0,1],
    // easing: "easeInOutBack",
    // duration: 1500,
    // delay:0
    // });
    // btn
    // anime({
    // targets: '.navbar .btn',
    // opacity: [0,1],
    // translateX: [20,0],
    // easing: "easeInOutBack",
    // duration: 2000,
    // delay:200
    // });
    // icon

    
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

    setInitValues()
  });


  // Animaciones en el Scroll 

  // Valores iniciales
  function  setInitValues() {

    // Parte 1
    anime.set('#part1 .titlee', {
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

    anime.set('#part3 .mano', {
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
   
  var isPart1 = false
  var isPart1b = false
  var isPart2 = false
  var isPart3 = false
  var isPart4 = false
  var isPart5 = false
  var isPart6 = false
  var isPart7 = false
  var isPart8 = false
  var isPart9 = false
  var isPart10 = false 
  var isPart11 = false

  
  window.addEventListener("scroll", () => { 

  let scroll = document.documentElement.scrollTop
  let elBreake_1 = document.getElementById('part1')
  let breake1 = elBreake_1.getBoundingClientRect().top
  let elBreake_1b = document.getElementById('part1b')
  let breake1b = elBreake_1b.getBoundingClientRect().top 
  let elBreake_2 = document.getElementById('part2')
  let breake2 = elBreake_2.getBoundingClientRect().top 
  let elBreake_3 = document.getElementById('part3')
  let breake3 = elBreake_3.getBoundingClientRect().top 
  let elBreake_4 = document.getElementById('part4')
  let breake4 = elBreake_4.getBoundingClientRect().top 
  let elBreake_5 = document.getElementById('part5')
  let breake5 = elBreake_5.getBoundingClientRect().top 
  let elBreake_6 = document.getElementById('part6')
  let breake6 = elBreake_6.getBoundingClientRect().top 
  let elBreake_7 = document.getElementById('part7')
  let breake7 = elBreake_7.getBoundingClientRect().top 
  let elBreake_8 = document.getElementById('part8')
  let breake8 = elBreake_8.getBoundingClientRect().top
  let elBreake_9 = document.getElementById('part9')
  let breake9 = elBreake_9.getBoundingClientRect().top
  let elBreake_10 = document.getElementById('part10')
  let breake10 = elBreake_10.getBoundingClientRect().top 
  let elBreake_11 = document.getElementById('part11')
  let breake11 = elBreake_11.getBoundingClientRect().top

  console.log(document.getElementById('part1').getBoundingClientRect().top - (window.innerHeight -500))

  if(scroll > breake1){

    if(isPart1 !== true){
    
      anime({
      targets: '#part1 .titlee',
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
      delay: anime.stagger(300, {start: 0})
      })
      
      
      isPart1 = true
    }
  }

  if(scroll > breake1b){

    if(isPart1b !== true){
      console.log('part1b')
      anime({
        targets: '#part1b .tabla2',
        opacity: 1,
        translateY: 0,
        easing: "easeOutBack",
        duration: 1800,
        delay: anime.stagger(300, {start: 0})
        })
        
        isPart1b = true
    }
  }

  if(scroll > breake2){

    if(isPart2 !== true){

      console.log("part2")
    
        anime({
      targets: '.part-2 .icon',
      opacity: 1,
      scale: 1,
      rotate: '1turn',
      duration: 3100,
      delay:500
      });

      var tl = anime.timeline({
        targets: '.part-2 .row .img1',
        delay: 1000,
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
        delay: 1200,
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
        delay: 1500,
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
        delay: 1800
        })

       isPart2 = true
    }
  }

  if(scroll > breake3){

    if(isPart3 !== true){
      console.log('part3')
      anime({
        targets: '#part3 .title',
        opacity: 1,
        scale:1,
        easing: "easeInOutBack",
        duration: 2500,
        delay:0
        })

      anime({
        targets: '#part3 .text',
        opacity: 1,
        translateX:0,
        easing: "easeInOutExpo",
        duration: 2000,
        delay:500
        })
        
      anime({
        targets: '#part3 .icon',
        opacity: 1,
        translateX:0,
        scale: [1,0.9],
        easing: "easeInOutExpo",
        duration: 1000,
        delay:1000
        })

      anime({
        targets: '#part3 .mano',
        opacity: 1,
        translateY:0,
        easing: "easeOutExpo",
        duration: 1000,
        delay:1500
        })
  
        isPart3 = true
    }
  }

  if(scroll > breake4){

    if(isPart4 !== true){
      console.log('part4')

      anime({
        targets: '#part4 .title',
        opacity: 1,
        scale:1,
        easing: "easeInOutBack",
        duration: 2500,
        delay:0
        })

        anime({
          targets: '#part4 .images img',
          opacity: 1,
          zoom:0.9,
          easing: "easeInOutBack",
          duration: 1000,
          delay: anime.stagger(200, {start: 1000})
          })

          anime({
            targets: '#line_part4 path',
            strokeDashoffset: 0,
            easing: 'easeInOutSine',
            duration: 2000,
            delay: 500,
          });
        
        isPart4 = true
    }
  }

  if(scroll > breake5){

    if(isPart5 !== true){
      console.log('part5')

      anime({
        targets: '#part5 .title',
        opacity: 1,
        translateX:0,
        scale:0.8,
        easing: "easeOutExpo",
        duration: 1500,
        delay:0
        })

      anime({
        targets: '#part5 .text',
        opacity: 1,
        translateX:0,
        scale:0.7,
        easing: "easeOutExpo",
        duration: 2500,
        delay:200
        })

      anime({
        targets: '#part5 .celu',
        opacity: 1,
        translateY:0,
        easing: "easeOutExpo",
        duration: 2000,
        delay:500
        })
        
        isPart5 = true
    }
  }

  if(scroll > breake6){

    if(isPart6 !== true){
      console.log('part6')
  anime({
    targets: '#part6 .text',
    opacity: 1,
    scale: 1,
    easing: "easeInOutBack",
    duration: 2000,
    delay: anime.stagger(300, {start: 0})
    })

  anime({
    targets: '#part6 .text4',
    opacity: 1,
    scale: 0.9,
    easing: "easeInOutBack",
    duration: 2000,
    delay: 500
    })
  
    anime({
      targets: '#part6 .text5',
      opacity: 1,
      easing: "easeInOutBack",
      duration: 2000,
      delay: 1500
      })

    anime({
      targets: '#part6 .text6',
      opacity: 1,
      translateX: 50,
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2000
      })
    anime({
      targets: '#part6 .img1',
      opacity: 1,
      translateX: 0,
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2000
      })

    anime({
      targets: '#part6 .text7',
      opacity: 1,
      translateX: 75,
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2500
      })
    anime({
      targets: '#part6 .img2',
      opacity: 1,
      translateX: 0,
      easing: "easeInOutExpo",
      duration: 2000,
      delay: 2500
      })


    isPart6 = true
  }
}

  if(scroll > breake7){

    if(isPart7 !== true){
      console.log('part7')
      anime({
        targets: '#part7 .carousel',
        opacity: 1,
        easing: "easeOutExpo",
        duration: 1000,
        delay: 0
        })
        
        isPart7 = true
    }
  }

  if(scroll > breake8){

    if(isPart8 !== true){
      console.log('part8')
      anime({
        targets: '#part8 .title',
        opacity: 1,
        scale:0.8,
        easing: "easeOutExpo",
        duration: 2000,
        delay: 500
        })

        anime({
          targets: '#part8 .text, #part8 .icon',
          opacity: 1,
          translateX:0,
          easing: "easeOutExpo",
          duration: 3000,
          delay: 1000
          })
        
        isPart8 = true
    }
  }
  
  if(scroll > breake9){

    if(isPart9 !== true){
      console.log('part9')
      anime({
        targets: '#part9 .text',
        opacity: 1,
        scale: 1,
        easing: "easeInOutBack",
        duration: 1000,
        delay: anime.stagger(300, {start: 0})
        })

        anime({
          targets: '#part9 .title',
          opacity: 1,
          easing: "easeOutExpo",
          duration: 2000,
          delay: 500
          })
        
          anime({
            targets: '#part9 .text2',
            opacity: 1,
            easing: "easeOutExpo",
            duration: 2000,
            delay: 1000
            })

            anime({
              targets: '#part9 .icon',
              opacity: 1,
              translateY: 1,
              easing: "easeOutExpo",
              duration: 2000,
              delay: 1500
              })

              anime({
                targets: '#part10 .icon, #part10 .text',
                opacity: 1,
                translateX:0,
                easing: "easeOutExpo",
                duration: 1000,
                delay: 1600
                })
        
                anime({
                  targets: '#part11 .text2',
                  opacity: 1,
                  easing: "easeOutExpo",
                  duration: 1000,
                  delay: 1700
                  })
        
        
        isPart9 = true
    }
  }

  if(scroll > breake10){
    if(isPart10 !== true){
      console.log('part10')
   
     

      
      isPart10 = true
    }
  }

  if(scroll > breake11){
    if(isPart11 !== true){
      console.log('part11')

     
       
      isPart11 = true
    }
  }
//console.log(document.documentElement.scrollTop)
//console.log(document.getElementsByClassName('js-scroll').scrollHeight) 
//const container = document.querySelector('.js-scroll')
// const el = document.getElementById('animar')
// console.log('body: ', document.documentElement.scrollTop)
// console.log('pos: ',el.scrollHeight + el.style.height)
});