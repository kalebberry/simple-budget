<script setup>
import { useTransactionsStore } from '@/stores/useTransactionsStore';
import { formatCurrency } from '@/utils/currency';
import { formatDate } from '@/utils/formatDate';

const store = useTransactionsStore();
const transactions = store.transactions;
</script>

<template>
	<div class="transaction-list">
		<h3>Recent Transactions</h3>

		<ul v-if="transactions.length">
			<li v-for="txn in transactions" :key="txn.id" class="transaction-item">
				<span class="category">{{ txn.category }}</span>
				<span class="amount" :class="{ negative: txn.amount < 0, positive: txn.amount > 0 }">
					{{ formatCurrency(txn.amount) }}
				</span>
				<span class="date">{{ formatDate(txn.date) }}</span>
			</li>
		</ul>

		<p v-else>No transactions yet.</p>
	</div>
</template>
