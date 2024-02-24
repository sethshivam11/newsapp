const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, date, time, source, mode } = props;
  return (
    <div>
      <div className="card my-3">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            left: "0",
            padding: "5px",
          }}
        >
          <span className="badge rounded-pill bg-info">{source}</span>
        </div>
        <img
          src={
            !imgUrl
              ? "https://res.cloudinary.com/dv3qbj0bn/image/upload/v1692554275/zznyjn4yp53ybxakqcas.jpg"
              : imgUrl
          }
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text" style={{ fontWeight: "500" }}>
            Updated - {date} | {time}
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn"
            style={{
              backgroundColor: mode === "light" ? "#212529" : "#fff",
              color: mode === "light" ? "#fff" : "#000",
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
