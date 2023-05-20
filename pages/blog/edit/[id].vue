<script setup>
	defineProps({Article: Object})
	
	const route = useRoute()
	const articleId = route.params.id
	const article = ref({})
	
	const fetchArticle = async () => {
		article.value = await $fetch(`/api/articles/${articleId}`)
	}
	
	onMounted(() => {fetchArticle()})


	const updateArticle = async () => {
		await useFetch(`/api/articles/update/${articleId}`, {
			method: 'POST',
			body: article.value
		})
		return navigateTo('/blog')
	}
</script>

<template>
	<div class="page-header">
		<h1>Edit Article</h1>
		<button class="btn" @click="updateArticle">Update Article</button>
	</div>

	<ArticleForm :article="article" />
</template>