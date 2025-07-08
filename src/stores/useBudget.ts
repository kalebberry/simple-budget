import { ref, computed, watch } from 'vue';

type Transaction = {
	id: number;
	type: 'income' | 'expense';
	amount: number;
	category: string;
	description?: string;
	date: string;
};

const transactions = ref<Transaction[]>([]);
const nextId = ref<number>(1);

// 🛡️ Load from localStorage in the browser only
if (typeof window !== 'undefined') {
	const saved = localStorage.getItem('transactions');
	const savedId = localStorage.getItem('nextId');
	if (saved) transactions.value = JSON.parse(saved);
	if (savedId) nextId.value = Number(savedId);
}

const safeToSpend = computed(() => {
	const income = transactions.value
		.filter((t) => t.type === 'income')
		.reduce((sum, t) => sum + t.amount, 0);
	const expenses = transactions.value
		.filter((t) => t.type === 'expense')
		.reduce((sum, t) => sum + t.amount, 0);
	return income - expenses;
});

function addTransaction(t: Omit<Transaction, 'id'>) {
	transactions.value.unshift({ id: nextId.value++, ...t });
}

function clearAll() {
	transactions.value = [];
	nextId.value = 1;
}

// 💾 Watch and save only in browser
if (typeof window !== 'undefined') {
	watch(
		transactions,
		(val) => {
			localStorage.setItem('transactions', JSON.stringify(val));
			localStorage.setItem('nextId', nextId.value.toString());
		},
		{ deep: true }
	);
}

export function useBudget() {
	return {
		transactions,
		safeToSpend,
		addTransaction,
		clearAll,
	};
}
