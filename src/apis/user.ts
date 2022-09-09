import { fake_data, User } from 'src/models/user'

const list: () => Promise<BaseResponse<User[]>> = () => {
  return new Promise<BaseResponse<User[]>>(resolve => {
    setTimeout(() => {
      resolve({
        data: fake_data,
        page: {
          current: 1,
          max: 10,
          count: fake_data.length,
        },
      })
    }, 1500)
  })
}

export const UserApi = {
  list,
}
