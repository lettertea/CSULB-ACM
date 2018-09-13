import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import ScrollableAnchor from 'react-scrollable-anchor'
import meetings from './meetings'

import workshopPhoto from '../assets/images/workshop-photo.jpg'
import header from '../assets/images/header.jpg'
import pic05 from '../assets/images/pic05.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title

        return (
            <div>
                <Helmet title={siteTitle} />

                <ScrollableAnchor id={'one'}>
                    <section className="main style1">
                        <div className="grid-wrapper">
                            <div className="col-6">
                                <header className="major">
                                    <h2>
                                        Advancing the science and application of
                                        information technology
                                    </h2>
                                </header>
                                <h4>
                                    Through{' '}
                                    <a
                                        href="https://beachhacks.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        hackathons
                                    </a>
                                    , workshops from professional developers,
                                    seminars, and projects, ACM prepares
                                    students for what the industry is really
                                    like.
                                </h4>
                            </div>
                            <div className="col-6">
                                <span className="image fit">
                                    <img src={workshopPhoto} alt="" />
                                </span>
                            </div>
                        </div>
                    </section>
                </ScrollableAnchor>
                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li>
                                    <span className="icon style1 major fa-code" />
                                </li>
                                <li>
                                    <span className="icon style2 major fa-bolt" />
                                </li>
                                <li>
                                    <span className="icon style3 major fa-camera-retro" />
                                </li>
                                <li>
                                    <span className="icon style4 major fa-cog" />
                                </li>
                                <li>
                                    <span className="icon style5 major fa-desktop" />
                                </li>
                                <li>
                                    <span className="icon style6 major fa-calendar" />
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>
                                    In ECS 304 at 3 PM
                                    <br />
                                    Every other Monday
                                </h2>
                            </header>
                            {meetings.map(meeting => (
                                <p>
                                    {meeting.date}: {meeting.event}
                                </p>
                            ))}
                            <p />
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>About us</h2>
                            </header>
                            <p>
                                We are the officers. Our role to to make your
                                experience better.
                            </p>
                        </div>

                        <div className="col-4">
                            <span className="image fit">
                                <img src={header} alt="" />
                            </span>
                            <h3>Magna feugiat lorem</h3>
                            <p>
                                Adipiscing a commodo ante nunc magna lorem et
                                interdum mi ante nunc lobortis non amet vis sed
                                volutpat et nascetur.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit">
                                <img src={header} alt="" />
                            </span>
                            <h3>Magna feugiat lorem</h3>
                            <p>
                                Adipiscing a commodo ante nunc magna lorem et
                                interdum mi ante nunc lobortis non amet vis sed
                                volutpat et nascetur.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit">
                                <img src={pic05} alt="" />
                            </span>
                            <h3>Magna feugiat lorem</h3>
                            <p>
                                Adipiscing a commodo ante nunc magna lorem et
                                interdum mi ante nunc lobortis non amet vis sed
                                volutpat et nascetur.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ipsum feugiat consequat?</h2>
                        </header>
                        <p>Sed lacus nascetur ac ante amet sapien.</p>
                        <ul className="actions uniform">
                            <li>
                                <a href="#" className="button special">
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="#" className="button">
                                    Learn More
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        )
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object,
}

export default Homepage

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
