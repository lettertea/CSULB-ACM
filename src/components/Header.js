import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Hi, we're <strong>CSULB ACM</strong>,<br />
                    a club that programs.</h1>
                    <p>The Association for Computing Machinery is an active branch<br />
                    of the globe's largest computer science society.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
