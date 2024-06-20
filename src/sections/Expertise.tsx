import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

import Experience from "../components/3d/Experience";

const Expertise = () => {
    return (
        <div className='mx-8 md:mx-16 h-screen flex flex-col'>
            <Canvas camera={{position: [10,10,15], fov: 30}}>
              <Suspense>
                <Physics debug>
                <Experience />
                </Physics>
              </Suspense>
            </Canvas>
        </div>
    );
};

export default Expertise;
