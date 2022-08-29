import { Button } from 'antd'
import React, { useEffect } from 'react'

type TestProps = {
  title?: string

  show: boolean

  onClick: () => void

  onClickWithParam: (input: boolean) => void
}

const Test: React.FC<TestProps> = props => {
  const { title, show, onClick, onClickWithParam } = props

  useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, [])

  return (
    <>
      {show ? <h1>{title}</h1> : null}
      <Button
        onClick={() => {
          onClick()
        }}
      >
        Test Button Children
      </Button>

      <Button
        onClick={() => {
          onClickWithParam(false)
        }}
      >
        Test Button Children with param
      </Button>
    </>
  )
}

export default Test
