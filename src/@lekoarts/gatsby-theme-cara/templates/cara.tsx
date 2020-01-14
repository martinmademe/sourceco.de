import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/layout';
import Hero from '../components/hero';
import What from '../components/what';
import How from '../components/how';
import Why from '../components/why';
import Contact from '../components/contact';

const Cara = () => (
    <Layout>
        <Parallax pages={7}>
            <Hero offset={0} />
            <What offset={1} />
            <Why offset={3} />
            <How offset={5} />
            <Contact offset={6} />
        </Parallax>
    </Layout>
);

export default Cara;
