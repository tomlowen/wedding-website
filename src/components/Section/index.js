function Section({ title, content, id }) {
  return (
    <section>
      <h3 id={id}>{title}</h3>
      <p>{content}</p>
    </section>
  );
}

export default Section;
