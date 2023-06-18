
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Euler, Vector3 } from 'three';
import gsap from 'gsap';
import '../styles/homepage.css';

const Model = () => {
  const gltfPath = '/untitled1.gltf';
  const [rotationTrigger, setRotationTrigger] = useState(false);
  const [model, setModel] = useState(null);
  const coverFrontRef = useRef();

  const handleCanvasClick = () => {
    setRotationTrigger(!rotationTrigger);
  };

  useEffect(() => {
    const loadModel = async () => {
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(gltfPath);

      const scene = gltf.scene;
      setModel(scene);

      const coverFront = scene.getObjectByName('cover_front');
      coverFrontRef.current = coverFront;
    };

    loadModel();
  }, []);

  useEffect(() => {
    if (coverFrontRef.current && rotationTrigger) {
      const openRotation = new Euler(0, -(Math.PI / 4), 0);
      const rotationTween = gsap.to(coverFrontRef.current.rotation, {
        x: openRotation.x,
        y: openRotation.y,
        z: openRotation.z,
        duration: 1, 
        ease: 'power3.out',       });

      return () => {
        rotationTween.kill();       };
    }
  }, [rotationTrigger]);

  useEffect(() => {
    if (model) {
      model.scale.set(4, 4, 4);
      model.rotation.y = Math.PI / 106;
      model.rotation.x = Math.PI / 4065;
      model.rotation.z = Math.PI / 406;
    }
  }, [model]);

  return (
    <div className='model'>
      <Canvas onClick={handleCanvasClick}>
        <ambientLight intensity={0.4} />
        <Suspense fallback={null}>
          {model && (
            <group position={[-0.5, -3.5, 0]}>
              <primitive object={model} />
            </group>
          )}
        </Suspense>
        <pointLight intensity={1} position={[5, 15, 5]} />
        <pointLight intensity={1} position={[-5, 15, 5]} />
        <pointLight intensity={1.0} position={[-5, 15, -5]} />
        <pointLight intensity={1.0} position={[5, 15, -5]} />
        <pointLight intensity={0.6} position={[0, -5, 0]} />
      </Canvas>
    </div>
  );
};

export default Model;
