
import { Canvas } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Euler, Vector3 } from 'three';
import gsap from 'gsap';
import '../styles/homepage.css';

const Model = () => {
  const gltfPath = '/finalmodel2.gltf';
  const [rotationTrigger, setRotationTrigger] = useState(false);
  const [model, setModel] = useState(null);
  const coverFrontRef = useRef();
  const [rotation, setRotation] = useState({ x: 0, y: 0.02101, z: 0 });

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
      const openRotation = new Euler(0, -(Math.PI / 2), 0);
      const rotationTween = gsap.to(coverFrontRef.current.rotation, {
        x: openRotation.x,
        y: openRotation.y,
        z: openRotation.z,
        duration: 2,
        ease: 'power3.out',
      });

      return () => {
        rotationTween.kill();
      };
    }
  }, [rotationTrigger]);

  useEffect(() => {
    if (model) {
      model.scale.set(4,4,4);
      model.rotation.set(rotation.x, rotation.y, rotation.z);
    }
  }, [model, rotation]);

  return (
    <div className='model'>
      <Canvas onClick={handleCanvasClick}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {model && (
            <group position={[-.5, -3.45, 0]}>
              <primitive object={model} />
            </group>
          )}
        </Suspense>
        <directionalLight intensity={1} position={[5, 10, 5]} />
        <directionalLight intensity={0.5} position={[-5, 10, 5]} />
        <directionalLight intensity={0.5} position={[-5, 10, -5]} />
        <directionalLight intensity={1} position={[5, 10, -5]} />
        <pointLight intensity={1} position={[0, -5, 0]} />
      </Canvas>
    </div>
  );
};

export default Model;
