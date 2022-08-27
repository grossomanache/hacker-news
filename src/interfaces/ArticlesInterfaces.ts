interface Article {
  title: string;
  author: string;
  creationDate: Date;
}

export interface ArticleCollection {
  collection: Article[];
}
