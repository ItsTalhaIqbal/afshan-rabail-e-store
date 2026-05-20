import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  image: string;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: number, size: string) => void;
  updateQty: (id: number, size: string, qty: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (i) => i.id === item.id && i.size === item.size,
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.id === item.id && i.size === item.size
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i,
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter((i) => !(i.id === id && i.size === size)),
        })),
      updateQty: (id, size, qty) =>
        set((state) => ({
          items: state.items
            .map((i) =>
              i.id === id && i.size === size
                ? { ...i, quantity: Math.max(1, qty) }
                : i,
            ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    { name: "afshan-rabail-cart" },
  ),
);

export const cartSelectors = {
  totalItems: (s: CartState) =>
    s.items.reduce((sum, i) => sum + i.quantity, 0),
  subtotal: (s: CartState) =>
    s.items.reduce((sum, i) => sum + i.price * i.quantity, 0),
};

export const deliveryFor = (subtotal: number) =>
  subtotal >= 5000 || subtotal === 0 ? 0 : 150;
