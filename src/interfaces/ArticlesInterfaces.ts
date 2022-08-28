export interface Article {
  story_title: string;
  story_url: string;
  story_id: number;
  author: string;
  created_at: Date;
}

export interface ArticleState {
  collection: Article[];
  favorites: number[];
  filter: string;
}
