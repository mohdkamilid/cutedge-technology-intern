const PostCard = ({ title, date, tag }) => {
  return (
    <div className="post-card">
      <h4>{title}</h4>
      <p>{date} | {tag}</p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
      </p>
    </div>
  );
};

export default PostCard;
