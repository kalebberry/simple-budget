<script setup lang="ts">
import { useBudgetStore } from '@/stores/useBudgetStore';

const budgetStore = useBudgetStore();
</script>

<template>
	<div class="safe-to-spend">
		<h2>Safe to Spend</h2>
		<p>\${{ budgetStore.safeToSpend }}</p>
	</div>
</template>
