export interface Category {
    id: number;
    name: string;
    level: number;
    is_active: boolean;
    position: number;
    product_count: number;
    children_data: []
  }