<template>
	<form @submit.prevent="submit" class="form">
		<select v-model="type">
			<option value="income">Income</option>
			<option value="expense">Expense</option>
		</select>
		<input v-model.number="amount" type="number" placeholder="Amount" />
		<input v-model="category" type="text" placeholder="Category" />
		<input v-model="description" type="text" placeholder="Description (optional)" />
		<button type="submit">Add</button>
	</form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBudget } from '../stores/useBudget';

const { addTransaction } = useBudget();

const type = ref<'income' | 'expense'>('expense');
const amount = ref(0);
const category = ref('');
const description = ref('');

function submit() {
	if (!amount.value || !category.value) return;
	addTransaction({
		type: type.value,
		amount: amount.value,
		category: category.value,
		description: description.value,
		date: new Date().toISOString(),
	});
	amount.value = 0;
	category.value = '';
	description.value = '';
}
</script>

<style scoped lang="scss">
.form {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-top: 1rem;

	input,
	select {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 6px;
	}

	button {
		padding: 0.5rem;
		background-color: #4caf50;
		color: white;
		border: none;
		border-radius: 6px;
		cursor: pointer;
	}
}
</style>
