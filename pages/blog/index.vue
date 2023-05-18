<script setup>
	const {data: articles} = await useFetch('/api/articles')
</script>

<template>
	<div class="page-header">
		<h1>Blog</h1>
		<NuxtLink class="btn" to="/blog/create">create article</NuxtLink>
	</div>

	<div class="article" v-for="article in articles" :key="article.id">
		<h2>{{ article.title }}</h2>
		<small>by {{ article.author }}</small>
		<p>{{ article.text }}</p>
	</div>
</template>