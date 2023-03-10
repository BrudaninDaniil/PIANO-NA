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

const doNoteS = new Audio('/PIANO-NA/AUDIO-S/DO.mp3') ;
const DoDiesNoteS = new Audio('/PIANO-NA/AUDIO-S/DOdies.mp3') ;
const ReNoteS = new Audio('/PIANO-NA/AUDIO-S/RE.mp3') ;
const ReDiesNoteS = new Audio('/PIANO-NA/AUDIO-S/REdies.mp3') ;
const eNoteS = new Audio('/PIANO-NA/AUDIO-S/MI.mp3') ;
const fNoteS = new Audio('/PIANO-NA/AUDIO-S/F.mp3') ;
const fDiesNoteS = new Audio('/PIANO-NA/AUDIO-S/Fdies.mp3') ;
const gNoteS = new Audio('/PIANO-NA/AUDIO-S/G.mp3') ;
const gDiesNoteS = new Audio('/PIANO-NA/AUDIO-S/Gdies.mp3') ;
const aNoteS = new Audio('/PIANO-NA/AUDIO-S/A.mp3') ;
const aDiesNoteS = new Audio('/PIANO-NA/AUDIO-S/Adies.mp3') ;
const bNoteS = new Audio('/PIANO-NA/AUDIO-S/B.mp3') ;

const btnVelocity = document.querySelector('.velocity')
const btnReverb = document.querySelector('.reverb')

btnReverb.style.backgroundColor = 'blue'
btnVelocity.style.backgroundColor = 'red'
console.log(btnVelocity.style.backgroundColor);

function btnPluginsColors (a) {
    return a.style.backgroundColor == 'red' || a.style.backgroundColor == 'blue'  ? true : false ;
}

btnVelocity.addEventListener('click', () => {
    if (btnPluginsColors (btnVelocity)) {
        btnVelocity.style.backgroundColor = 'black' ;
    } else {
        btnVelocity.style.backgroundColor = 'red';
    }
    console.log(btnVelocity.style.backgroundColor);
})

btnReverb.addEventListener('click', () => {
    if (btnPluginsColors (btnReverb)) {
        btnReverb.style.backgroundColor = 'black' ;
    } else {
        btnReverb.style.backgroundColor = 'blue';
    }
})

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


if (btnVelocity.style.backgroundColor == 'red') {
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
} 

if (btnVelocity.style.backgroundColor = 'black') {
    Do.addEventListener('click', () => {
        doNoteS.play()
        doNoteS.currentTime = 0;
    })
    
    DoDies.addEventListener('click', () => {
        DoDiesNoteS.play()
        DoDiesNoteS.currentTime = 0;
    })
    
    Re.addEventListener('click', () => {
        ReNoteS.play()
        ReNoteS.currentTime = 0;
    })
    
    ReDies.addEventListener('click', () => {
        ReDiesNoteS.play()
        ReDiesNoteS.currentTime = 0;
    })
    
    E.addEventListener('click', () => {
        eNoteS.play()
        eNoteS.currentTime = 0;
    })
    
    F.addEventListener('click', () => {
        fNoteS.play()
        fNoteS.currentTime = 0;
    })
    
    Fdies.addEventListener('click', () => {
        fDiesNoteS.play()
        fDiesNoteS.currentTime = 0;
    })
    
    G.addEventListener('click', () => {
        gNoteS.play()
        gNoteS.currentTime = 0;
    })
    
    Gdies.addEventListener('click', () => {
        gDiesNoteS.play()
        gDiesNoteS.currentTime = 0;
    })
    
    A.addEventListener('click', () => {
        aNoteS.play()
        aNoteS.currentTime = 0;
    })
    
    Adies.addEventListener('click', () => {
        aDiesNoteS.play()
        aDiesNoteS.currentTime = 0;
    })
    
    B.addEventListener('click', () => {
        bNoteS.play()
        bNoteS.currentTime = 0;
    })
}

