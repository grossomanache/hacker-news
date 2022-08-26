const ArticlePreview = (): JSX.Element => {
  return (
    <>
      <div className="article--column">
        <p className="article--time">3 hours ago</p>
        <h4 className="article--title">Event-driven state management</h4>
      </div>
      <div className="article--column">
        <p className="article--like">Like</p>
      </div>
    </>
  );
};

export default ArticlePreview;
