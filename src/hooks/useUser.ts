import { useGetUserQuery } from "../redux/api/authApi"

export const useUser = () => {
    return useGetUserQuery().data
}