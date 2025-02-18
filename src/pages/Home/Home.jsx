import "./Home.css";

function Home({ username }) {
  return (
    <div className="page">
      <div className="home-page">
        <h1>Hi, {username}!</h1>
        <div className="home-page-content">
          <div className="content1">
            <p>Columna 1</p>
          </div>
          <div className="content2">
            <p>Columna 2</p>
          </div>
          <div className="content3">
            <p>Columna 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 