const key = document.querySelectorAll('.key') ;
const white = document.querySelectorAll('.white') ;
const black = document.querySelectorAll('.black') ;
const Do = document.getElementById('c') ;
const DoDies = document.getElementById('cdies') ;
const Re = document.getElementById('d') ;
const ReDies = document.getElementById('ddies') ;
const E = document.getElementById('e') ;
const F = document.getElementById('f') ;
const Fdies = document.getElementById('fdies') ;
const G = document.getElementById('g') ;
const Gdies = document.getElementById('gdies') ;
const A = document.getElementById('a') ;
const Adies = document.getElementById('adies') ;
const B = document.getElementById('b') ;

const doNote = new Audio('/PIANO-NA/AUDIO-L/DO.mp3') ;
const DoDiesNote = new Audio('/PIANO-NA/AUDIO-L/DOdies.mp3') ;
const ReNote = new Audio('/PIANO-NA/AUDIO-L/RE.mp3') ;
const ReDiesNote = new Audio('/PIANO-NA/AUDIO-L/REdies.mp3') ;
const eNote = new Audio('/PIANO-NA/AUDIO-L/MI.mp3') ;
const fNote = new Audio('/PIANO-NA/AUDIO-L/F.mp3') ;
const fDiesNote = new Audio('/PIANO-NA/AUDIO-L/Fdies.mp3') ;
const gNote = new Audio('/PIANO-NA/AUDIO-L/G.mp3') ;
const gDiesNote = new Audio('/PIANO-NA/AUDIO-L/Gdies.mp3') ;
const aNote = new Audio('/PIANO-NA/AUDIO-L/A.mp3') ;
const aDiesNote = new Audio('/PIANO-NA/AUDIO-L/Adies.mp3') ;
const bNote = new Audio('/PIANO-NA/AUDIO-L/B.mp3') ;




white.forEach(e => {
    e.addEventListener('click', () => {
        e.style.backgroundColor = 'rgb(250, 150, 245)'
        setTimeout(()=> {
            e.style.backgroundColor = 'white'
        }, 100)
    })
} )

black.forEach(e => {
    e.addEventListener('click', () => {
        e.style.backgroundColor = 'rgb(250, 150, 245)'
        setTimeout(()=> {
            e.style.backgroundColor = 'black'
        }, 100)
    })
})

Do.addEventListener('click', () => {
    doNote.play()
    doNote.currentTime = 0;
})

DoDies.addEventListener('click', () => {
    DoDiesNote.play()
    DoDiesNote.currentTime = 0;
})

Re.addEventListener('click', () => {
    ReNote.play()
    ReNote.currentTime = 0;
})

ReDies.addEventListener('click', () => {
    ReDiesNote.play()
    ReDiesNote.currentTime = 0;
})

E.addEventListener('click', () => {
    eNote.play()
    eNote.currentTime = 0;
})

F.addEventListener('click', () => {
    fNote.play()
    fNote.currentTime = 0;
})

Fdies.addEventListener('click', () => {
    fDiesNote.play()
    fDiesNote.currentTime = 0;
})

G.addEventListener('click', () => {
    gNote.play()
    gNote.currentTime = 0;
})

Gdies.addEventListener('click', () => {
    gDiesNote.play()
    gDiesNote.currentTime = 0;
})

A.addEventListener('click', () => {
    aNote.play()
    aNote.currentTime = 0;
})

Adies.addEventListener('click', () => {
    aDiesNote.play()
    aDiesNote.currentTime = 0;
})

B.addEventListener('click', () => {
    bNote.play()
    bNote.currentTime = 0;
})
