const appeals = document.getElementById('appeals');
const appealsSection = document.getElementById('appealsSection');
appeals.addEventListener('mouseenter',()=>{
    appealsSection.style.display = 'flex'
})
appeals.addEventListener('mouseleave',()=>{
    appealsSection.style.display = 'none'
})
appealsSection.addEventListener('mouseenter',()=>{
    appealsSection.style.display = 'flex'
})
appealsSection.addEventListener('mouseleave',()=>{
    appealsSection.style.display = 'none'
})


const causeSection = document.getElementById('causeSection')
const cause = document.getElementById('cause')
cause.addEventListener('mouseenter',()=>{
    causeSection.style.display = 'flex'
})
cause.addEventListener('mouseleave',()=>{
    causeSection.style.display = 'none'
})
causeSection.addEventListener('mouseenter',()=>{
    causeSection.style.display = 'flex'
})
causeSection.addEventListener('mouseleave',()=>{
    causeSection.style.display = 'none'
})

const religiousSection = document.getElementById('religiousSection')
const religious = document.getElementById('religious')
religious.addEventListener('mouseenter',()=>{
    religiousSection.style.display = 'flex'
})
religious.addEventListener('mouseleave',()=>{
    religiousSection.style.display = 'none'
})
religiousSection.addEventListener('mouseenter',()=>{
    religiousSection.style.display = 'flex'
})
religiousSection.addEventListener('mouseleave',()=>{
    religiousSection.style.display = 'none'
})

const  abooutSection= document.getElementById('abooutSection')
const  about= document.getElementById('about')
about.addEventListener('mouseenter',()=>{
    abooutSection.style.display = 'flex'
})
about.addEventListener('mouseleave',()=>{
    abooutSection.style.display = 'none'
})
abooutSection.addEventListener('mouseenter',()=>{
   abooutSection.style.display = 'flex'
})
abooutSection.addEventListener('mouseleave',()=>{
    abooutSection.style.display = 'none'
})

let movingImage = document.querySelectorAll('.movingImages')
let index = 0
while(index< movingImage.length){
    movingImage[index].style.left = `${index * 100}%`
    index +=1
}
let goForward = 0
function imagesSlider1(){
    for(let a = 0;a<movingImage.length;a++){
        movingImage[a].style.transform =  `translateX(-${goForward * 100}%)`
    }
    goForward++;
}

function checkValue(){
    if(goForward === movingImage.length){
        goForward = 0
        imagesSlider1()
    }else{
        imagesSlider1()
    }
}
setInterval(checkValue,5000)


const navigation = document.getElementById('navigation')
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const logo = document.getElementById("logo")
const body = document.getElementById('body')
let fundsBoxe = document.querySelectorAll('.fundsBoxes')
let appel= document.querySelectorAll('.appeal')
const loction = document.getElementById('loction')
const locationHeadingColor = document.getElementById('locationHeadingColor')
button1.addEventListener('click',()=>{
    button1.style.display = 'none'
    button2.style.display = 'block'
    navigation.style.background = 'white'
    appeals.style.color = 'black'
    cause.style.color = 'black'
    religious.style.color = 'black'
    about.style.color = 'black'
    button2.style.background = 'white'
    logo.style.color = 'black'
    body.style.backgroundColor = 'black'
    body.style.color = 'white'
    loction.style.background = 'black'
    locationHeadingColor.style.color = 'white'
    fundsBoxe.forEach(e=>{
        e.style.backgroundColor = 'black'
    })
    appel.forEach(e=>{
        e.style.backgroundColor = '#1c1c1c'
    })
})
button2.addEventListener('click',()=>{
    button2.style.display = 'none'
    button1.style.display = 'block'
    navigation.style.background = 'black'
    appeals.style.color = 'white'
    cause.style.color = 'white'
    religious.style.color = 'white'
    about.style.color = 'white'
    button2.style.background = 'black'
    logo.style.color = 'white'
    body.style.backgroundColor = 'white'
    body.style.color = 'black'
    loction.style.background = 'url(blueBackground.avif) no-repeat center center/cover'
    locationHeadingColor.style.color = 'black'
    fundsBoxe.forEach(e=>{
        e.style.backgroundColor = 'white'
    })
    appel.forEach(e=>{
        e.style.backgroundColor = 'rgba(209, 207, 207, 0.82)'
    })
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach(
        (entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show')
            }else{
                entry.target.classList.remove('show')
            }
    })
})
let animatedE = document.querySelectorAll('.animatedElement')
animatedE.forEach((el)=>observer.observe(el))