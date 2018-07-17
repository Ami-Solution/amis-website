import React, { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { getClientWidthFunc, getNavButtonFunc, changeLangFunc } from 'redux/modules/auth';

import { homeUlEn, homePcUlEn } from '../Home/utils/homeUl';

@connect(
    state => ({
      clientWidth: state.auth.clientWidth, navButton: state.auth.navButton, language: state.auth.language, titleState: state.auth.titleState,
      icoMsg: state.joinWarning.icoMsg, joinWarningModal: state.joinWarning.joinWarningModal,
    }),
    { getClientWidthFunc, getNavButtonFunc, changeLangFunc })

class WanLabs extends Component {
    static propTypes = {
      clientWidth: PropTypes.number,
      getClientWidthFunc: PropTypes.func,
      navButton: PropTypes.bool,
      getNavButtonFunc: PropTypes.func,
      changeLangFunc: PropTypes.func,
      language: PropTypes.string,
      titleState: PropTypes.string,
    };

    componentDidMount() {
      const width = document.documentElement.clientWidth;
      this.props.getClientWidthFunc(width);
    }
    componentWillUnmount() {
      // clearInterval(this.interval);
      this.props.getNavButtonFunc(false);
    }

    getNav() {
      const navButton = this.props.navButton;
      this.props.getNavButtonFunc(!navButton);
    }

    render() {
      const styles = require('./WanLabs.scss');
      const { navButton, clientWidth, language } = this.props;

      const logo = require('../Home/image/logo.png');
      const logo2 = require('../Home/image/icoLoho2.png');
      const nav = require('../Home/image/nav1.png');
      const downBtnIco = require('./image/downIco.png');
      const server1 = require('./image/icon1.png');
      const server2 = require('./image/icon2.png');
      const server3 = require('./image/icon3.png');
      const server4 = require('./image/icon4.png');
      const server5 = require('./image/icon5.png');
      const server6 = require('./image/icon6.png');
      const linBg = require('./image/linBg.png');
      const prjctIco = require('./image/prjctIco.png');
      const prjctLogo1 = require('./image/prjctLogo1.png');
      const prjctLogo2 = require('./image/prjctLogo2.png');
      const prjctLogo3 = require('./image/prjctLogo3.png');
      const prjctLogo4 = require('./image/prjctLogo4.png');
      const style = { display: 'none' };
      const style1 = { display: 'inline_block' };
      return (
          <div>
              <div className={styles.productBox}>
                  <div className={styles.homeDiv}>
                      <div className={styles.homeHeader + ' container'}>
                          <IndexLink to="/"><img src={clientWidth > 320 ? logo : logo2} /></IndexLink>
                          <img src={nav} className={styles.navbarImg} id="homeNav" onClick={this.getNav.bind(this)} />
                           {!navButton && clientWidth <= 1024 && language === 'en' && homeUlEn(styles.homeHeaderUl, style)}
                          {navButton && clientWidth <= 1024 && language === 'en' && homeUlEn(styles.homeHeaderUl, style1)}
                           {!navButton && clientWidth > 1024 && language === 'en' &&
                              homePcUlEn(styles.homeHeaderUl, style1, styles.homeDropdown, styles['homeDropdown-content'])}
                       </div>
                  </div>
                  <div className={styles.WanLabsBox}>
                      <div className={styles.WanLabsBanner}>
                          <h1>WanLabs IS A BLOCKCHAIN INCUBATOR FOR THE WANCHAIN ECOSYSTEM</h1>
                          <div className={styles.bannerLine}>
                            <span className={styles.greenLine}></span>
                            <span className={styles.blueLine}></span>
                          </div>
                          <p className={styles.textp}>WanLabs focuses on blockchain projects that address real-world problems by utilising Wanchain's unique privacy and cross-chain capabilities and building an interconnected blockchain ecosystem.</p>
                          <p className={styles.textp2}>READY TO JOIN WanLabs?</p>
                          <button className={styles.comBtn}>Apply Now</button>
                      </div>
                  </div>
              </div>
              <div className={styles.videoBox}>
                  <div className={styles.whiteTit}>
                      <h1>LEARN MORE ABOUT WanLabs</h1>
                      <div className={styles.bannerLine}>
                          <span className={styles.greenLine}></span>
                          <span className={styles.blueLine}></span>
                      </div>
                  </div>
                  <div className={styles.videoShow}>

                  </div>
                  <div className={styles.downBtn}>
                      <a href="#">
                          <img src={downBtnIco} className={styles.downBtnIco} />
                          <span>Download WanLab brochure</span>
                      </a>
                  </div>
              </div>
              <div className={styles.serverWeBox}>
                  <div className={styles.comTit}>
                      <h1>SERVICES WE PROVIDE</h1>
                      <div className={styles.bannerLine}>
                          <span className={styles.greenLine}></span>
                          <span className={styles.blueLine}></span>
                      </div>
                  </div>
                  <div className={styles.serverCont}>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server1} className={styles.server1} />
                              <p>ICO Advisory</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Competitor benchmarking</span></li>
                              <li><em className={styles.comCircle}></em><span>Stakeholder interviews</span></li>
                              <li><em className={styles.comCircle}></em><span>Product market fit</span></li>
                              <li><em className={styles.comCircle}></em><span>Business model</span></li>
                              <li><em className={styles.comCircle}></em><span>Token economics</span></li>
                              <li><em className={styles.comCircle}></em><span>Whitepaper</span></li>
                              <li><em className={styles.comCircle}></em><span>ICO infrastructure</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server2} className={styles.server2} />
                              <p>Technical Guidance</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Technical architecture review</span></li>
                              <li><em className={styles.comCircle}></em><span>Technical integration</span></li>
                              <li><em className={styles.comCircle}></em><span>Prototyping/POC</span></li>
                              <li><em className={styles.comCircle}></em><span>Sandbox infrastructure</span></li>
                              <li><em className={styles.comCircle}></em><span>Smart contract review</span></li>
                              <li><em className={styles.comCircle}></em><span>Security audit</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server3} className={styles.server3} />
                              <p>Legal Support</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Legal structure</span></li>
                              <li><em className={styles.comCircle}></em><span>Company incorporation</span></li>
                              <li><em className={styles.comCircle}></em><span>Token model review</span></li>
                              <li><em className={styles.comCircle}></em><span>Whitepaper review</span></li>
                              <li><em className={styles.comCircle}></em><span>Legal consultation and</span></li>
                              <li><em className={styles.comCircle}></em><span>documentation</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server4} className={styles.server4} />
                              <p>Marketing & PR</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Foundational Brand Building</span></li>
                              <li><em className={styles.comCircle}></em><span>PR & Marketing strategy</span></li>
                              <li><em className={styles.comCircle}></em><span>Community management strategy</span></li>
                              <li><em className={styles.comCircle}></em><span>Leverage Wanchain's 250k+community members</span></li>
                              <li><em className={styles.comCircle}></em><span>Showcase on WanLabs roadshows</span></li>
                              <li><em className={styles.comCircle}></em><span>Broadcast to our investor network</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server5} className={styles.server5} />
                              <p>Funding</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Funding opportunities</span></li>
                              <li><em className={styles.comCircle}></em><span>Connect institutional investors</span></li>
                              <li><em className={styles.comCircle}></em><span>Leverage Wanchain investor community</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                      <div className={styles.serverBox}>
                          <div className={styles.serverdl}>
                              <img src={server6} className={styles.server6 } />
                              <p>Global Resourcing</p>
                          </div>
                          <ul className={styles.serverUl}>
                              <li><em className={styles.comCircle}></em><span>Support with partnerships</span></li>
                              <li><em className={styles.comCircle}></em><span>Recruiting team members</span></li>
                              <li><em className={styles.comCircle}></em><span>Introduction to advisors and mentors</span></li>
                              <li><em className={styles.comCircle}></em><span>Access to preferential suppliers</span></li>
                              <li><em className={styles.comCircle}></em><span>Connections with Thought Leaders  and Influencers</span></li>
                              <img src={linBg} className={styles.linBg} />
                          </ul>
                      </div>
                  </div>
              </div>
              <div className={styles.projects}>
                  <div className={styles.whiteTit}>
                      <h1>projects</h1>
                      <div className={styles.bannerLine}>
                          <span className={styles.greenLine}></span>
                          <span className={styles.blueLine}></span>
                      </div>
                  </div>
                  <div className={styles.projectsCont}>
                      <ul className={styles.projectsLogoUl}>
                          <li><img src={prjctLogo1} className={styles.prjctLogo1} /></li>
                          <li><img src={prjctLogo2} className={styles.prjctLogo2} /></li>
                          <li><img src={prjctLogo3} className={styles.prjctLogo3} /></li>
                          <li><img src={prjctLogo4} className={styles.prjctLogo4} /></li>
                      </ul>
                      <p><img src={prjctIco} className={styles.prjctIco} /></p>
                      <p className={styles.projectsCText}>READY TO JOIN WanLabs? </p>
                  </div>
              </div>
              <div className={styles.interestedBox}>
                  <div className={styles.comTit2}>
                      <h1>INTERESTED IN A CAREER AT WanLabs?</h1>
                      <div className={styles.bannerLine}>
                          <span className={styles.greenLine}></span>
                          <span className={styles.blueLine}></span>
                      </div>
                  </div>
                  <div className={styles.interestedCont}>
                      <p>We're on the lookout for business developers across the world to connect WanLabs to local blockchain communities. If you're interested in joining one of the leading projects in blockchain, you can apply using the link below.</p>
                      <button className={styles.comBtn}>JOIN WanLabs</button>
                  </div>
              </div>
          </div>
        );
    }
}
export default WanLabs;
