import {addIncome} from "@/services/incomeService";
import {AddIncomeFormData} from "@/types";
import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";


export function useIncome(){
    const queryClient = useQueryClient();
    const createIncomeMutation = useMutation({
        mutationFn: (income:AddIncomeFormData)=> addIncome(income),
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey: ['dashboard']})
        }
    })
    
    return {
        createIncome: createIncomeMutation.mutate,
        isCreating: createIncomeMutation.isPending,
    }
}