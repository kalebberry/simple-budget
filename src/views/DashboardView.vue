<template>
	<div>
		<SafeToSpendCard />
		<AddTransactionForm />
		<TransactionList />

		<button @click="clear" class="clear-button">Clear All Transactions</button>
	</div>
</template>

<script setup lang="ts">
import SafeToSpendCard from '../components/SafeToSpendCard.vue';
import AddTransactionForm from '../components/AddTransactionForm.vue';
import TransactionList from '../components/TransactionList.vue';
import { useBudgetStore } from '../stores/budget';

const store = useBudgetStore();

function clear() {
	if (confirm('Are you sure you want to clear all transactions?')) {
		store.clearAll();
	}
}
</script>
