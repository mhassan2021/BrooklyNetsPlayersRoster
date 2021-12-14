import {Link} from 'react-router-dom';

const Navbar = () => {
    return (  
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                    <h2> <img src="/images/brooklyn-nets-logo.jpg" alt="" border="0" height="50" className="mr-3"/>&nbsp;&nbsp;
                    Brooklyn Nets</h2>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                </div>
            </nav>
        </header>
        
    );
}
 
export default Navbar;