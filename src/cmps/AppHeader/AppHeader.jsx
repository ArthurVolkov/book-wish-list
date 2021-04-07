// import { NavLink, withRouter } from 'react-router-dom'


export function AppHeader() {


    return (
        <div className="header full">
            <div className="header-container main-layout align-center">
                <div className="flex justify-between">
                    <h3>Book Wish List</h3>
                    <div className="flex btn-container">
                        {/* <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        <NavLink exact to="/contact" activeClassName="active">Contacts</NavLink>
                        <NavLink exact to="/statistic" activeClassName="active">Statistics</NavLink> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

