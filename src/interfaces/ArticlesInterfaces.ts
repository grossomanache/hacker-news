export interface Article {
  story_title: string;
  story_url: string;
  author: string;
  created_at: Date;
  story_id: number;
}

export interface ArticleState {
  collection: Article[];
  favorites: number[];
  filter: string;
}
