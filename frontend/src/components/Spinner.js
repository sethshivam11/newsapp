// import loading from "../loading.gif";

const Spinner = ()=> {
    return (
      <div className="container text-center"
        style={{ height: "50px"}}>
        <div
          className="spinner-border text-info"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

export default Spinner;
