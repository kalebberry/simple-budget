<script setup lang="ts">
import { ref } from 'vue';
import { useTransactionsStore } from '@/stores/useTransactionsStore';

// get the store instance
const transactionsStore = useTransactionsStore();

const merchant = ref('');
const amount = ref(0);
const category = ref('');

const type = ref<'expense' | 'income'>('expense');
const date = ref(new Date().toISOString().split('T')[0]); // Default to today's date

// This Function will be called when the form is submitted

const handleSubmit = () => {
	// Basic validation
	if (!merchant.value || amount.value <= 0) {
		alert('Please fill out the merchant and a valid amount.');
		return;
	}
	// Call the action in our store, passing the new transaction data
	transactionsStore.addTransaction({
		merchant: merchant.value,
		amount: amount.value,
		category: category.value,
		type: type.value,
		date: date.value,
	});

	// Optional: Reset the form fields
	merchant.value = '';
	amount.value = 0;
	category.value = '';
};
</script>

<template></template>
