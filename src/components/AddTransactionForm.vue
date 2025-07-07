<template>
	<form @submit.prevent="submit">
		<div class="flex gap-2">
			<select v-model="type">
				<option value="income">Income</option>
				<option value="expense">Expense</option>
			</select>
			<input v-model.number="amount" type="number" placeholder="Amount" />
		</div>
		<input v-model="category" type="text" placeholder="Category" />
		<input v-model="description" type="text" placeholder="Description (optional)" />
		<button type="submit">Add Transaction</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBudgetStore } from '../stores/budget';

const store = useBudgetStore();

const type = ref<'income' | 'expense'>('expense');
const amount = ref(0);
const category = ref('');
const description = ref('');

function submit() {
	if (!amount.value || !category.value) return;

	store.addTransaction({
		type: type.value,
		amount: amount.value,
		category: category.value,
		description: description.value,
		date: new Date().toISOString(),
	});

	// Clear the form
	amount.value = 0;
	category.value = '';
	description.value = '';
}
</script>
