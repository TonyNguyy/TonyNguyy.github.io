// const lotus = document.querySelector('#lotus');
// const title = document.querySelector('#med-center-title');
const sun = document.querySelector('#sun');
const layer = document.querySelector('.layers');



// window.addEventListener('scroll',()=>{

//     let value = window.scrollY();

//     lotus.style.marginBottom = value * 2 + 'px';
//     title.style.marginBottom = value * 2 + 'px';

// });


function scrollWindow(){
    window.scrollTo({
        top:400,
        behavior:"smooth",
    });
    
}

// function sunScroll(){
//     sun.scrollTo(0,250);
// }

// function scroll(){
//     window.scrollTo(0,250)
// }


    // window.onload = function(){
    //     scrollWindow();
    // };
 

//

// layer.scrollIntoView({alignToTop:false, behavior:"smooth"});