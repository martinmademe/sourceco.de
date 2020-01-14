import React, { useEffect } from 'react';
import { Parallax } from 'react-spring/renderprops-addons.cjs';
import Layout from '../@lekoarts/gatsby-theme-cara/components/layout';
import Hero from '../@lekoarts/gatsby-theme-cara/components/hero';

const Cara = () => {
    useEffect(() => window.location.replace(`/`), []);

    return (
        <Layout>
            <Parallax pages={1}>
                <Hero offset={0} />
            </Parallax>
        </Layout>
    );
};

export default Cara;
