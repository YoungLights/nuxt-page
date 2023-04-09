<script setup>
	defineProps({
		title: String,
		text: String,
		icon: String
	})
</script>


<template>
	<div class="service">
		<i :class="icon"></i>
		<h4>{{ title }}</h4>
		<p>{{ text }}</p>
	</div>
</template>