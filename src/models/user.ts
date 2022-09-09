let id = 2

export const generateId: () => number = () => {
  id += 1
  return id
}
export class User implements UserInterface {
  id: string | number

  firstName: string

  lastName: string

  birthday: string

  gender: 0 | 1 // 0: nu, 1: nam

  email: string

  phone: string

  address: string

  username: string

  password: string

  status: 0 | 1 | 2

  created_at: string

  updated_at: string

  deleted_at: string

  constructor(json: Record<string, any>) {
    const keys = Object.keys(json)
    for (let index = 0; index < keys.length; index += 1) {
      const key = keys[index]
      this[key] = json[key]
    }
    // this.id = json.id
    // this.first_name = json.first_name
  }

  static fromJson = (json: Record<string, any>) => {
    return new User(json)
  }
}

export const fake_data: User[] = [
  new User({
    id: generateId(),
    firstName: 'Dang',
    lastName: 'Hung',
    birthday: '26/01/1997',
    gender: 1,
  }),
]
