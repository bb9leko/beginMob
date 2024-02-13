import React from 'react';
import Topo from './componentes/Topo';
import Body from './componentes/Body';

export default function Home() {
    return <Body topo={Topo} />
}