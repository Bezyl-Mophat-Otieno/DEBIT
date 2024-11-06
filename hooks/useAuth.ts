import {QueryClient, useQueryClient} from "@tanstack/react-query";
import {signUpDebitUser, loginDebitUser} from "@/services/authService";
import {useAuthStore} from "@/lib/store/authStore";
import {useMutation} from "@tanstack/react-query";

export const useAuth = () => {
    const queryClient = useQueryClient();
    const setUser = useAuthStore((state) => state.setUser);
    const addDebitUserMutation = useMutation({
        mutationFn: signUpDebitUser,
    })
    const loginDebitUserMutation = useMutation({
        mutationFn: loginDebitUser,
        onSuccess: (user)=> setUser(user),
    })
    
    return {
        signUpDebitUser: addDebitUserMutation.mutate,
        loginDebitUser: loginDebitUserMutation.mutate,
        isCreating: addDebitUserMutation.isPending,
        isAuthenticating: loginDebitUserMutation.isPending,
        created: addDebitUserMutation.isSuccess,
        authenticated: loginDebitUserMutation.isSuccess,
    }
}