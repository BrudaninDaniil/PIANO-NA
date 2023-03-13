
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
console.log(btnVelocity.style);

btnReverb.style.backgroundColor = 'blue'
btnVelocity.style.backgroundColor = 'red'

function btnPluginsColors (a) {
    return a.style.backgroundColor == 'red' || a.style.backgroundColor == 'blue'  ? true : false ;
}

btnVelocity.addEventListener('mousedown', () => {
    if (btnPluginsColors (btnVelocity)) {
        btnVelocity.style.backgroundColor = 'black' ;
    } else {
        btnVelocity.style.backgroundColor = 'red';
    }
    console.log(btnVelocity.style.backgroundColor);
})

btnReverb.addEventListener('mousedown', () => {
    if (btnPluginsColors (btnReverb)) {
        btnReverb.style.backgroundColor = 'black' ;
    } else {
        btnReverb.style.backgroundColor = 'blue';
    }
})

white.forEach(e => {
    e.addEventListener('mousedown', () => {
        e.style.backgroundColor = 'rgb(250, 150, 245)'
        setTimeout(()=> {
            e.style.backgroundColor = 'white'
        }, 100)
    })
} )


black.forEach(e => {
    e.addEventListener('mousedown', () => {
        e.style.backgroundColor = 'rgb(250, 150, 245)'
        setTimeout(()=> {
            e.style.backgroundColor = 'black'
        }, 100)
    })
})

document.addEventListener('keydown', (e)=> {
    if (e.key === 'c') {
        if (btnPluginsColors(btnVelocity)) {
            doNoteS.play()
            doNoteS.currentTime = 0;
        } else {
            doNote.play()
            doNote.currentTime = 0;
        }
    }
})

document.addEventListener('keydown', (e)=> {
    if (e.key === 'f') {
        if (btnPluginsColors(btnVelocity)) {
            DoDiesNoteS.play()
            DoDiesNoteS.currentTime = 0;
        } else {
            DoDiesNote.play()
            DoDiesNote.currentTime = 0;
        }
    }
})

document.addEventListener('keydown', (e)=> {
    if (e.key === 'v') {
        if (btnPluginsColors(btnVelocity)) {
            ReNoteS.play()
            ReNoteS.currentTime = 0;
        } else {
            ReNote.play()
            ReNote.currentTime = 0;
        }
    }
})

document.addEventListener('keydown', (e)=> {
    if (e.key === 'g') {
        if (btnPluginsColors(btnVelocity)) {
            ReDiesNoteS.play()
            ReDiesNoteS.currentTime = 0;
        } else {
            ReDiesNote.play()
            ReDiesNote.currentTime = 0;
        }
    }
})


Do.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        doNoteS.play()
        doNoteS.currentTime = 0;
    } else {
        doNote.play()
        doNote.currentTime = 0;
    }
})

DoDies.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        DoDiesNoteS.play()
        DoDiesNoteS.currentTime = 0;
    } else {
        DoDiesNote.play()
        DoDiesNote.currentTime = 0;
    }
})

Re.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        ReNoteS.play()
        ReNoteS.currentTime = 0;
    } else {
        ReNote.play()
        ReNote.currentTime = 0;
    }  
})

ReDies.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        ReDiesNoteS.play()
        ReDiesNoteS.currentTime = 0;
    } else {
        ReDiesNote.play()
        ReDiesNote.currentTime = 0;
    }
})

E.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        eNoteS.play()
        eNoteS.currentTime = 0;
    } else {
        eNote.play()
        eNote.currentTime = 0;
    }
})

F.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        fNoteS.play()
        fNoteS.currentTime = 0;
    } else {
        fNote.play()
        fNote.currentTime = 0;
    }
})

Fdies.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        fDiesNoteS.play()
        fDiesNoteS.currentTime = 0;
    } else {
        fDiesNote.play()
        fDiesNote.currentTime = 0;
    }
})

G.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        gNoteS.play()
        gNoteS.currentTime = 0;
    } else {
        gNote.play()
        gNote.currentTime = 0;
    }
})

Gdies.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        gDiesNoteS.play()
        gDiesNoteS.currentTime = 0;
    } else {
        gDiesNote.play()
        gDiesNote.currentTime = 0;
    }
})

A.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        aNoteS.play()
        aNoteS.currentTime = 0;
    } else {
        aNote.play()
        aNote.currentTime = 0;
    }
})

Adies.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        aDiesNoteS.play()
        aDiesNoteS.currentTime = 0;
    } else {
        aDiesNote.play()
        aDiesNote.currentTime = 0;
    }
})

B.addEventListener('mousedown', () => {
    if (btnPluginsColors(btnVelocity)) {
        bNoteS.play()
        bNoteS.currentTime = 0;
    } else {
        bNote.play()
        bNote.currentTime = 0;
    }    
})
