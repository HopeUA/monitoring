import React, { Component } from 'react';
import PropTypes from 'prop-types';
import load from 'load-script';

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

    componentWillMount () {
        load('http://players.brightcove.net/5467539707001/BJgK0Gh85Z_default/index.min.js');
    }

    render () {
        const { page } = this.props.match.params;
        let config;
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
        if (config) {
            const playerParams = {
                playerVars: {
                    iv_load_policy: 3,
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
                            id: youtubeId
                        },
                        brightcove: {
                            account,
                            player,
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
                                account = { account }
                                className = { Styles.video }
                                player = { player }
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
