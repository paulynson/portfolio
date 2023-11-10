import { Link } from "react-router-dom";

function NoActivePage() {
  return (
    <div className="text-black flex justify-center items-center  min-h-screen p-5 notFound">
      {/* <!-- this div class is for the animations --> */}
      <div>
        <div className="div"></div>
        <div className="div1"></div>
        <div className="div2"></div>
        {/* <!-- end of the div animation --> */}

        <h1
          className="text-center text-6xl animate-bounce font-bold"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          404
        </h1>
        <h3
          className="text-center my-6 text-3xl font-bold uppercase"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          PAGE NOT FOUND
        </h3>

        <div
          className="mt-5 flex justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <Link
            to="/"
            className=" bg-black text-white hover:animate-pulse py-2 px-4 rounded-lg "
          >
            {" "}
            Back Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NoActivePage;
