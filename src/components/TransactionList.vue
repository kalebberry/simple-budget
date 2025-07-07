<template>
	<div>
		<h3>Recent Transactions</h3>
		<ul>
			<li v-for="transaction in store.transactions" :key="transaction.id">
				<span>
					{{ transaction.category }}
				</span>
				<span :class="transaction.type === 'income' ? 'text-green-600' : 'text-red-600'">
					{{ transaction.type === 'income' ? '+' : '-' }}${{ transaction.amount.toFixed(2) }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useBudgetStore } from '../stores/budget';

const store = useBudgetStore();
</script>
