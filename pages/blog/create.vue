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

	<form class="form">
		<div class="form-item">
			<label>Title</label>
			<input type="text" name="title" v-model="article.title">
		</div>
		<div class="form-item">
			<label>Author</label>
			<input type="text" name="author" v-model="article.author">
		</div>
		<div class="form-item">
			<label>Text</label>
			<textarea name="text" v-model="article.text"></textarea>
		</div>
	</form>
</template>