import { Link } from "react-router-dom"

import '../../../../assets/backend/css/missing.css';

export default function Missing() {
    return (
        <div className="notfound404">
            <div className="notfound-bg"></div>
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Page Not Found</h2>
                <Link to="/dashboard">
                    <a href="#">Back To Homepage</a>
                </Link>
            </div>
        </div>
    )
}