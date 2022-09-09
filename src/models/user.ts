export interface UserInterface {
  id: number
}
export const fake_data: UserInterface[] = []

let id = 2

export const generateId: () => number = () => {
  id += 1
  return id
}
