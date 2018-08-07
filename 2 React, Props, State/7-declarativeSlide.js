const SLIDE = {
    title: 'React is Declarative',
    bullets : [ 
        'Imperative vs Declaritive',
        "The browser APIs suck",
        'React allows us to write what we want and the library handles DOM manip',
        ],
}

function createSlide(slide){
    return (
        <div>
            <h1> title={SLIDE.title} </h1>
            <ul>
                {SLIDE.bullets.map(bullet => <li>{bullet}</li>)}
            </ul>
        </div>
    )
}