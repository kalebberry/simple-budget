import { defineStore } from 'pinia';

export interface Transaction {
	id: string;
	amount: number;
	category: string;
	date: string;
}

export const useTransactionsStore = defineStore('transactions', {
	state: () => ({
		transactions: [] as Transaction[],
	}),
	actions: {
		addTransactions(txn: Transaction) {
			this.transactions.push(txn);
			localStorage.setItem('transactions', JSON.stringify(this.transactions));
		},
		loadFromStorage() {
			const raw = localStorage.getItem('transactions');
			if (raw) {
				this.transactions = JSON.parse(raw);
			}
		},
	},
});
