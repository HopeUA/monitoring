import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Styles from './styles.scss';

export default class Brightcove extends Component {
    static propTypes = {
        accountId: PropTypes.string.isRequired,
        playerId:  PropTypes.string.isRequired,
        videoId:   PropTypes.string.isRequired
    };

    render () {
        const {
            accountId,
            playerId,
            videoId
        } = this.props;

        const script = `https://players.brightcove.net/${accountId}/${playerId}_default/index.min.js`;

        return (
            <section className = { Styles.brightcoveComponent }>
                <Helmet>
                    <script
                        charSet = 'utf-8'
                        src = { script }
                        type = 'text/javascript'
                    />
                </Helmet>
                <div>
                    <video
                        controls
                        data-application-id
                        className = 'video-js'
                        data-account = { accountI }
                        data-embed = 'default'
                        data-player = { playerId }
                        data-video-id = { videoId }
                    />
                </div>
            </section>
        );
    }
}
