export default () => {
	const divHome = document.createElement('div')

	divHome.innerHTML = `
		<section class="content">
            <div class="img">
                <img src="./src/assets/react-2.svg" alt="brasil">
            </div>

            <article class="ler">
                <h1>Home</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates magnam tenetur sit deleniti magni perspiciatis voluptas aliquam, nesciunt laboriosam natus impedit. Quaerat iusto aliquam excepturi accusantium harum aspernatur ducimus possimus.</p>
            </article>
        </section>
	`
	return divHome;
}