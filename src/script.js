const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"></nav>
    );
}

const Sidebar = () => {
    return (
        <div className="d-none d-md-block col-md-3">
            <div className="border border-primary py-4 px-3">
                Sidebar
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="border-top p-2">
            Template Demo © 2021
        </div>
    )
}
