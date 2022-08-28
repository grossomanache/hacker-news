export interface GetArticlesProps {
  searchTerm?: string;
  page?: number;
}

export interface GetFavoritesProps {
  favorites: number[];
  page?: number;
}
