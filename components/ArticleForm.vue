<script setup>
	defineProps({
		article: Object
	})
</script>

<template>
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