import { Box, DragControls, OrbitControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { useState } from "react";
import { Vector3 } from "three";
const Experience = () => {
    const [useOrbitControls, setUseOrbitControls] = useState(true);
    const position = new Vector3(0, 5, 0);

    

    const onDrag = () => {
        setUseOrbitControls(false);
    };
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[-10, 10, 0]}
                intensity={0.4}
            />
            <OrbitControls enabled={useOrbitControls} />
            // Cube
            <DragControls
                onDrag={onDrag}
                onDragEnd={() => setUseOrbitControls(true)}
            >
                <RigidBody position={position}>
                    <Box>
                        <meshStandardMaterial color='hotpink' />
                    </Box>
                </RigidBody>
            </DragControls>
            // Floor
            <RigidBody type='fixed'>
                <Box
                    position={[0, 0, 0]}
                    args={[10, 1, 10]}
                ></Box>
            </RigidBody>
        </>
    );
};

export default Experience;
