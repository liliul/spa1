import Brasil from './pages/home/brasil.js';
import Alemanha from './pages/home/alemanha.js';
import Reino from './pages/home/reino.js';
import Usa from './pages/home/usa.js';
import Erro from './pages/home/erro.js';




const root = document.querySelector('#root')

const iniciar = () => {
    window.addEventListener('hashchange', () => {
        console.log(window.location.hash)

        root.innerHTML = "";

        switch(window.location.hash) {
            case "#brasil":
                root.appendChild(Brasil())
                break
            case "#alemanha":
                root.appendChild(Alemanha())
                break
            case "#reino":
                root.appendChild(Reino())    
                break
            case "#eua":
                root.appendChild(Usa())    
                break
            default:
                root.appendChild(Erro())    

        }
    })
}

window.addEventListener('load', () => {
    root.appendChild(Brasil())

    iniciar()
})