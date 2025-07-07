import { defineStore } from 'pinia';

interface Transaction {
	id: number;
	type: 'income' | 'expense';
	amount: number;
	category: string;
	description?: string;
	date: string;
}

export const useBudgetStore = defineStore('budget', {
	state: () => ({
		transactions: JSON.parse(localStorage.getItem('transactions') || '[]') as Transaction[],
		nextId: Number(localStorage.getItem('nextId') || '1'),
	}),
	getters: {
		safeToSpend(state): number {
			const totalIncome = state.transactions
				.filter((transaction) => transaction.type === 'income')
				.reduce((sum, transaction) => sum + transaction.amount, 0);

			const totalExpenses = state.transactions
				.filter((transaction) => transaction.type === 'expense')
				.reduce((sum, transaction) => sum + transaction.amount, 0);

			return totalIncome - totalExpenses;
		},
	},
	actions: {
		addTransaction(transaction: Omit<Transaction, 'id'>) {
			const newTransaction = { id: this.nextId++, ...transaction };
			this.transactions.unshift(newTransaction);

			// Save updated state to localStorage
			localStorage.setItem('transactions', JSON.stringify(this.transactions));
			localStorage.setItem('nextId', this.nextId.toString());
		},
		clearAll() {
			this.transactions = [];
			this.nextId = 1;
			localStorage.removeItem('transactions');
			localStorage.removeItem('nextId');
		},
	},
});
