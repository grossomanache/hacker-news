interface Article {
  story_title: string;
  story_url: string;
  author: string;
  created_at: Date;
}

export interface ArticleState {
  collection: Article[];
  favorites: boolean;
  filter: string | null;
}
