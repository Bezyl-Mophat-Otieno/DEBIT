import {signUpDebitUser, loginDebitUser, persistClerkSignedUpUser} from "@/services/authService";
import {useAuthStore} from "@/lib/store/authStore";
import {useMutation} from "@tanstack/react-query";

export const useAuth = () => {
    const setUser = useAuthStore((state) => state.setUser);
    const addDebitUserMutation = useMutation({
        mutationFn: signUpDebitUser,
    })

    const loginDebitUserMutation = useMutation({
        mutationFn: loginDebitUser,
        onSuccess: (user)=> setUser(user),
    })

    const persistClerkSignedUpUserMutation = useMutation({
        mutationFn: persistClerkSignedUpUser,
    })
    
    return {
        signUpDebitUser: addDebitUserMutation.mutate,
        loginDebitUser: loginDebitUserMutation.mutate,
        isCreating: addDebitUserMutation.isPending,
        isAuthenticating: loginDebitUserMutation.isPending,
        created: addDebitUserMutation.isSuccess,
        authenticated: loginDebitUserMutation.isSuccess,
        errored: loginDebitUserMutation.isError || addDebitUserMutation.isError,
        error: addDebitUserMutation.error || loginDebitUserMutation.error,
        persistClerkUser:persistClerkSignedUpUserMutation.mutate,
        persisted: persistClerkSignedUpUserMutation.isSuccess
    }
}