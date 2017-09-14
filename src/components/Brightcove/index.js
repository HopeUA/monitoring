import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import load from 'load-script';

import Styles from './styles.scss';

// let scriptLoaded = false;

export default class Brightcove extends Component {
    static propTypes = {
        account: PropTypes.string.isRequired,
        player:  PropTypes.string.isRequired,
        videoId: PropTypes.string.isRequired
    };
    //
    // componentWillMount () {
    //     if (!scriptLoaded) {
    //         load('http://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js');
    //         scriptLoaded = true;
    //     }
    // }

    render () {
        const {
            account,
            player,
            videoId
        } = this.props;

        return (
            <section className = { Styles.brightcoveComponent }>
                <div>
                    <video
                        controls
                        data-application-id
                        className = 'video-js'
                        data-account = { account }
                        data-embed = 'default'
                        data-player = { player }
                        data-video-id = { videoId }
                    />
                </div>
            </section>
        );
    }
}
