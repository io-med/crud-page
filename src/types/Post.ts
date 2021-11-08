export interface Post {
    id: number;
  title: string;
  text: string;
  image: string;
  url: string;
  active?: 1 | 0;
  sort_order?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;
}
