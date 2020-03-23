import React from 'react';
import {Image} from 'react-native';

const LOGO = require('../assets/images/logo.png');

export function BigLogo(props) {
    return (
        <Image
            resizeMode="contain"
            source={LOGO}
            style={{width: 370, height: 200}}
            {...props}
        />
    )
}

export function SmallLogo(props) {
    return (
        <Image
            resizeMode="contain"
            source={LOGO}
            style={{width: 185, height: 100}}
            {...props}
        />
    )
}

