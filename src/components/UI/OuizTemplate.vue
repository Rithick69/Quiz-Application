<template>
    <main>
        <slot></slot>
        <h1><slot></slot></h1>
    </main>
</template>

<style scoped>
main{
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
</style>