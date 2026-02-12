const WorkCard = ({ image, title, year, category }) => {
  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-img" />

      <div className="work-info">
        <h4>{title}</h4>

        <div className="work-meta">
          <span className="year">{year}</span>
          <span className="category">{category}</span>
        </div>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
