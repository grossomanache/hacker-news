# Hacker news

Web app displaying the latest Hacker News...<br />
In order to filter out by technology, click on the dropdown menu and click on the desired framework / librairy.<br />
To see more articles, scroll through the different pages with the "Next" buttonm or by clicking the page number. To return, just click the "Previous" button. <br/>
To save an article amongst your favorites, just click the heart icon. <br/>
To see your favorites collection, click the "My faves" button. To return to the home page, click on "All".<br /><br />
Created by: Reign<br />
Built by: Elías Heresi<br />
URL: https://hacker-news-elias-heresi.netlify.app/<br />
Code quality: https://sonarcloud.io/project/overview?id=grossomanache_hacker-news<br />

## Pages

- Home
- My favorites

## Components (& responsibilities)

- NavBar
  - Renderize page title
  - Redirect to home page when clicked
- Dropdown
  - Render possible
- FavoritesButton
  - Render buttons
  - Highlight page status (all/myFaves)
  - Modify news collection when clicked
- ArticlesPreviewList
  - Render ArticlePreviews
  - Pass news data to ArticlesPreviews
- ArticlePreview
  - Render shape, text and liked status
  - Display articles information (time ago of creation, creator, news title and if liked)
- FavoritesPreviewList
  - Render FavoritePreviews
  - Pass news data to FavoritesPreviews
- FavoritePreview
  - Render shape, text and liked status
  - Display articles information (time ago of creation, creator, news title and if liked)
- Paginator
  - Render paginator
  - Modify collection status depending on total per page and current page
- Filter

## Data layer

- Articles
  - filter
  - favorites
  - collection
  - favoriteCollection
- UI
  - myFaves
  - lading
- Page
  - pageNumber
