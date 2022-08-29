export interface UserInterface {
  id: number
  company: string
  contact: string
  country: string
}

export const fake_data: UserInterface[] = [
  {
    id: 1,
    company: 'Alfreds Futterkiste',
    contact: 'Maria Anders',
    country: 'Germany',
  },
  {
    id: 2,
    company: 'Centro comercial Moctezuma',
    contact: 'Francisco Chang',
    country: 'Mexico',
  },
]

let id = 2

export const generateId: () => number = () => {
  id += 1
  return id
}
