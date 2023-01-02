window.addEventListener('load', function(){
    const t = document.getElementById('t')
    const i = document.getElementById('i')
    const c = document.getElementById('c')
    const q1 = document.getElementById('q1')
    const q2 = document.getElementById('q2')
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')
    const f1 = document.getElementById('f1')
    const f2 = document.getElementById('f2')
    const f3 = document.getElementById('f3')

    q1.addEventListener('dblclick', (e) => {
        img1.classList.remove('void')
        f1.classList.replace('void', 'final')
        t.classList.replace('title', 'void')
        c.classList.replace('context', 'void')
        q1.classList.replace('question1', 'void')
        q2.classList.replace('question2', 'void')
        i.classList.replace('instructions', 'void')
    })
    q2.addEventListener('dblclick', (e) => {
        img2.classList.remove('void')
        f2.classList.replace('void', 'final')
        t.classList.replace('title', 'void')
        c.classList.replace('context', 'void')
        q1.classList.replace('question1', 'void')
        q2.classList.replace('question2', 'void')
        i.classList.replace('instructions', 'void')
    })
    
    this.setTimeout(function(){
        if (!q1.classList.contains('void')){
            img3.classList.remove('void')
            f3.classList.replace('void', 'final')
            t.classList.replace('title', 'void')
            c.classList.replace('context', 'void')
            q1.classList.replace('question1', 'void')
            q2.classList.replace('question2', 'void')
            i.classList.replace('instructions', 'void')
        }
    }, 30000)
})