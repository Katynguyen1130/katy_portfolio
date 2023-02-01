import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../Wrapper';

const Header = () => {
    const scaleVarients = {
        whileInView: {
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        }
    }
    return (
        <div className='app__header app__flex'>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
                className="app__header-infor"
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'> Salut, I am</p>
                            <h1 className='head-text'>Katy Ng</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'> Web developer </p>
                        <p className='p-text'> Lifetime learner </p>
                    </div>

                </div>

            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile__bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className="overlay_circle"
                />

            </motion.div>

            <motion.div
                variants={scaleVarients}
                whileInView={scaleVarients.whileInView}
                className="app__header-circle"
            >
                {[images.sass, images.react, images.python, images.webpack, images.node, images.typescript].map((circle, index) => {
                    return (
                        <div className='circle-cmp app__flex' key={`circle=${index}`}>
                            <img src={circle} alt="circle" />
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home',)