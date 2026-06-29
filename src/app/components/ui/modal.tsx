import { ReactNode } from "react";

type ModalProps = {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ title, children, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>

          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-zinc-500 hover:bg-zinc-100"
          >
            ✕
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}
