import React from 'react';
import {Image} from 'react-native';

const LOGO = require('../assets/images/logo.png');

export function BigLogo(props) {
    return (
        <Image
            resizeMode="contain"
            source={LOGO}
            style={{marginTop: 25, marginBottom: 25, width: 370, height: 200}}
            {...props}
        />
    )
}

export function SmallLogo(props) {
    return (
        <Image
            resizeMode="contain"
            source={LOGO}
            style={{marginTop: 25, marginBottom: 10, width: 185/2, height: 100/2}}
            {...props}
        />
    )
}

