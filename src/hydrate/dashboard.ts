import { initPinia } from '@/utils/initPinia';
import SafeToSpend from '@/components/vue/dashboard/SafeToSpend.vue';
import TransactionList from '@/components/vue/dashboard/TransactionList.vue';

initPinia(SafeToSpend, '#safe-to-spend');
initPinia(TransactionList, '#transaction-list');
