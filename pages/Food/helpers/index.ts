export const isActive = (array: string[], id: string) => {
    return array.find((element: string) => element === id) !== undefined
  }