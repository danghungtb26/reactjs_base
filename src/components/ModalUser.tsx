import { Form, FormInstance, Input, Modal } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { UserInterface } from 'src/models/user'

export type NewUserType = Omit<UserInterface, 'id'> & { id?: number }

type ModalUserProps = {
  visible?: boolean
  onFinished?: (value: NewUserType) => void
  onCancel?: () => void
  user?: UserInterface
}

const ModalUser: React.FC<ModalUserProps> = ({ visible, onFinished, onCancel, user }) => {
  const [company, setCompany] = useState<string>('')
  const a = useRef<number>(2)
  const form = useRef<FormInstance>(null)
  //   const a = useRef<string>('')
  useEffect(() => {
    console.log('user', user)
    form.current?.resetFields()
    a.current = 1
    // setCompany(user?.company || '')
    setCompany(user?.company ?? '')
  }, [user])

  const onSubmit = useCallback(() => {
    const value: NewUserType = {
      ...(user ?? { company: '', contact: '', country: '' }),
      company,
      //   contact: '',
      //   country: '',
    }

    onFinished?.(value)
  }, [company, onFinished, user])

  const renderForm = () => {
    return (
      <Form ref={form} onFinish={onSubmit}>
        <Form.Item label="Company">
          <Input value={company} onChange={text => setCompany(text.target.value)} />
        </Form.Item>
      </Form>
    )
  }

  return (
    <Modal visible={visible} onCancel={onCancel} onOk={onSubmit}>
      {renderForm()}
    </Modal>
  )
}

export default ModalUser

class A {
  _a: number = 1

  set a(value: number) {
    this._a = value
  }

  get a() {
    return this._a
  }
}
