interface Article {
  title: string;
  author: string;
  created_at: Date;
}

export interface ArticleCollection {
  collection: Article[];
}

// {
//   "hits": [
//     {
//       "created_at": "2022-08-27T15:01:58.000Z",
//       "title": null,
//       "url": null,
//       "author": "snapplebobapple",
//       "points": null,
//       "story_text": null,
//       "comment_text": "consider going librewolf instead, if your concern is security. I personally use librewolf for most things and brave for the few things that don&#x27;t work well on firefox in linux (i.e. playing video from my nvr, my realtor website&#x27;s 3d floor plan walkout, etc). Floccus and bitwarden keep bookmarks and passwords synced between the two so I barely notice which one I am using.",
//       "num_comments": null,
//       "story_id": 32614037,
//       "story_title": "Chrome allows websites to write to the clipboard without the user’s permission",
//       "story_url": null,
//       "parent_id": 32617963,
//       "created_at_i": 1661612518,
//       "_tags": [
//         "comment",
//         "author_snapplebobapple",
//         "story_32614037"
//       ],
//       "objectID": "32619776",
//       "_highlightResult": {
//         "author": {
//           "value": "snapplebobapple",
//           "matchLevel": "none",
//           "matchedWords": [

//           ]
//         },
//         "comment_text": {
//           "value": "consider going librewolf instead, if your concern is security. I personally use librewolf for most things and brave for the few things that don't work well on firefox in linux (i.e. playing video from my nvr, my realtor website's 3d floor plan walkout, etc). Floccus and bitwarden keep bookmarks and passwords synced between the two so I barely notice which one I am using.",
//           "matchLevel": "none",
//           "matchedWords": [

//           ]
//         },
//         "story_title": {
//           "value": "Chrome allows websites to write to the clipboard without the user’s permission",
//           "matchLevel": "none",
//           "matchedWords": [

//           ]
//         }
//       }
//     },
