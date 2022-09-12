import { Button, Form, FormInstance, Input, Modal } from 'antd'
import React, { useImperativeHandle, useRef, useState } from 'react'
import { UserApi } from 'src/apis/user'
import { generateId, User } from 'src/models/user'
import { ColDefaultProps, defaultFormItemLayout } from 'src/themes/styles'

type ModalFormProps = {
  onFinished: () => void
}

export type ModalFormMethod = {
  setVisible: (visible: boolean) => void
  setData: (data?: User) => void

  getVisible: () => boolean
  aaaa: string
}

const ModalForm = React.forwardRef<ModalFormMethod, ModalFormProps>(({ onFinished }, ref) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const form = useRef<FormInstance>(null)

  useImperativeHandle(ref, () => {
    return {
      setVisible: value => {
        setVisible(value)
        if (value) {
          form.current?.resetFields()
        }
      },
      setData: value => {},
      getVisible: () => visible,
      aaaa: 'Hung',
    }
  })

  const onSubmit = value => {
    const param = {
      id: generateId(),
      firstName: value.first_name,
      lastName: value.last_name,
      gender: 1 as 0 | 1,
      birthday: '26/01/1997',
    }
    setLoading(true)
    //
    UserApi.create({ input: param }).then(r => {
      setLoading(false)
      setVisible(false)
    })

    onFinished()
  }

  const onOk = () => {
    const param = {
      id: generateId(),
      firstName: form.current?.getFieldValue('first_name') ?? '',
      lastName: form.current?.getFieldValue('last_name') ?? '',
      gender: 1 as 0 | 1,
      birthday: '26/01/1997',
    }
    setLoading(true)
    //
    UserApi.create({ input: param }).then(r => {
      setLoading(false)
      setVisible(false)
    })

    onFinished()
  }

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        setVisible(false)
      }}
      confirmLoading={loading}
      onOk={onOk}
    >
      <Form onFinish={onSubmit} ref={form}>
        <Form.Item name="first_name" {...defaultFormItemLayout} label="First Name">
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="last_name" {...defaultFormItemLayout} label="Last Name">
          <Input placeholder="Last Name" />
        </Form.Item>
        {/* <Form.Item {...defaultFormItemLayout}>
          <Button htmlType="submit">Save</Button>
        </Form.Item> */}
      </Form>
    </Modal>
  )
})

export default ModalForm
