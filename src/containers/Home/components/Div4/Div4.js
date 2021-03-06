import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import conConfig from '../../../conConfig';
@connect(
    state => ({language: state.auth.language, clientWidth: state.auth.clientWidth, }),
)
class Div4 extends React.Component {

    static propTypes = {
      language: PropTypes.string,
      clientWidth: PropTypes.number,
    };

    render() {
      const {clientWidth, language} = this.props;
      const part1 = require('../../image/pt1.png');
      const part2 = require('../../image/pt2.png');
      const part3 = require('../../image/pt3.png');
      const dot = require('../../image/dot.png');

      const styles = require('./Div4.scss');
      return (
          <div className={clientWidth < 1025 ? styles.officalModule : ''}>

            <div className={styles.comBgWhite}>
              <div className={styles.officalModule3}>
                  <div className="container">
                      {clientWidth > 1025 ? <img src={part1} id="div3img1"/> : ''}
                      <div className={styles.officalModule3Div + ' col-lg-8'}>
                          <h2>{language === 'zn' ? '去中心化的跨链机制' : 'PRIVATE'}</h2>
                          <p>
                            {language === 'zn' ? conConfig.HomeDiv4.part1.zn : conConfig.HomeDiv4.part1.en}
                          </p>
                          <ul>
                            <li>-> Ring Signature</li>
                            <li>-> One-Time Addresses</li>
                            <li>-> Private Send</li>
                          </ul>
                      </div>
                      {clientWidth > 1025 ? '' : <img src={part1} id="div3img1" className={styles.div3img1}/>}
                  </div>
              </div>
              </div>

              <div className={clientWidth < 1025 ? styles.officalModule3 : styles.officalModule4}>
                  <div className="container">
                      <div className={clientWidth < 1025 ? styles.officalModule3Div : styles.officalModule4Div + ' col-lg-7'}>
                          <h2>{language === 'zn' ? '通用跨链协议' : 'CROSS-CHAIN'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part2.zn : conConfig.HomeDiv4.part2.en}</p>
                          <ul>
                            <li>-> Locked accounts with Secure Multi-Party Compute (SMPC)</li>
                            <li>-> Support for all ERC20 and protocol tokens</li>
                          </ul>
                      </div>
                      {clientWidth > 1025 ? <img src={part2} id="div3img2" /> : <img src={part2} id="div3img2" className={styles.div3img2}/>}
                  </div>
              </div>

                <div className={styles.comBgWhite}>
              <div className={styles.officalModule3}>
                  <div className="container">
                      {clientWidth > 1025 ? <img src={part3} id="div3img3"/> : ''}
                      <div className={styles.officalModule3Div + ' col-lg-8'} id="officalModule3Div2">
                          <h2>{language === 'zn' ? '交易隐私保护' : 'SMART CONTRACTS'}</h2>
                          <p>{language === 'zn' ? conConfig.HomeDiv4.part3.zn : conConfig.HomeDiv4.part3.en}</p>
                          <ul>
                            <li>-> Implementation based on Ethereum's Codebase </li>
                            <li>-> Leverage all existing Development Tools</li>
                            <li>-> Build compelling distributed cross-chain Dapps</li>
                          </ul>
                      </div>
                      {clientWidth > 1025 ? '' : <img src={part3} id="div3img3" className={styles.div3img3}/>}
                  </div>
              </div>
              </div>
          </div>
        );
    }
}

export default Div4;
