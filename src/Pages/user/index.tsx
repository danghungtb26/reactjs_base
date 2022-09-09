import { Spin, Table, TableProps } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { UserApi } from 'src/apis/user'
import Page from 'src/components/Page'
import { fake_data, User } from 'src/models/user'

type UserPageProps = {}

const UserPage: React.FC<UserPageProps> = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<User[]>([])
  const [error, setError] = useState<boolean | string>(false)
  const [page, setPage] = useState<Page>({
    current: 1,
    max: 10,
  })

  useEffect(() => {
    UserApi.list().then(r => {
      setData(r.data)
      if (r.page) setPage(r.page)
      setError(false)
      setLoading(false)
    })
    // setTimeout(() => {
    //   setData(fake_data)
    //   setError(false)
    //   setPage({
    //     current: 1,
    //     max: 10,
    //   })
    //   setLoading(false)
    // }, 1000)
  }, [])

  const columns = useRef<TableProps<User>['columns']>([
    {
      key: 'id',
      dataIndex: 'id',
      title: 'Id',
      width: '60px',
    },
    {
      title: 'First name',
      key: 'firstName',
      dataIndex: 'firstName',
    },
    {
      title: 'Last name',
      key: 'lastName',
      dataIndex: 'lastName',
    },
    {
      title: 'Birthday',
      key: 'birthday',
      dataIndex: 'birthday',
    },
    {
      title: 'Gender',
      key: 'gender',
      dataIndex: 'gender',
      render: value => {
        return <span>{value === 1 ? 'Nam' : 'Nữ'}</span>
      },
    },
    {
      title: 'Created at',
      key: 'created_at',
      dataIndex: 'created_at',
    },
  ])

  //   if (loading) return <Spin />

  //   if (error) return error

  return (
    <Page inner>
      {error ? (
        <p>{error}</p>
      ) : (
        <Table loading={loading} dataSource={data} columns={columns.current} />
      )}
    </Page>
  )
}

export default UserPage
