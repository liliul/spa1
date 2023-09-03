/**import Brasil from './pages/home/brasil.js';
import Alemanha from './pages/home/alemanha.js';
import Reino from './pages/home/reino.js';
import Usa from './pages/home/usa.js';
import Erro from './pages/home/erro.js';
import Home from './pages/home/home.js';


const root = document.querySelector('#root')

// const hash = (hash) => hash === "" ? 'home' : hash.replace('#', '');
// const url = hash(window.location.hash);
// console.log('url', url)
// root.appendChild(url)


const iniciar = () => {
    // if(window.location.pathname === '/'){
    //     root.append(Home())
    // }
    // if(window.location.pathname == '/d'){
    //     root.append(Usa())
    // }
    
    window.addEventListener('hashchange', () => {
        // console.log(window.location.hash.substring(1))
        root.innerHTML = "";

       
        
        
        
        switch(window.location.hash) {
            case "#home":
                root.appendChild(Home())
                break
            case "#brasil":
                root.append(Brasil())
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
    //root.appendChild(Brasil())
    // validar();
    iniciar();
})
*/

import Brasil from './pages/home/brasil.js';
import Alemanha from './pages/home/alemanha.js';
import Reino from './pages/home/reino.js';
import Usa from './pages/home/usa.js';
import Erro from './pages/home/erro.js';
import Home from './pages/home/home.js';


const routes = {
    brasil: Brasil(),
    alemanha: Alemanha(),
    reino: Reino(),
    eua: Usa(),
    error: Erro(),
    home: Home()
}

const root = document.querySelector('#root')

const iniciar = () => window.addEventListener('hashchange', renderPaginas) 
const hash = (hash) => hash === "" ? 'home' : hash.replace('#', '');

function renderPaginas() {
    const verPagina = hash(window.location.hash);
    root.innerHTML = '';
    root.appendChild(routes[verPagina]);

}
window.addEventListener('load', () => {
    renderPaginas();
    iniciar();
})
