import { Counter } from "../../components/counter.js";

export default () => {
    const divImg = document.createElement('div')

    const content = `
        <section class="content">
            <div class="img">
                <img src="./src/assets/usa.svg" alt="usa">
            </div>

            <article class="ler">
                ${Counter()}
            </article>    
        </section>
    `

    divImg.innerHTML = content;

    return divImg;
}