function Section({ title, content, id }) {
  return (
    <section className="">
      <h3 id={id} className="font-garamond">
        {title}
      </h3>
      <p className="font-garamond p-3">{content}</p>
    </section>
  );
}

export default Section;
