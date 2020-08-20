import React, { Component } from "react";
import "./Header.css";
import { Button } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="header"><h1>This is the Header</h1>
            
            <Button variant="warning">Warning</Button>
            
            </div>
        )
    }
}

export default Header;