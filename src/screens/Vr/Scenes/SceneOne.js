import React, { useState } from 'react'

import {
    ViroScene,
    Viro360Image,
    ViroSpinner
} from '@viro-community/react-viro'

const SceneOne = ({ sceneNavigator }) => {

    const [loading360Image, setLoading360Image] = useState(true)

    const _onLoadEnd = () => {
        setLoading360Image(false)
    }

    return (
        <ViroScene>
            {/* <Viro360Image
                source={require('../../../../assets/images/360images/FET_building_360_image.jpg')}
                onLoadEnd={_onLoadEnd}
            /> */}
            {
                loading360Image
                &&
                <ViroSpinner
                    type='light'
                    position={[0, 0, -2]}
                />
            }
        </ViroScene>
    )
}

export default SceneOne