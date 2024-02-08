import { QueryClient, UseMutationOptions, useMutation } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"

export function useTypedMutation<TResponse = void>(options: UseMutationOptions<AxiosResponse<TResponse>, AxiosError<{message: any}>>, queryClient?: QueryClient) {
    return useMutation<AxiosResponse, AxiosError<{ message: string }>>(options, queryClient)
}