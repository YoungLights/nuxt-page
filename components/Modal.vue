<script setup>
	defineProps({
		openModal: Function, 
		deleteArticle: Function
	})
</script>

<template>
	<div class="modal">
		<div class="modal-container">
			<h4>Are your sure?</h4>
			<div class="modal-buttons">
				<button class="btn btn-danger" @click="deleteArticle">yes</button>
				<button class="btn" @click="openModal">no</button>
			</div>
		</div>
	</div>
</template>