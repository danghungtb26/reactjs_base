import { UserInterface } from 'src/models/user'
import React from 'react'
import { Button } from 'antd'

type TableUserProps = {
  data: UserInterface[]
  onEdit?: (value: UserInterface) => void
  onDeleted?: (value: UserInterface) => void
}

const TableUser: React.FC<TableUserProps> = ({ data, onDeleted, onEdit }) => {
  return (
    <table border={1}>
      <tr>
        <th>id</th>
        <th>Company</th>
        <th>Contact</th>
        <th>Country</th>
        <th>Actions</th>
      </tr>
      {data.map(element => {
        return (
          <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.company}</td>
            <td>{element.contact}</td>
            <td>{element.country}</td>
            <td>
              <Button
                onClick={() => {
                  onEdit?.(element)
                }}
              >
                Edit
              </Button>
              <Button
                onClick={() => {
                  onDeleted?.(element)
                }}
                type="ghost"
              >
                Delete
              </Button>
            </td>
          </tr>
        )
      })}
    </table>
  )
}

export default TableUser
