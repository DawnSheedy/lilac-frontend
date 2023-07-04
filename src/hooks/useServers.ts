import { useMemo } from "react"
import { useGetServersQuery } from "../redux/api/serversApi"

/**
 * Get list of servers for a user
 * @returns 
 */
export const useServers = () => {
    const { data } = useGetServersQuery()
    const memoizedData = useMemo(() => data ?? [], [data])

    return memoizedData
}