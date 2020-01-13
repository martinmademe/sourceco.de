import React from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Contact from '../components/contact';

import What from '../components/what';
import How from '../components/how';
import Why from '../components/why';

const Cara = () => (
    <Layout>
        <Parallax pages={6}>
            <Hero offset={0} />
            <What offset={1} />
            <Why offset={3} />
            <How offset={4} />
            <Contact offset={5} />
        </Parallax>
    </Layout>
);

export default Cara;
