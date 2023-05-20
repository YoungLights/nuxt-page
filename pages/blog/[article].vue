<script setup>
	const route = useRoute()
	const articleId = route.params.article
	const modalState = ref(false)

	const {data: article} = await useFetch(`/api/articles/${articleId}`)

	const openModal = () => {
		modalState.value = !modalState.value
	}

	const deleteArticle = async () => {
		await useFetch(`/api/articles/delete`, {
			method: 'POST',
			body: {
				id: articleId
			}
		})
		return navigateTo('/blog')
	}
</script>

<template>
	<Modal :class="{active: modalState}" :openModal="openModal" :deleteArticle="deleteArticle" />

	<div class="render" v-if="article">
		<div class="page-header">
			<h1>{{ article.title }}</h1>
			<div class="page-buttons">
				<button class="btn btn-danger" @click="openModal">delete</button>
				<NuxtLink class="btn" :to="`/blog/edit/${article.id}`">edit</NuxtLink>
			</div>
		</div>
		<div class="article">
			<p>{{ article.text }}</p>
			<small>by {{ article.author }}</small>
		</div>
	</div>
</template>