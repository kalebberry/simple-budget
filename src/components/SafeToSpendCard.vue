<template>
	<div class="card safe-to-spend">
		<h2>Safe to Spend</h2>
		<p class="amount">${{ safeToSpend.toFixed(2) }}</p>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

interface Transaction {
	type: 'income' | 'expense';
	amount: number;
	category?: string;
	description?: string;
	date?: string;
}

// Load transactions from localStorage safely
function loadTransactions(): Transaction[] {
	try {
		return JSON.parse(localStorage.getItem('transactions') || '[]');
	} catch {
		return [];
	}
}

const transactions = ref<Transaction[]>(loadTransactions());

watch(
	transactions,
	(newVal) => {
		localStorage.setItem('transactions', JSON.stringify(newVal));
	},
	{ deep: true }
);

const safeToSpend = computed(() => {
	const income = transactions.value
		.filter((t) => t.type === 'income')
		.reduce((sum, t) => sum + t.amount, 0);
	const expenses = transactions.value
		.filter((t) => t.type === 'expense')
		.reduce((sum, t) => sum + t.amount, 0);
	return income - expenses;
});
</script>

<style scoped lang="scss">
.safe-to-spend {
	border-left: 4px solid #4caf50;
	background-color: #e9fbe9;
	padding: 1rem;
	border-radius: 0.5rem;

	.amount {
		font-size: 2rem;
		font-weight: bold;
		margin-top: 0.5rem;
	}
}
</style>
