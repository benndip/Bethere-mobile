import {View, Dimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import {
  ViroAmbientLight,
  Viro3DObject,
  ViroAnimations,
  ViroLightingEnvironment,
  ViroMaterials,
  ViroARSceneNavigator,
  ViroARScene,
  ViroSpinner,
  ViroOmniLight,
  ViroText,
} from '@viro-community/react-viro';

const {width, height} = Dimensions.get('screen');

const ArScene = ({item}) => {
  // const {
  //     unlabeled_model,
  //     resources,
  //     initialPosition,
  //     type,
  //     rotation,
  //     sx,
  //     sy,
  //     sz,
  //     material,
  //     lightingEvironment,
  //     materialsAvailable
  // } = item;

  const [showingScene, setShowingScene] = useState(false);

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  const Scene = () => {
    const [showMaterial, setShowMaterial] = useState(false);
    const [loadingModel, setLoadingModel] = useState(true);
    const [rotationState, setRotationState] = useState([0, 0, 0]);
    const [scale, setScale] = useState([1.5, 1.5, 1.5]);

    const vrRef = useRef(null);

    const onPinch = (pinchState, scaleFactor, source) => {
      var newScale = scale.map(x => {
        return x * scaleFactor;
      });
      if (pinchState == 3) {
        setScale(newScale);
        return;
      }
      vrRef?.current.setNativeProps({scale: newScale});
    };

    useEffect(() => {
      // if (materialsAvailable) {
      //     ViroMaterials.createMaterials({
      //         material: material,
      //     });
      //     setShowMaterial(true);
      // }
    }, []);

    useEffect(() => {}, [loadingModel]);

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" />
        {loadingModel && <ViroSpinner type="light" position={[0, 0, -2]} />}

        {/* <Viro3DObject
          ref={vrRef}
          source={require('../../../../assets/models/woman.glb')}
          position={[0, 0, -1]}
          scale={scale}
          rotation={[0, -0.2, 0]}
          type="GLB"
          onPinch={onPinch}
          onLoadStart={() => {
            setLoadingModel(true);
          }}
          onLoadEnd={() => {
            setLoadingModel(false);
          }}
          animation={{name: 'spin', run: true, loop: true}}
        /> */}
        <ViroText
          text="Neferneferuaten Nefertiti was a queen of the 18th Dynasty of Ancient Egypt, the great royal wife of Pharaoh Akhenaten. Nefertiti and her husband were known for a religious revolution, in which they worshipped solely the sun disc, Aten, as the only god."
          color="#ff0000"
          position={[-1, 0, -1]}
          rotation={[0, 45, 0]}
          style={{
            fontSize: 10,
            // fontWeight: '700',
            color: 'red',
          }}
        />
      </ViroARScene>
    );
  };

  useEffect(() => {
    setShowingScene(true);
    return () => {
      setShowingScene(true);
    };
  }, []);

  return (
    <View style={{height: height, width: '100%'}}>
      {showingScene && <ViroARSceneNavigator initialScene={{scene: Scene}} />}
    </View>
  );
};

// ViroAnimations.registerAnimations({
//   spin: {
//     properties: {
//       rotateY: '+=45',
//     },
//     duration: 1800,
//   },
// });

export default ArScene;
