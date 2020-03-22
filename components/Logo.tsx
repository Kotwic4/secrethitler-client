import React from 'react';
import {Image} from 'react-native';

const LOGO = require('../assets/images/logo.png');

export default function Logo() {
    return (
        <Image
            resizeMode="contain"
            source={LOGO}
            style={{width: 370, height: 200}}
        />
    )
}

