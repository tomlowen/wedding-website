import image from "../../images/curtain-fall.png";

function Section({ title, content, id, index }) {
  return (
    <section
      id={id}
      className={`${
        index % 2 === 0 ? "bg-white-100" : "bg-gray-200"
      } font-bookman p-8 flex justify-center`}
    >
      <div className="pt-20 pb-20 max-w-screen-lg">
        <div
          className={`${
            index % 2 === 0 ? "" : "flex-row-reverse"
          } flex justify-between`}
        >
          <div className="w-2/3">
            <h3 className={`text-5xl pb-20`}>{title}</h3>
            <p>{content}</p>
          </div>
          <img
            src={image}
            alt={"another one of Franks and Tom"}
            className="m-10 mt-20 max-h-56 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Section;
