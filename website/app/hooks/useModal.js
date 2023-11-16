
import { create } from 'zustand'

const useModal = create((set) => ({
    modalStatus: false,
    openModal: () => set((state) => ({ modalStatus: true })),
    closeModal: () => set({ modalStatus: false }),
}))

export default useModal;