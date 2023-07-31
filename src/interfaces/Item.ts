export interface Item {
    id?: number;
    title?: string;
    message?: string;
    priority?: number;
  }

export interface Card {
  id?: number;
  title?: string;
  message?: string;
  priority?: number;
  onDelete: (id: number) => void;
  onEdit: (id: number, title: string, message: string, priority: number) => void;
}