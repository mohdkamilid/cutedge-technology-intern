import PostCard from "./PostCard";

const RecentPosts = () => {
  return (<section className="recent-posts">
  <div className="container">
    <div className="section-header">
      <h3>Recent posts</h3>
      <span className="view-all">View all</span>
    </div>

    <div className="post-grid">
      <PostCard
        title="Making a design system from scratch"
        meta="12 Feb 2020 | Design, Pattern"
      />
      <PostCard
        title="Creating pixel perfect icons in Figma"
        meta="12 Feb 2020 | Figma, Icon Design"
      />
    </div>
  </div>
</section>

  );
};

export default RecentPosts;
