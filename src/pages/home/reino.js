function text(){return 'function text return'}
function Somar(num1,num2){
    return console.log(num1 + num2);
}
function* gerar(){
    console.log('inicio do yield')
    yield 'messagem gerandora!!!'
    console.log('fim do yield')
}

export default () => {
    const divImg = document.createElement('div')

    const content = `
        <section class="content">
            <div class="img">
                <a href='#brasil'>
                    <img src="./src/assets/ingraterra.svg" alt="ingraterra">
                </a>    
            </div>

            <article class="ler">
                <h1>Lorem input cat spas</h1>
                
                <strong onclick='${Somar(10,10)}' style='font-size:15px;'>${text()}</strong>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam tenetur sit deleniti magni perspiciatis voluptas aliquam, nesciunt laboriosam natus impedit. Quaerat iusto aliquam excepturi accusantium harum aspernatur ducimus possimus.</p>
            </article>
        </section>
    `

    divImg.innerHTML = content;
    console.log(gerar().next())
    return divImg;
}