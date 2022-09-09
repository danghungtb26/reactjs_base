declare global {
  export interface UserInterface {
    readonly id: string | number

    firstName: string

    lastName: string

    birthday: string

    gender: 0 | 1

    email: string

    phone: string

    address: string

    username: string

    readonly password: string

    status: 0 | 1 | 2

    readonly created_at: string

    readonly updated_at: string

    readonly deleted_at: string
  }

  interface Page {
    current: number
    max: number
    count?: number
  }

  export interface BaseResponse<T> {
    data: T
    page?: Page
  }
}

export {}
