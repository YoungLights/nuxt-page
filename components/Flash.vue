<script setup>
	defineProps({
		message: String
	})
</script>

<template>
	<div class="flash">
		<i class="fa-solid fa-circle-info"></i>
		<h4>{{ message }}</h4>
	</div>
</template>