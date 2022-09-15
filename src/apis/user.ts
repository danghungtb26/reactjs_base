import { fake_data, User } from 'src/models/user'

const list: () => Promise<BaseResponse<User[]>> = () => {
  return new Promise<BaseResponse<User[]>>(resolve => {
    setTimeout(() => {
      resolve({
        data: [...fake_data],
        page: {
          current: 1,
          max: 10,
          count: fake_data.length,
        },
      })
    }, 1000)
  })
}

const create: (p: {
  input: Pick<UserInterface, 'firstName' | 'lastName' | 'gender' | 'birthday'>
}) => Promise<BaseResponse<User>> = ({ input }) => {
  return new Promise<BaseResponse<User>>(resolve => {
    setTimeout(() => {
      const newUser = User.fromJson(input)
      fake_data.push(newUser)
      resolve({ data: newUser })
    }, 1000)
  })
}

const update: (p: {
  id?: number | string
  input: Pick<UserInterface, 'id' | 'firstName' | 'lastName' | 'gender' | 'birthday'>
}) => Promise<BaseResponse<User>> = ({ id, input }) => {
  return new Promise<BaseResponse<User>>(resolve => {
    setTimeout(() => {
      const newUser = User.fromJson(input)
      const index = fake_data.findIndex(i => i.id === newUser.id)

      if (index >= 0) {
        fake_data[index] = newUser
      }
      // fake_data.push(newUser)
      resolve({ data: newUser })
    }, 1000)
  })
}

export const UserApi = {
  list,
  create,
  update,
}
