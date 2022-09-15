import { Button, Spin, Table, TableProps } from 'antd'
import { error } from 'console'
import React, { useEffect, useRef, useState } from 'react'
import { UserApi } from 'src/apis/user'
import Page from 'src/components/Page'
import { useUserList } from 'src/hooks/user'
import { fake_data, User } from 'src/models/user'
import ModalForm, { ModalFormMethod } from './components/ModalForm'

type UserPageProps = {}

const UserPage: React.FC<UserPageProps> = () => {
  const { data, loading, error, page, fetch } = useUserList()

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
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        return (
          <div>
            <Button
              onClick={() => {
                onEdit(record)
              }}
            >
              Edit
            </Button>
          </div>
        )
      },
    },
  ])

  //   if (loading) return <Spin />

  //   if (error) return error
  const modal = useRef<ModalFormMethod>(null)

  const onEdit: (value: User) => void = value => {
    modal.current?.setVisible(true)
    modal.current?.setData?.(value)
  }

  const onCreate = () => {
    modal.current?.setVisible(true)
    // console.log('🚀 ~ file: index.tsx ~ line 59 ~ onCreate ~ modal', modal)
  }

  const onFinished = () => {
    fetch()
  }

  return (
    <Page inner>
      <div className="view-create">
        <Button onClick={onCreate}>Create</Button>
      </div>
      <Table
        rowKey={item => item.id}
        loading={loading}
        dataSource={data}
        columns={columns.current}
      />
      <ModalForm ref={modal} onFinished={onFinished} />
    </Page>
  )
}

export default UserPage
