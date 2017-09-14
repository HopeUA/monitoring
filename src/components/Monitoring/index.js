import React, { Component } from 'react';
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';
import Brightcove from '../Brightcove';
import NotFound from '../NotFound';

import configs from '../../routes/index';

// Instruments
import Styles from './styles.scss';

export default class Monitoring extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render () {
        const { page } = this.props.match.params;
        let config = {};
        let component = (
            <section className = { Styles.monitoringComponent }>
                <NotFound />
            </section>
        );

        for (const [key, value] of Object.entries(configs)) {
            if (key === page) {
                config = value;
            }
        }
        if (config !== null) {
            const playerParams = {
                playerVars: {
                    iv_load_policy: 3, // eslint-disable-line
                    modestbranding: 1,
                    rel:            0
                },
                width:  '480',
                height: '360'
            };

            const players = config.items.map((item) => {
                const {
                    title,
                    sources: {
                        youtube: {
                            videoId: youtubeId
                        },
                        brightcove: {
                            accountId,
                            playerId,
                            videoId: brightcoveId
                        }
                    }
                } = item;

                return (
                    <div
                        className = { Styles.item }
                        key = { title }>
                        <div className = { Styles.brightcove }>
                            <Brightcove
                                accountId = { accountId }
                                className = { Styles.video }
                                playerId = { playerId }
                                videoId = { brightcoveId }
                            />
                        </div>
                        <div className = { Styles.title }>
                            { title }
                        </div>
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = { youtubeId }
                            />
                        </div>
                    </div>
                );
            });

            component = (
                <section className = { Styles.monitoringComponent }>
                    <h1>{ config.head }</h1>
                    <div className = { Styles.wrapTable }>
                        { players }
                    </div>
                </section>
            );
        }

        return component;
    }
}
