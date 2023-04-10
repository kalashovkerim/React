import React from 'react';
import classes from "../Styles/footer.module.css";
function Footer(props) {
    return (
        <footer>
            <div className={classes.fcontainer}>
                <div className={classes.main_part}>
                    <h1>DOD-NET.AZ</h1>
                    <div className={classes.logos}>
                        <div className={classes.logo_part}>
                            <img className={classes.logo} src = {require('../resources/logos/linkedin.png')} alt={"linkedin"}/>
                            <a href={"https://www.linkedin.com/feed/"}>@dodnet_az</a>
                        </div>
                        <div className={classes.logo_part}>
                            <img className={classes.logo} src = {require('../resources/logos/facebook-square.png')} alt={"facebook"}/>
                            <a href={"https://www.facebook.com/"}>@dodnet_az</a>
                        </div>
                        <div className={classes.logo_part}>
                            <img className={classes.logo} src = {require('../resources/logos/instagram.png')} alt={"instagram"}/>
                            <a href={"https://www.instagram.com/"}>@dodnet_az</a>
                        </div>
                    </div>
                    <p>© 2023 Azimov Inc.</p>
                </div>
                <div className={classes.nav_part}>
                    <div className={classes.block}>
                        <ul>
                            <li><p>Contacts</p></li>
                            <div className={classes.sublock}>
                                <li><a href={"https://www.youtube.com/"}>Site</a></li>
                                <li><a href={"https://www.youtube.com/"}>Cloud</a></li>
                                <li><a href={"https://www.youtube.com/"}>Google</a></li>
                                <li><a href={"https://www.youtube.com/"}>Other</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.block}>
                        <ul>
                            <li><p>Information</p></li>
                            <div className={classes.sublock}>
                                <li><a href={"https://www.youtube.com/"}>Site</a></li>
                                <li><a href={"https://www.youtube.com/"}>Cloud</a></li>
                                <li><a href={"https://www.youtube.com/"}>Google</a></li>
                                <li><a href={"https://www.youtube.com/"}>Other</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.block}>
                        <ul>
                            <li><p>About us</p></li>
                            <div className={classes.sublock}>
                                <li><a href={"https://www.youtube.com/"}>Site</a></li>
                                <li><a href={"https://www.youtube.com/"}>Cloud</a></li>
                                <li><a href={"https://www.youtube.com/"}>Google</a></li>
                                <li><a href={"https://www.youtube.com/"}>Other</a></li>
                            </div>
                        </ul>
                    </div>
                    <div className={classes.block}>
                        <ul>
                            <li><p>Others</p></li>
                            <div className={classes.sublock}>
                                <li><a href={"https://www.youtube.com/"}>Site</a></li>
                                <li><a href={"https://www.youtube.com/"}>Cloud</a></li>
                                <li><a href={"https://www.youtube.com/"}>Google</a></li>
                                <li><a href={"https://www.youtube.com/"}>Other</a></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;