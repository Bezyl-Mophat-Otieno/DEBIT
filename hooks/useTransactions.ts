import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getTransactions, createTransaction } from '@/services/transactionService';
import { Transaction } from '@/types';

export function useTransactions() {
    const queryClient = useQueryClient();

    const transactions = useQuery({
        queryKey: ['transactions'],
        queryFn: getTransactions,
    });

    const createTransactionMutation = useMutation({
        mutationFn: (newTransaction: Omit<Transaction, 'id' | 'userId'>) =>
            createTransaction(newTransaction),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['transactions'] });
        },
    });

    return {
        transactions,
        createTransaction: createTransactionMutation.mutate,
        isCreating: createTransactionMutation.isPending,
    };
}