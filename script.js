function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    function cancel() {
        // Scroll to the skills section (or any other section you want)
        document.getElementById('skills').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }
    
}

// Typewriter Effect

const texts = [
    "DESIGNER",
    "PHOTOGRAPHER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

// Get all sections
const sections = document.querySelectorAll('.section');

// Function to check if an element is in the viewport
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

// Function to handle adding the "visible" class when section is in view
const checkVisibility = () => {
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
};

// Initial check
checkVisibility();

// Add scroll event listener to detect scroll and trigger visibility
window.addEventListener('scroll', checkVisibility);

window.onload = typeWriter