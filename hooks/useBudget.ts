import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBudgets, createBudget } from '@/services/budgetService';
import { Budget } from '@/types';

export function useBudget() {
    const queryClient = useQueryClient();

    const budgets = useQuery({
        queryKey: ['budgets'],
        queryFn: getBudgets,
    });

    const createBudgetMutation = useMutation({
        mutationFn: (newBudget: Omit<Budget, 'id' | 'userId'>) =>
            createBudget(newBudget),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['budgets'] });
        },
    });

    return {
        budgets,
        createBudget: createBudgetMutation.mutate,
        isCreating: createBudgetMutation.isPending,
    };
}