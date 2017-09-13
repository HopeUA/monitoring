import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Styles from './styles.scss';

export default class Brightcove extends Component {
    static propTypes = {
        dataAccount: PropTypes.string.isRequired,
        dataPlayer:  PropTypes.string.isRequired,
        dataVideoId: PropTypes.string.isRequired
    };

    brightcove (dataVideoId, dataAccount, dataPlayer) {
        return {
            __html: `<video
                data-video-id=${dataVideoId}
                data-account=${dataAccount}
                data-player=${dataPlayer}
                data-embed="default"
                data-application-id
                class="video-js"
                controls
            ></video>`
        };
    }

    render () {
        const {
            dataAccount,
            dataPlayer,
            dataVideoId
        } = this.props;

        return (
            <div
                className = { Styles.brightcove }
                dangerouslySetInnerHTML = { this.brightcove(dataVideoId, dataAccount, dataPlayer) }>
            </div>
        );
    }
}
