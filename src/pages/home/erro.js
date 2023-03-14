export default () => {
    const divImg = document.createElement('div')

    const content = `
        <section class="erro">
           <h1>Pagina Não Em Contrada</h1>
        </section>
    `

    divImg.innerHTML = content;

    return divImg;
}