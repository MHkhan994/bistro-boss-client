import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
const useCart = email => {
    const { user } = useContext(AuthContext)

    const { isLoading, refetch, isError, data: cart = [], error } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return response.json()
        },
    })

    return [cart, refetch]

}

export default useCart