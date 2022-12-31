import React, { useEffect, useState } from 'react'
import {
    ViroVRSceneNavigator,
} from '@viro-community/react-viro'

import SceneOne from '../Scenes/SceneOne';

import { FocusAwareStatusBar } from '../../../components';

const VrHomeTwo = () => {

    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowScene(true)
        }, 1000);

    }, [])

    return (
        <>
        <FocusAwareStatusBar translucent backgroundColor='transparent' />
            {
                showScene
                &&
                <ViroVRSceneNavigator
                    initialScene={{
                        scene: SceneOne
                    }}
                    vrModeEnabled={false}
                />
            }
        </>
    )
}

export default VrHomeTwo