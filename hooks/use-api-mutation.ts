import { useMutation } from 'convex/react'
import { useState } from 'react'

export const useApiMutation = (mutationFunciton: any) => {
  const [pending, setPending] = useState(false)
  const apiMutation = useMutation(mutationFunciton)
  const mutate = (payload: any) => {
    setPending(true)
    return apiMutation(payload)
      .finally(() => setPending(false))
      .then((result) => {
        return result
      })
      .catch((err) =>{
        throw err
      })
  }
  return {mutate, pending }
}
