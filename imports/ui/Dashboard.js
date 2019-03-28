import React from 'react';

import PrivateHeader from './PrivateHeader';
import { onEnterPrivatePage } from '../utils/auth';

export default class Dashboard extends React.Component {
    componentWillMount() {
        onEnterPrivatePage();
    }

    render() {
        return (
            <div>
                <PrivateHeader title="Dashboard" />
                <main className="page-content">
                    Dashboard page content
                </main>
            </div>
        );
    }
}