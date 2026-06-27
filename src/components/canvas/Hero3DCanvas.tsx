"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startMousePos = useRef({ x: 0, y: 0 });
  const startRotation = useRef({ x: 0, y: 0 });
  
  // Dynamic rotation offsets
  const dragRotation = useRef({ x: 0, y: 0 });
  const targetDragRotation = useRef({ x: 0, y: 0 });
  
  // Parallax rotation offsets based on cursor position
  const cursorCoords = useRef({ x: 0, y: 0 });
  const targetCursorRotation = useRef({ x: 0, y: 0 });
  const cursorRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Dimensions based on parent container
    const width = mountRef.current.clientWidth || 360;
    const height = mountRef.current.clientHeight || 360;

    // Scene
    const scene = new THREE.Scene();

    // Camera - Perspective for rich depth representation
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6.0;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Group to hold all rotatable objects
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight2.position.set(-5, -4, 4);
    scene.add(dirLight2);

    // ---- Materials ----
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a, // dark sleek core
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.7,
    });

    const glowWireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xabf7da, // dynamically updated
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xabf7da, // dynamically updated
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });

    const cubeMaterial = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.2,
      metalness: 0.8,
    });

    // ---- Geometries ----
    // 1. Central Core: Glass Dodecahedron
    const coreGeom = new THREE.DodecahedronGeometry(1.0, 0);
    const coreMesh = new THREE.Mesh(coreGeom, coreMaterial);
    coreGroup.add(coreMesh);

    // Core wireframe outline
    const wireframeMesh = new THREE.Mesh(coreGeom, glowWireframeMaterial);
    wireframeMesh.scale.setScalar(1.01);
    coreGroup.add(wireframeMesh);

    // 2. Orbital Rings: Two intersecting toruses
    const torusGeom1 = new THREE.TorusGeometry(1.6, 0.024, 8, 64);
    const ring1 = new THREE.Mesh(torusGeom1, ringMaterial);
    ring1.rotation.x = Math.PI / 2;
    coreGroup.add(ring1);

    const torusGeom2 = new THREE.TorusGeometry(1.85, 0.016, 8, 64);
    const ring2 = new THREE.Mesh(torusGeom2, ringMaterial);
    ring2.rotation.set(Math.PI / 4, Math.PI / 6, 0);
    coreGroup.add(ring2);

    // 3. Floating Code Blocks/Cubes
    const cubeGeom = new THREE.BoxGeometry(0.16, 0.16, 0.16);
    const cubes: THREE.Mesh[] = [];
    const cubeCount = 5;
    const cubePositions = [
      new THREE.Vector3(-1.3, 0.6, 0.5),
      new THREE.Vector3(1.2, -0.7, -0.4),
      new THREE.Vector3(0.5, 1.4, -0.6),
      new THREE.Vector3(-0.6, -1.2, 0.8),
      new THREE.Vector3(1.1, 0.8, -1.0),
    ];

    cubePositions.forEach((pos, idx) => {
      const cube = new THREE.Mesh(cubeGeom, cubeMaterial);
      cube.position.copy(pos);
      cube.userData = {
        speed: 0.5 + idx * 0.15,
        rotationSpeed: 0.8 + idx * 0.2,
        initialPos: pos.clone(),
      };
      coreGroup.add(cube);
      cubes.push(cube);
    });

    // 4. Floating Particles
    const particleCount = 45;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.3 + Math.random() * 1.5;
      
      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i+1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i+2] = r * Math.cos(phi);
    }
    particleGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xabf7da,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeom, particleMaterial);
    coreGroup.add(particles);

    // ---- Window Mousemove (Parallax) Listener ----
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate coordinates from -1.0 to 1.0 (relative to viewport center)
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      
      cursorCoords.current = { x: normX, y: normY };
      targetCursorRotation.current = {
        x: normY * 0.35, // Pitch limit
        y: normX * 0.35, // Yaw limit
      };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // ---- Animation Loop ----
    let animationFrameId: number;
    const clock = new THREE.Clock();
    const tempColor = new THREE.Color();

    const updateColorsFromTheme = () => {
      const accent = getComputedStyle(document.body).getPropertyValue("--accent-color").trim();
      if (accent) {
        tempColor.set(accent);
        
        // Sync materials colors
        glowWireframeMaterial.color.copy(tempColor);
        ringMaterial.color.copy(tempColor);
        particleMaterial.color.copy(tempColor);
        dirLight2.color.copy(tempColor);
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      updateColorsFromTheme();

      // Slow constant base rotation
      const baseRotationY = elapsed * 0.08;
      const baseRotationX = elapsed * 0.05;

      // Animate core pulsing size
      const pulseScale = 1.0 + Math.sin(elapsed * 1.5) * 0.04;
      coreMesh.scale.setScalar(pulseScale);
      wireframeMesh.scale.setScalar(pulseScale * 1.01);

      // Animate orbital rings spinning at different rates
      ring1.rotation.z = elapsed * 0.45;
      ring2.rotation.y = -elapsed * 0.6;

      // Animate cubes orbiting & self-rotating
      cubes.forEach((cube) => {
        const u = cube.userData;
        // Float path (elliptical oscillation)
        cube.position.x = u.initialPos.x + Math.sin(elapsed * u.speed) * 0.12;
        cube.position.y = u.initialPos.y + Math.cos(elapsed * u.speed) * 0.12;
        cube.position.z = u.initialPos.z + Math.sin(elapsed * u.speed * 0.8) * 0.1;
        
        // Rotation
        cube.rotation.x += 0.01 * u.rotationSpeed;
        cube.rotation.y += 0.015 * u.rotationSpeed;
      });

      // Animate particle drift
      particles.rotation.y = -elapsed * 0.03;

      // 1. Interpolate parallax rotations
      cursorRotation.current.x = THREE.MathUtils.lerp(cursorRotation.current.x, targetCursorRotation.current.x, 0.05);
      cursorRotation.current.y = THREE.MathUtils.lerp(cursorRotation.current.y, targetCursorRotation.current.y, 0.05);

      // 2. Interpolate drag rotations
      if (!isDragging.current) {
        // slow decay/centering of manual drag
        targetDragRotation.current.x = THREE.MathUtils.lerp(targetDragRotation.current.x, 0, 0.01);
        targetDragRotation.current.y = THREE.MathUtils.lerp(targetDragRotation.current.y, 0, 0.01);
      }
      dragRotation.current.x = THREE.MathUtils.lerp(dragRotation.current.x, targetDragRotation.current.x, 0.1);
      dragRotation.current.y = THREE.MathUtils.lerp(dragRotation.current.y, targetDragRotation.current.y, 0.1);

      // Apply all rotations to the group
      coreGroup.rotation.x = baseRotationX + cursorRotation.current.x + dragRotation.current.x;
      coreGroup.rotation.y = baseRotationY + cursorRotation.current.y + dragRotation.current.y;

      renderer.render(scene, camera);
    };

    animate();

    // ---- Resize handler ----
    const handleResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = mountRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      coreGeom.dispose();
      torusGeom1.dispose();
      torusGeom2.dispose();
      cubeGeom.dispose();
      particleGeom.dispose();

      coreMaterial.dispose();
      glowWireframeMaterial.dispose();
      ringMaterial.dispose();
      cubeMaterial.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  // ---- Drag Handlers (360 interactive rotation) ----
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    startMousePos.current = { x: e.clientX, y: e.clientY };
    startRotation.current = { x: targetDragRotation.current.x, y: targetDragRotation.current.y };
    if (mountRef.current) {
      mountRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startMousePos.current.x;
    const deltaY = e.clientY - startMousePos.current.y;
    
    const sensitivity = 0.01;
    targetDragRotation.current.y = startRotation.current.y + deltaX * sensitivity;
    targetDragRotation.current.x = startRotation.current.x + deltaY * sensitivity;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (mountRef.current) {
      mountRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div
      ref={mountRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none touch-none focus:outline-none"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    />
  );
}
