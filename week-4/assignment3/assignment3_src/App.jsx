import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Welcome Message");
  const [containerHidden, setContainerHidden] = useState(true);
  const [navbar, setNavbar] = useState(false);

  function showMore() {
    setContainerHidden(false);
  }

  function toggleBtn() {
    setNavbar(true);
    setCancelBtn(true);
  }

  function closeNav() {
    setNavbar(false);
  }

  function changeTitle() {
    setTitle("Have a Good Time!");
  }
  return (
    <>
      <header className="nav">
        <a href="#" className="main-nav-title">
          <p className="main-nav-title-link">Website Title/Logo</p>
        </a>
        <a href="#" className="toggle-btn" onClick={toggleBtn}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </a>
        <nav className={navbar ? "main-nav active" : "main-nav"}>
          <p
            className={navbar ? "cancel-btn active" : "cancel-btn"}
            onClick={closeNav}
          >
            X
          </p>
          <ul className="main-nav-list">
            <li>
              <a className="main-nav-link" href="#Item1">
                Item 1
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#Item2">
                Item 2
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#Item3">
                Item 3
              </a>
            </li>
            <li>
              <a className="main-nav-link" href="#Item4">
                Item 4
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="banner" onClick={changeTitle}>
        <p className="banner-title">{title}</p>
      </div>
      <div className="section">
        <p className="section-title">Section Title</p>
      </div>
      <main className="container">
        <div className="content">
          <div className="content-box">Content Box1</div>
          <div className="content-box">Content Box2</div>
          <div className="content-box">Content Box3</div>
          <div className="content-box">Content Box4</div>
        </div>
      </main>
      <div className="btn-content">
        <button className="btn" onClick={showMore}>
          Call to Action
        </button>
      </div>
      <main className={containerHidden ? "container container-hide" : "container"}>
        <div className="content">
          <div className="content-box">Content Box1</div>
          <div className="content-box">Content Box2</div>
          <div className="content-box">Content Box3</div>
          <div className="content-box">Content Box4</div>
        </div>
      </main>
    </>
  );
}

export default App;
