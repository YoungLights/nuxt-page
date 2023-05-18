<script setup>
	const route = useRoute()
	const articleId = route.params.id

	const {data: article} = await useFetch(`/api/articles/${articleId}`)
</script>

<template>
	<div class="page-header">
		<h1>{{ article.title }}</h1>
	</div>
</template>