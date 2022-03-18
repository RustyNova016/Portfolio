function MainNavBar() {
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
            {/*<a className="navbar-brand" href="#">Carousel</a>*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#projets">Projets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#languages">Languages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#"
                           aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>;
}

function AppHeader() {
    return <>
        <header>
            <MainNavBar/>
        </header>
    </>
}

export default AppHeader;
