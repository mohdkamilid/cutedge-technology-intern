import WorkCard from "./Workcard";

const FeaturedWorks = () => {
  return (
    <section className="featured-works">
      <h3>Featured works</h3>

      <WorkCard
        image="/works/dashboard.png"
        title="Designing Dashboards"
        year="2020"
        category="Dashboard"
      />

      <WorkCard
      image="/works/portrait.jpg"
        title="Vibrant Portraits of 2020"
        year="2018"
        category="Illustration"
      />
        <WorkCard
        image="/works/typography.jpg"
        title="36 Days of Malayalam type"
        year="2018"
        category="Typography"
      />
    </section>
  );
};

export default FeaturedWorks;
