# Hacker news

Created by: Reign<br />
Built by: Elías Heresi
URL: https://hacker-news-elias-heresi.netlify.app/
Code quality: https://sonarcloud.io/project/overview?id=grossomanache_hacker-news

## Pages

- Home
- 404 page

## Components (& responsibilities)

- NavBar
  - Renderize page title
  - Redirect to home page when clicked
- Dropdown
  - Render possible
- ButtonGroup
  - Render buttons
  - Highlight page status (all/myFaves)
  - Modify news collection when clicked
- ArticlesGroup
  - Render ArticlePreviews
  - Pass news data to ArticlesPreviews
- ArticlePreview
  - Render shape, text and liked status
  - Display articles information (time ago of creation, creator, news title and if liked)
- Paginator
  - Render paginator
  - Modify collection status depending on total per page and current page

## Data layer

- Articles
  - loadArticles
  - likeArticle
- UI
  - myFavesOn
  - myFavesOff
  - filterBy
- Pagination
  - nextPage
  - previousPage
  - pageNumber
  - total number of pages
