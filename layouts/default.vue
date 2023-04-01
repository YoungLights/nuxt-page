<template>
	<Head>
		<Title>Nuxt Website</Title>
	</Head>
	<nav>
		<NuxtLink to="/">Index</NuxtLink>
		<NuxtLink to="/about">About</NuxtLink>
		<NuxtLink to="/services">Services</NuxtLink>
		<NuxtLink to="/buhu">Buhu</NuxtLink>
	</nav>
	<slot />
</template>