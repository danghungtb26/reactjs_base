import { useEffect, useState } from 'react'
import { UserApi } from 'src/apis/user'
import { User } from 'src/models/user'

export const useUserList = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<User[]>([])
  const [error, setError] = useState<boolean | string>(false)
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10,
  })

  const fetch = () => {
    UserApi.list().then(r => {
      setData([...r.data])
      if (r.page) setPage(r.page)
      setError(false)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetch()
  }, [])

  return {
    loading,
    setLoading,
    error,
    setError,
    data,
    setData,
    page,
    setPage,
    fetch,
  }
}
export const useEditOrCreate = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = (param: any, id: UserInterface['id']) => {
    return new Promise(resolve => {
      setLoading(true)
      //
      if (id) {
        UserApi.update({
          id,

          input: {
            ...param,
            id: id ?? param.id,
          },
        })
          .then(r => {
            setLoading(false)
          })
          .then(() => {
            resolve(true)
          })
      } else {
        UserApi.create({ input: param })
          .then(r => {
            setLoading(false)
          })
          .then(() => {
            resolve(true)
          })
      }
    })
  }

  return {
    loading,
    setLoading,
    fetch,
  }
}
