<template>
    <main>
        <slot>
            <h1></h1>
            <section>
            </section>
            <section>
                <h2>
                    <p></p>
                    </h2>
            </section>
        </slot> 
    </main>
</template>


<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Montserrat', sans-serif;
}
main {
    display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem;
	height: 100vh;
}
h1 {
	font-size: 2rem;
	margin-bottom: 2rem;
}
section{
	background-color: transparent;
    border: 1px solid black;
	padding: 1rem;
	width: 100%;
	max-width: 640px;
}
h2 {
	font-size: 2rem;
	margin-bottom: 2rem;
	text-align: center;
}
p {
	color: #640032;
	font-size: 1.5rem;
	text-align: center;
    margin-bottom: 2rem;
}
</style>