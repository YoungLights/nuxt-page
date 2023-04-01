<template>
	<Head>
		<Title>Nuxt Website</Title>
	</Head>
	<nav class="nav">
		<div class="nav-logo">
			<h4>🔥 NUXT WEBSITE</h4>
		</div>
		<div class="nav-links">
			<NuxtLink to="/">Index</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
			<NuxtLink to="/services">Services</NuxtLink>
			<NuxtLink to="/buhu">Buhu</NuxtLink>
		</div>
	</nav>
	<slot />
</template>