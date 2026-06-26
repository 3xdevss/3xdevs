"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import * as THREE from "three";

export default function FloatingRobot() {
  const pathname = usePathname();
  const router = useRouter();
  const [showBubble, setShowBubble] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const mountRef = useRef<HTMLDivElement>(null);
  
  // Dragging and 360-degree rotation states
  const isDragging = useRef(false);
  const startMousePos = useRef({ x: 0, y: 0 });
  const startRobotRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.15, y: -0.4 }); // Initial dynamic 3D angle
  const currentRotation = useRef({ x: 0.15, y: -0.4 });
  const pointerStartTime = useRef(0);

  // Hide the floating robot if we are already on the contact page
  const isContactPage = pathname === "/contact-us";

  // Trigger speech bubble after 2.5 seconds on page load
  useEffect(() => {
    if (isContactPage) {
      setShowBubble(false);
      return;
    }

    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowBubble(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname, isDismissed, isContactPage]);

  // Three.js Scene Setup
  useEffect(() => {
    if (isContactPage || !mountRef.current) return;

    const width = 110;
    const height = 110;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    
    // Orthographic camera for clean 3D isometric representation
    const camera = new THREE.OrthographicCamera(-2.5, 2.5, 2.5, -2.5, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);

    // Group to hold the entire drone hierarchy
    const droneGroup = new THREE.Group();
    scene.add(droneGroup);

    // Lighting - high contrast setup for gloss/metallic surfaces
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(6, 12, 8);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight2.position.set(-6, -4, 4);
    scene.add(dirLight2);

    // Materials - glossy obsidian/dark chrome armor
    const darkChrome = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.1,
      metalness: 0.98,
    });

    const matteSteel = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.35,
      metalness: 0.8,
    });

    // Glowing accents linked to CSS accent variables
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xabf7da,
      transparent: true,
      opacity: 0.9,
    });

    const thrusterFlameMaterial = new THREE.MeshStandardMaterial({
      color: 0xabf7da,
      emissive: 0xabf7da,
      emissiveIntensity: 2.5,
      transparent: true,
      opacity: 0.8,
    });

    // ---- Model Construction (Cyberpunk Gyroscopic AI Drone) ----

    // 1. Central Core Sphere (Glowing Energy Heart)
    const coreGeom = new THREE.SphereGeometry(0.5, 32, 32);
    const core = new THREE.Mesh(coreGeom, glowMaterial);
    droneGroup.add(core);

    // 2. Outer Armor Panels (Split sphere shells hovering around the core)
    const shellGroup = new THREE.Group();
    droneGroup.add(shellGroup);

    // Top Shell Cap
    const topShellGeom = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2.2);
    const topShell = new THREE.Mesh(topShellGeom, darkChrome);
    topShell.position.y = 0.12;
    shellGroup.add(topShell);

    // Bottom Shell Cap
    const bottomShellGeom = new THREE.SphereGeometry(0.85, 32, 16, 0, Math.PI * 2, Math.PI / 1.8, Math.PI / 2.2);
    const bottomShell = new THREE.Mesh(bottomShellGeom, darkChrome);
    bottomShell.position.y = -0.12;
    shellGroup.add(bottomShell);

    // 3. Central Visor/Camera Eye (HAL-9000 style glowing camera lens)
    const lensRingGeom = new THREE.CylinderGeometry(0.24, 0.24, 0.25, 16);
    lensRingGeom.rotateX(Math.PI / 2);
    const lensRing = new THREE.Mesh(lensRingGeom, matteSteel);
    lensRing.position.set(0, 0, 0.72);
    droneGroup.add(lensRing);

    const lensGeom = new THREE.SphereGeometry(0.18, 16, 16);
    const lens = new THREE.Mesh(lensGeom, glowMaterial);
    lens.position.set(0, 0, 0.82);
    droneGroup.add(lens);

    // 4. Intersecting Gyroscopic Rings (Spinning around the shell)
    const ringGroup = new THREE.Group();
    droneGroup.add(ringGroup);

    const torus1Geom = new THREE.TorusGeometry(1.24, 0.032, 8, 48);
    const ring1 = new THREE.Mesh(torus1Geom, glowMaterial);
    ring1.rotation.x = Math.PI / 2;
    ringGroup.add(ring1);

    const torus2Geom = new THREE.TorusGeometry(1.36, 0.024, 8, 48);
    const ring2 = new THREE.Mesh(torus2Geom, glowMaterial);
    ring2.rotation.set(Math.PI / 4, Math.PI / 6, 0);
    ringGroup.add(ring2);

    const torus3Geom = new THREE.TorusGeometry(1.48, 0.016, 8, 48);
    const ring3 = new THREE.Mesh(torus3Geom, glowMaterial);
    ring3.rotation.set(-Math.PI / 4, -Math.PI / 6, 0);
    ringGroup.add(ring3);

    // 5. Sleek Side Wings / Stabilizers
    const leftWingGroup = new THREE.Group();
    leftWingGroup.position.set(-1.1, 0, 0);
    droneGroup.add(leftWingGroup);

    const wingGeom = new THREE.BoxGeometry(0.08, 0.35, 0.6);
    const leftWing = new THREE.Mesh(wingGeom, darkChrome);
    leftWing.rotation.set(0, Math.PI / 8, Math.PI / 6);
    leftWingGroup.add(leftWing);

    const rightWingGroup = new THREE.Group();
    rightWingGroup.position.set(1.1, 0, 0);
    droneGroup.add(rightWingGroup);

    const rightWing = new THREE.Mesh(wingGeom, darkChrome);
    rightWing.rotation.set(0, -Math.PI / 8, -Math.PI / 6);
    rightWingGroup.add(rightWing);

    // 6. Underneath Engine Thruster Nozzle & Flame
    const thrusterNozzleGeom = new THREE.CylinderGeometry(0.18, 0.26, 0.2, 16);
    const thrusterNozzle = new THREE.Mesh(thrusterNozzleGeom, matteSteel);
    thrusterNozzle.position.y = -0.8;
    droneGroup.add(thrusterNozzle);

    const flameGeom = new THREE.ConeGeometry(0.16, 0.5, 16);
    flameGeom.translate(0, -0.25, 0); // set pivot at top for scaling
    const flame = new THREE.Mesh(flameGeom, thrusterFlameMaterial);
    flame.position.y = -0.9;
    droneGroup.add(flame);

    // ---- Animation Loop ----
    
    let animationFrameId: number;
    let clock = new THREE.Clock();
    const tempColor = new THREE.Color();

    const updateColorsFromTheme = () => {
      const accent = getComputedStyle(document.body).getPropertyValue("--accent-color").trim();
      if (accent) {
        tempColor.set(accent);
        
        // Apply website's active theme accent color dynamically
        glowMaterial.color.copy(tempColor);
        thrusterFlameMaterial.color.copy(tempColor);
        thrusterFlameMaterial.emissive.copy(tempColor);
        
        // Accent dir light matches the active theme hue
        dirLight2.color.copy(tempColor);
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // Read CSS variable color shift
      updateColorsFromTheme();

      // Main floating bobbing (sine wave loop)
      droneGroup.position.y = Math.sin(elapsed * 2.0) * 0.12;

      // Gyroscopic spin on the rings (different speeds and axis directions)
      ring1.rotation.z = elapsed * 1.2;
      ring2.rotation.y = -elapsed * 1.8;
      ring3.rotation.x = elapsed * 0.9;

      // Open/close breathing motion on split shells (pulsing gap)
      topShell.position.y = 0.12 + Math.sin(elapsed * 2.5) * 0.024;
      bottomShell.position.y = -0.12 - Math.sin(elapsed * 2.5) * 0.024;

      // Out of phase bobbing motion on side stabilizers/wings
      leftWingGroup.position.y = Math.sin(elapsed * 3.2) * 0.05;
      rightWingGroup.position.y = Math.sin(elapsed * 3.2 + Math.PI) * 0.05;

      // Pulse core energy shield opacity
      const corePulse = 0.55 + Math.sin(elapsed * 4.0) * 0.35;
      glowMaterial.opacity = corePulse;

      // Engine flame pulse scaling
      const flameScaleY = 1.0 + Math.sin(elapsed * 18.0) * 0.25;
      const flameScaleXZ = 1.0 + Math.sin(elapsed * 12.0) * 0.1;
      flame.scale.set(flameScaleXZ, flameScaleY, flameScaleXZ);

      // Inertial spring rotation towards target rotation
      if (!isDragging.current) {
        // Slow idle drift panning yaw/pitch so it's not totally static
        const idleYaw = -0.4 + Math.sin(elapsed * 0.3) * 0.18;
        const idlePitch = 0.15 + Math.cos(elapsed * 0.25) * 0.06;
        
        targetRotation.current.y = THREE.MathUtils.lerp(targetRotation.current.y, idleYaw, 0.02);
        targetRotation.current.x = THREE.MathUtils.lerp(targetRotation.current.x, idlePitch, 0.02);
      }

      currentRotation.current.y = THREE.MathUtils.lerp(currentRotation.current.y, targetRotation.current.y, 0.15);
      currentRotation.current.x = THREE.MathUtils.lerp(currentRotation.current.x, targetRotation.current.x, 0.15);

      droneGroup.rotation.y = currentRotation.current.y;
      droneGroup.rotation.x = currentRotation.current.x;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      coreGeom.dispose();
      topShellGeom.dispose();
      bottomShellGeom.dispose();
      lensRingGeom.dispose();
      lensGeom.dispose();
      torus1Geom.dispose();
      torus2Geom.dispose();
      torus3Geom.dispose();
      wingGeom.dispose();
      thrusterNozzleGeom.dispose();
      flameGeom.dispose();
      
      darkChrome.dispose();
      matteSteel.dispose();
      glowMaterial.dispose();
      thrusterFlameMaterial.dispose();
      
      renderer.dispose();
    };
  }, [isContactPage]);

  // Pointer drag listeners for 360 degree inspection rotation
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    pointerStartTime.current = Date.now();
    startMousePos.current = { x: e.clientX, y: e.clientY };
    startRobotRotation.current = { x: targetRotation.current.x, y: targetRotation.current.y };
    
    if (mountRef.current) {
      mountRef.current.setPointerCapture(e.pointerId);
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const deltaX = e.clientX - startMousePos.current.x;
    const deltaY = e.clientY - startMousePos.current.y;

    const sensitivity = 0.01;
    targetRotation.current.y = startRobotRotation.current.y + deltaX * sensitivity;
    targetRotation.current.x = Math.max(
      -Math.PI / 3,
      Math.min(Math.PI / 3, startRobotRotation.current.x + deltaY * sensitivity)
    );
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (mountRef.current) {
      mountRef.current.releasePointerCapture(e.pointerId);
    }

    const elapsed = Date.now() - pointerStartTime.current;
    const distanceX = Math.abs(e.clientX - startMousePos.current.x);
    const distanceY = Math.abs(e.clientY - startMousePos.current.y);

    // Navigate to contact us if it is a simple pointer click
    if (elapsed < 220 && distanceX < 6 && distanceY < 6) {
      router.push("/contact-us");
    }
  };

  if (isContactPage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end select-none pointer-events-none">
      <div className="relative flex flex-col items-end pointer-events-auto">
        
        {/* Speech Bubble */}
        <AnimatePresence>
          {showBubble && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-28 right-6 w-52 md:w-56 bg-neutral-900/90 dark:bg-neutral-950/90 backdrop-blur-md border border-white/[0.08] text-white p-4.5 rounded-2xl shadow-xl flex flex-col gap-2 z-50 cursor-pointer text-left"
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setShowBubble(false);
                  setIsDismissed(true);
                }}
                className="absolute top-2 right-2 text-white/40 hover:text-white/80 p-0.5 rounded-full hover:bg-white/5 transition-colors duration-200"
                aria-label="Dismiss chat"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Link href="/contact-us" className="w-full">
                <p className="text-xs md:text-sm font-semibold leading-relaxed pr-3 text-white">
                  Let&apos;s build something amazing together! 🚀
                </p>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-color)] mt-1.5 inline-flex items-center gap-1 group">
                  Get in Touch
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </span>
              </Link>

              {/* Triangle Tail */}
              <div className="absolute -bottom-2.5 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[11px] border-t-neutral-900/90 dark:border-t-neutral-950/90 z-40" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Interactive Three.js Canvas Container */}
        <div
          ref={mountRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          className="w-28 h-28 cursor-grab active:cursor-grabbing relative overflow-hidden focus:outline-none select-none touch-none filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        />

      </div>
    </div>
  );
}
