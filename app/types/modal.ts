export type modal = {
  data: {
    name: string;
    price: number;
    id: string;
    image?: string;
    description?: string;
  };
  isOpened: boolean;
  onOpen: () => void;
  onClose: () => void;
  updateOrderCount: () => void;
};
