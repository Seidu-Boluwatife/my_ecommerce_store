
import { createContext } from "react"
import { useState } from "react"

type item = {
     id: number;
    text: string;
    image: string;
    price: number;
}

export const ItemContext = createContext<{
  item: item[];
  setItem: React.Dispatch<React.SetStateAction<item[]>>
} | null>(null)


interface ItemProviderProps {
  children: React.ReactNode;
}

function ItemProvider({children}: ItemProviderProps) {
  const [item, setItem] = useState<item[]>([])
  return (
    <div>
      <ItemContext.Provider value={{item, setItem}}>
        {children}
        </ItemContext.Provider>
    </div>
  )
}

export default ItemProvider