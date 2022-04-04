import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ color: match ? '#046bce' : 'black', textDecoration: match ? "underline 3px" : "none" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div >
    );
}

export default CustomLink;