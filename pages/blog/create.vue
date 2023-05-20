<script setup>
	const article = ref({
		'title': '',
		'author': '',
		'text': ''
	})

	const addArticle = async () => {
		await useFetch('/api/articles/create', {
			method: 'POST',
			body: article.value
		})
		return navigateTo('/blog')
	}
</script>

<template>
	<div class="page-header">
		<h1>Create Article</h1>
		<button class="btn" @click="addArticle">Save Article</button>
	</div>

	<ArticleForm :article="article" />
</template>