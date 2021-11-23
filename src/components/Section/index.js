function Section({ title, index, children }) {
  return (
    <section
      id={title}
      className={`${
        index % 2 === 0 ? "bg-white-100" : "bg-gray-200"
      } font-bookman p-8 flex justify-center`}
    >
      <div className="pt-20 pb-20 w-full max-w-screen-lg">{children}</div>
    </section>
  );
}

export default Section;
