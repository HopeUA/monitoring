import React, { Component } from 'react';
import PropTypes from 'prop-types';

import YouTube from 'react-youtube';
import Brightcove from '../Brightcove';
import NotFound from '../NotFound';

import configs from '../../routes/index';
import cx from 'classnames';
import { getUniqueID } from '../../helpers';

// Instruments
import Styles from './styles.scss';

export default class Monitoring extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    render () {
        const { page } = this.props.match.params;
        let config = null;

        // Get necessary config
        for (const [key, value] of Object.entries(configs)) {
            if (key === page) {
                config = value;
                break;
            }
        }

        if (!config) {
            return (
                <section className = { Styles.monitoringComponent }>
                    <NotFound />
                </section>
            );
        }

        const playerParams = {
            playerVars: {
                iv_load_policy: 3, // eslint-disable-line
                modestbranding: 1,
                rel:            0
            },
            width:  '480',
            height: '360'
        };

        // const streamsStyle = cx({
        //     [Styles.streams]:          true,
        //     [Styles.has1child]:        config.streams.length === 1,
        //     [Styles.hasMore1children]: config.streams.length > 1
        // });

        const players = config.streams.map((stream) => {
            const {
                title
            } = stream;

            const sources = stream.sources.map((source) => {
                switch (source.type) {
                    case 'youtube':
                        return (
                            <div
                                className = { Styles.source }
                                key = { getUniqueID(15) }>
                                <div className = { Styles.meta }>
                                    {
                                        source.info ? source.info : source.type
                                    }
                                </div>
                                <YouTube
                                    className = { Styles.video }
                                    opts = { playerParams }
                                    videoId = { source.youtubeId }
                                />
                            </div>
                        );

                    case 'brightcove':
                        return (
                            <div
                                className = { Styles.source }
                                key = { getUniqueID(15) }>
                                <div className = { Styles.meta }>
                                    {
                                        source.info ? source.info : source.type
                                    }
                                </div>
                                <Brightcove
                                    accountId = { source.accountId }
                                    className = { Styles.video }
                                    playerId = { source.playerId }
                                    videoId = { source.videoId }
                                />
                            </div>
                        );

                    default:
                        return null;
                }
            });

            const sourcesStyle = cx({
                [Styles.sources]:      true,
                [Styles.has1child]:    stream.sources.length === 1,
                [Styles.has2children]: stream.sources.length === 2,
                [Styles.has3children]: stream.sources.length === 3
            });

            return (
                <div
                    className = { Styles.stream }
                    key = { getUniqueID(15) }>
                    <h2 className = { Styles.title }>
                        { title }
                    </h2>
                    <div className = { sourcesStyle }>
                        { sources }
                    </div>
                </div>
            );
        });

        return (
            <section className = { Styles.monitoringComponent }>
                <h1>{ config.head }</h1>
                <div className = { Styles.streams }>
                    { players }
                </div>
            </section>
        );
    }
}
