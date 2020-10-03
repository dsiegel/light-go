import React, { useRef, useState } from "react"
import { Canvas, group, render, useThree, useFrame } from "react-three-fiber"
import { useMove } from "react-use-gesture"
import * as THREE from "three"

// TODO:
// * accurate mouse clicks
// * wheel death
// * cascading wheel death
// * keeping score
// * shield support from nearby allies
// * minimum distance from another wheel
// * fancy lighting

// x' = x + r * cos(t)
// y' = y + r * sin(t)
// r' = sqrt((x''-x')^2 + (y''-y')^2)
// x'' = x' + r' * cos(t')
// y'' = y' + r' * sin(t')
// t' = acos((x'' - x')/r')
// result = pi/2 + t' - t

// Get t' including quadrant (full angle starting from 0 rather than acos output)
// Should be pi/2 - t < t' < pi/2 + t

const BoxSize = 0.5
const ShieldSize = 0.1
const ShieldCount = 12
const ShieldRadius = 0.3
const ShieldEnergy = 3
const AttackEnergy = 1
const DistanceFactor = 0.5
const TeamColors = ["green", "blue"]
const DeathColor = "gray"
const ImpendingDeathColor = "yellow"

function calculateShield(boxIndex, shieldIndex, boxes, boxPositionsRef) {
  const [wheelX, wheelY, wheelZ] = boxPositionsRef.current[boxIndex]
  const shieldAngle = (2 * Math.PI * shieldIndex) / ShieldCount
  const shieldX = wheelX + ShieldRadius * Math.cos(shieldAngle)
  const shieldY = wheelY + ShieldRadius * Math.sin(shieldAngle)

  const boxColor = boxes[boxIndex].teamColor

  if (boxColor === DeathColor) {
    return {
      position: [shieldX, shieldY, wheelZ],
      color: DeathColor,
    }
  }

  let damage = 0
  for (let enemyIndex in boxes) {
    const enemyBoxColor = boxes[enemyIndex].teamColor
    if (enemyBoxColor === DeathColor || enemyBoxColor === boxColor) {
      continue
    }
    const [enemyX, enemyY, _] = boxPositionsRef.current[enemyIndex]
    const enemyDeltaX = enemyX - shieldX
    const enemyDeltaY = enemyY - shieldY
    const enemyRadius = Math.sqrt(
      Math.pow(enemyDeltaX, 2) + Math.pow(enemyDeltaY, 2)
    )
    const enemyBaseAngle = Math.acos(enemyDeltaX / enemyRadius)
    const enemyAngle =
      enemyDeltaY > 0 ? enemyBaseAngle : 2 * Math.PI - enemyBaseAngle
    const angleDelta = Math.abs(shieldAngle - enemyAngle)
    if (angleDelta < Math.PI / 2 || (3 * Math.PI) / 2 < angleDelta) {
      damage +=
        (Math.abs(Math.cos(angleDelta)) * AttackEnergy) /
        Math.pow(enemyRadius * DistanceFactor, 2)
    }
  }
  const x = Math.min(1, damage / ShieldEnergy)
  return {
    position: [shieldX, shieldY, wheelZ],
    color:
      x === 1
        ? ImpendingDeathColor
        : new THREE.Color(Math.min(1, damage / ShieldEnergy), 0, 0),
  }
}

function Box({ boxIndex, boxes, boxPositionsRef }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (boxes[boxIndex].teamColor !== DeathColor) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
      mesh.current.position.fromArray(boxPositionsRef.current[boxIndex])
      mesh.current.material.color.set(
        BoxLives(boxIndex, boxes, boxPositionsRef)
          ? boxes[boxIndex].teamColor
          : ImpendingDeathColor
      )
    }
  })

  return (
    <mesh
      position={boxPositionsRef.current[boxIndex]}
      ref={mesh}
      scale={[0.4, 0.4, 0.4]} // TODO: factor into BoxSize
    >
      <boxBufferGeometry args={[BoxSize, BoxSize, BoxSize]} />
      <meshStandardMaterial color={boxes[boxIndex].teamColor} />
    </mesh>
  )
}

function Shield({ boxIndex, shieldIndex, boxes, boxPositionsRef }) {
  // This reference will give us direct access to the mesh
  const mesh = useRef()

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    const { position, color } = calculateShield(
      boxIndex,
      shieldIndex,
      boxes,
      boxPositionsRef
    )
    mesh.current.position.fromArray(position)
    mesh.current.material.color.set(color)
  })

  const { position, color } = calculateShield(
    boxIndex,
    shieldIndex,
    boxes,
    boxPositionsRef
  )

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={[0.4, 0.4, 0.4]} // TODO: factor out
    >
      <boxBufferGeometry args={[ShieldSize, ShieldSize, ShieldSize]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const Wheel = React.memo(function Wheel({ boxIndex, boxes, boxPositionsRef }) {
  return (
    <group>
      <Box
        boxIndex={boxIndex}
        boxes={boxes}
        boxPositionsRef={boxPositionsRef}
      />
      {[...Array(ShieldCount).keys()].map(i => (
        <Shield
          key={i}
          boxIndex={boxIndex}
          shieldIndex={i}
          boxes={boxes}
          boxPositionsRef={boxPositionsRef}
        />
      ))}
    </group>
  )
})

function getBoxPos(e) {
  return [-4 + (8 * e.clientY) / 1000, -4 + (8 * e.clientX) / 1000, 1]
}

function BackWall({ position, addBox, moveLastBox }) {
  const mesh = useRef()

  return (
    <mesh
      position={position}
      ref={mesh}
      onClick={e => addBox(getBoxPos(e))}
      onPointerMove={e => moveLastBox(getBoxPos(e))}
    >
      <planeBufferGeometry args={[8, 8]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  )
}

function BoxLives(boxIndex, boxes, boxPositionsRef) {
  for (let i = 0; i < ShieldCount; i++) {
    if (calculateShield(boxIndex, i, boxes, boxPositionsRef).color.r < 1) {
      return true
    }
  }
  return false
}

function KillBoxes(boxes, boxPositionsRef) {
  let deadBoxes = 1
  for (let i = 0; i < 5; i++) {
    deadBoxes = 0
    for (let boxIndex in boxes) {
      if (!BoxLives(boxIndex, boxes, boxPositionsRef)) {
        deadBoxes++
        boxes[boxIndex].teamColor = DeathColor
      }
    }
    if (deadBoxes === 0) {
      return
    }
  }
}

export default function App() {
  const [boxes, setBoxes] = useState([{ teamColor: TeamColors[0] }])
  const boxPositionsRef = useRef([{ x: 10, y: 10 }])

  return (
    <div style={{ height: "1000px", width: "1000px" }}>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 50], zoom: 100, up: [0, 0, 1], far: 10000 }}
        style={{ height: "90%", width: "90%" }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <BackWall
          position={[0, 0, 0]}
          moveLastBox={position => {
            boxPositionsRef.current[
              boxPositionsRef.current.length - 1
            ] = position
          }}
          addBox={position => {
            boxPositionsRef.current[
              boxPositionsRef.current.length - 1
            ] = position

            if (BoxLives(boxes.length - 1, boxes, boxPositionsRef)) {
              const newBox = {
                teamColor: TeamColors[boxes.length % 2],
              }
              KillBoxes(boxes, boxPositionsRef)
              boxPositionsRef.current.push(position)
              setBoxes(boxes.concat(newBox))
            }
          }}
        />
        {boxes.map((b, i) => (
          <Wheel
            key={i}
            boxIndex={i}
            boxes={boxes}
            boxPositionsRef={boxPositionsRef}
          />
        ))}
      </Canvas>
    </div>
  )
}

// function calculateShields(wheelX, wheelY, teamColor, boxes) {
//   const shieldCount = 12
//   const shieldRadius = 0.2
//   let shields = [...Array(shieldCount)]
//   for (let shieldIndex = 0; shieldIndex < shieldCount; shieldIndex++) {
//     const shieldAngle = (2 * Math.PI * shieldIndex) / shieldCount
//     const shieldX = wheelX + shieldRadius * Math.cos(shieldAngle)
//     const shieldY = wheelY + shieldRadius * Math.sin(shieldAngle)
//     let hitCount = 0
//     for (let enemyIndex in boxes) {
//       const enemy = boxes[enemyIndex]
//       if (enemy.teamColor == teamColor) {
//         continue
//       }

//       const enemyDeltaX = enemy.x - shieldX
//       const enemyDeltaY = enemy.y - shieldY
//       const enemyRadius = Math.sqrt(
//         Math.pow(enemyDeltaX, 2) + Math.pow(enemyDeltaY, 2)
//       )
//       const enemyBaseAngle = Math.acos(enemyDeltaX / enemyRadius)
//       const enemyAngle =
//         enemyDeltaY > 0 ? enemyBaseAngle : 2 * Math.PI - enemyBaseAngle
//       const angleDelta = Math.abs(shieldAngle - enemyAngle)
//       if (angleDelta < Math.PI / 2 || (3 * Math.PI) / 2 < angleDelta) {
//         hitCount += 1
//       }
//     }
//     shields[shieldIndex] = {
//       shieldIndex: shieldIndex,
//       x: shieldX,
//       y: shieldY,
//       damage: hitCount,
//     }
//   }
//   return shields
// }
