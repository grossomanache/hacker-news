export interface Article {
  story_title: string;
  story_url: string;
  author: string;
  created_at: Date;
  story_id: number;
}

export interface Favorite {
  title: string;
  url: string;
  author: string;
  created_at: Date;
  id: number;
}

export interface ArticleState {
  collection: Article[];
  favoriteCollection: Favorite[];
  favorites: number[];
  filter: string;
}
