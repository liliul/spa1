export default () => {
    const divImg = document.createElement('div')

    const content = `
        <section class="content">
            <div class="img">
                <img src="./src/assets/usa.svg" alt="usa">
            </div>

            <article class="ler">
                <h1>Lorem input cat spas</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam tenetur sit deleniti magni perspiciatis voluptas aliquam, nesciunt laboriosam natus impedit. Quaerat iusto aliquam excepturi accusantium harum aspernatur ducimus possimus.</p>
            </article>
        </section>
    `

    divImg.innerHTML = content;

    return divImg;
}