// Core
import React, { Component } from 'react';
import Brightcove from '../Brightcove';
import YouTube from 'react-youtube';

// Instruments
import Styles from './styles.scss';

export default class Monitoring extends Component {
    render () {
        const playerParams = {
            playerVars: {
                iv_load_policy: 3,
                modestbranding: 1,
                rel:            0
            },
            height: '360',
            width:  '640'
        };

        return (
            <section className = { Styles.monitoringComponent }>
                <div className = { Styles.wrapTable }>
                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574865536001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'IKkAGOqaEas'
                            />
                        </div>
                        <div className = { Styles.lang }>Ukrainian</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574865536001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'irtAA_ulYQY'
                            />
                        </div>
                        <div className = { Styles.lang }>Russian</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574873201001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'vUn04UsHFIw'
                            />
                        </div>
                        <div className = { Styles.lang }>English</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574855632001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'p_olCTtqbNo'
                            />
                        </div>
                        <div className = { Styles.lang }>Polish</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574853565001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'Qz2TGhoJowI'
                            />
                        </div>
                        <div className = { Styles.lang }>Spanish</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574875541001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'zpXYfPwIXjM'
                            />
                        </div>
                        <div className = { Styles.lang }>Serbian</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574861031001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = '5dqNWD7q8RA'
                            />
                        </div>
                        <div className = { Styles.lang }>Arabic</div>
                    </div>

                    <div className = { Styles.item }>
                        <Brightcove
                            className = { Styles.video }
                            dataAccount = '5467539707001'
                            dataPlayer = 'BJgK0Gh85Z'
                            dataVideoId = '5574875546001'
                        />
                        <div className = { Styles.youtube }>
                            <YouTube
                                className = { Styles.video }
                                opts = { playerParams }
                                videoId = 'pRi71hEfC2c'
                            />
                        </div>
                        <div className = { Styles.lang }>
                            Signs
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
