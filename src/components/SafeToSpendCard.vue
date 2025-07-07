<template>
	<div>
		<h2>Safe to Spend</h2>
		<p>${{ store.safeToSpend.toFixed(2) }}</p>
	</div>
</template>

<script setup lang="ts">
import { useBudgetStore } from '../stores/budget';
const store = useBudgetStore();
</script>
