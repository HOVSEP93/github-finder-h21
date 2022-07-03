function About() {
  return (
    <>
      <h1 className="text-6xl mb-4 bold ">Here We Go! </h1>

      <p className="mb-4 text-2xl font-light  ">
        A React app to search GitHub profiles and see profile details.
      </p>
      <label className="swap swap-flip text-9xl ">
        <input type="checkbox" />
        <div className="swap-on">😎</div>
        <div className="swap-off">😇</div>
      </label>
    </>
  );
}

export default About;
