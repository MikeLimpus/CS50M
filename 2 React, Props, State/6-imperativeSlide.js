const SLIDE = {
    title: 'React is Declarative',
    bullets : [ 
        'Imperative vs Declaritive',
        "The browser APIs suck",
        'React allows us to write what we want and the library handles DOM manip',
        ],
}

function createSlide(slide){
    const slideElement = document.createElement('div')

    //TODO add to slide
    const title = document.createElement('h1')
    title.innerHTML = SLIDE.title;

    return slideElement;
}