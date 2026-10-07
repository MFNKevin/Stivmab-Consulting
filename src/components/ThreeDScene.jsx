import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeDScene({ variant = 'hero' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    const objects = [];

    // Materials
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4A84B,
      metalness: 0.7,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });

    const solidGoldMaterial = new THREE.MeshStandardMaterial({
      color: 0xD4A84B,
      metalness: 0.8,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8
    });

    const blueMaterial = new THREE.MeshStandardMaterial({
      color: 0x132042,
      metalness: 0.5,
      roughness: 0.5,
      transparent: true,
      opacity: 0.6
    });

    // Variant logic
    if (variant === 'hero' || variant === 'immigration') {
      // Globe representing international reach
      const globeGeo = new THREE.IcosahedronGeometry(12, 2);
      const globe = new THREE.Mesh(globeGeo, goldMaterial);
      globe.position.set(15, 0, -10);
      scene.add(globe);
      objects.push({ mesh: globe, rotX: 0.001, rotY: 0.002, floatSpeed: 0.01, floatAmp: 1 });

      // Paper plane representing travel and immigration
      const planeGrp = new THREE.Group();
      
      const planeGeo = new THREE.ConeGeometry(2, 6, 3);
      const plane = new THREE.Mesh(planeGeo, solidGoldMaterial);
      plane.rotation.x = Math.PI / 2;
      planeGrp.add(plane);
      
      const wingGeo = new THREE.BoxGeometry(8, 0.2, 3);
      const wing = new THREE.Mesh(wingGeo, solidGoldMaterial);
      wing.position.set(0, 0, 1);
      planeGrp.add(wing);

      planeGrp.position.set(-15, 8, -10);
      planeGrp.rotation.z = Math.PI / 8;
      planeGrp.rotation.x = -Math.PI / 8;
      scene.add(planeGrp);
      objects.push({ mesh: planeGrp, rotX: 0.005, rotY: 0.01, floatSpeed: 0.02, floatAmp: 2 });
    } 
    else if (variant === 'about' || variant === 'integration') {
      // Connected nodes representing integration and network
      const nodeGeo = new THREE.SphereGeometry(3, 16, 16);
      
      const node1 = new THREE.Mesh(nodeGeo, solidGoldMaterial);
      node1.position.set(-12, 6, -15);
      scene.add(node1);
      
      const node2 = new THREE.Mesh(nodeGeo, solidGoldMaterial);
      node2.position.set(12, -6, -20);
      scene.add(node2);

      const linkGeo = new THREE.CylinderGeometry(0.3, 0.3, 30);
      const link = new THREE.Mesh(linkGeo, goldMaterial);
      link.position.set(0, 0, -17.5);
      link.rotation.z = Math.PI / 4;
      scene.add(link);

      objects.push({ mesh: node1, rotY: 0.02, floatSpeed: 0.015, floatAmp: 1.5 });
      objects.push({ mesh: node2, rotX: 0.02, floatSpeed: 0.015, floatAmp: 1.5 });
      objects.push({ mesh: link, rotY: 0.005, floatSpeed: 0.01, floatAmp: 1 });
    } 
    else if (variant === 'contact' || variant === 'cta') {
      // Intersecting rings representing communication
      const ringGeo = new THREE.TorusGeometry(12, 0.5, 16, 100);
      
      const ring1 = new THREE.Mesh(ringGeo, goldMaterial);
      scene.add(ring1);
      objects.push({ mesh: ring1, rotX: 0.002, rotY: 0.003, rotZ: 0.005, floatSpeed: 0.01, floatAmp: 1 });

      const ring2 = new THREE.Mesh(ringGeo, goldMaterial);
      ring2.rotation.y = Math.PI / 2;
      scene.add(ring2);
      objects.push({ mesh: ring2, rotX: -0.003, rotY: 0.001, rotZ: 0.004, floatSpeed: 0.005, floatAmp: 1 });

      const centerGeo = new THREE.OctahedronGeometry(4, 0);
      const center = new THREE.Mesh(centerGeo, solidGoldMaterial);
      scene.add(center);
      objects.push({ mesh: center, rotX: 0.01, rotY: 0.01, floatSpeed: 0.02, floatAmp: 0.5 });
    } 
    else if (variant === 'business' || variant === 'services') {
      // Ascending bars representing business growth
      for (let i = 0; i < 4; i++) {
        const height = (i + 1) * 4;
        const barGeo = new THREE.BoxGeometry(3, height, 3);
        const bar = new THREE.Mesh(barGeo, i === 3 ? solidGoldMaterial : goldMaterial);
        bar.position.set(-15 + (i * 10), height / 2 - 10, -20);
        scene.add(bar);
        objects.push({ mesh: bar, floatSpeed: 0.01 + (i * 0.002), floatAmp: 0.5 + (i * 0.2) });
      }
      
      const coinGeo = new THREE.CylinderGeometry(4, 4, 1, 32);
      const coin = new THREE.Mesh(coinGeo, solidGoldMaterial);
      coin.rotation.x = Math.PI / 2;
      coin.rotation.z = Math.PI / 4;
      coin.position.set(20, 12, -15);
      scene.add(coin);
      objects.push({ mesh: coin, rotY: 0.02, floatSpeed: 0.02, floatAmp: 1.5 });
    } 
    else if (variant === 'immobilier') {
      // Abstract house representing real estate
      const houseGrp = new THREE.Group();

      const baseGeo = new THREE.BoxGeometry(10, 8, 10);
      const base = new THREE.Mesh(baseGeo, goldMaterial);
      base.position.set(0, -4, 0);
      houseGrp.add(base);
      
      const roofGeo = new THREE.ConeGeometry(8, 6, 4);
      const roof = new THREE.Mesh(roofGeo, solidGoldMaterial);
      roof.rotation.y = Math.PI / 4;
      roof.position.set(0, 3, 0);
      houseGrp.add(roof);

      houseGrp.position.set(0, 0, -20);
      scene.add(houseGrp);
      objects.push({ mesh: houseGrp, rotY: 0.005, rotX: 0.002, floatSpeed: 0.01, floatAmp: 1.5 });
    } 
    else if (variant === 'studies' || variant === 'allemand') {
      // Stacked books representing studies and learning
      const bookGrp = new THREE.Group();

      for (let i = 0; i < 3; i++) {
        const bookGeo = new THREE.BoxGeometry(12, 2, 16);
        const book = new THREE.Mesh(bookGeo, i === 2 ? solidGoldMaterial : goldMaterial);
        book.position.set(0, (i * 2.5) - 5, 0);
        book.rotation.y = (Math.random() - 0.5) * 0.5;
        bookGrp.add(book);
      }
      
      // Graduation cap top
      const capGeo = new THREE.BoxGeometry(14, 0.5, 14);
      const cap = new THREE.Mesh(capGeo, solidGoldMaterial);
      cap.position.set(0, 4, 0);
      cap.rotation.y = Math.PI / 4;
      bookGrp.add(cap);

      bookGrp.position.set(10, 0, -20);
      scene.add(bookGrp);
      objects.push({ mesh: bookGrp, rotY: 0.004, floatSpeed: 0.012, floatAmp: 1.2 });
    } 
    else if (variant === 'retraite') {
      // Shield and coins representing security and wealth
      const shieldGeo = new THREE.CylinderGeometry(8, 8, 2, 6);
      const shield = new THREE.Mesh(shieldGeo, goldMaterial);
      shield.rotation.x = Math.PI / 2;
      shield.position.set(-10, 0, -20);
      scene.add(shield);
      objects.push({ mesh: shield, rotY: 0.005, floatSpeed: 0.01, floatAmp: 1 });

      for(let i=0; i<3; i++) {
        const coinGeo = new THREE.CylinderGeometry(3, 3, 0.5, 32);
        const coin = new THREE.Mesh(coinGeo, solidGoldMaterial);
        coin.rotation.x = Math.PI / 2;
        coin.position.set(15 + (i*2), -5 + (i*5), -15 - (i*2));
        scene.add(coin);
        objects.push({ mesh: coin, rotY: 0.02 + (i*0.01), floatSpeed: 0.015, floatAmp: 1.5 });
      }
    } 
    else {
      // Generic pillars
      const pyGeo = new THREE.ConeGeometry(6, 10, 4);
      const py1 = new THREE.Mesh(pyGeo, goldMaterial);
      py1.position.set(-20, 5, -20);
      scene.add(py1);
      objects.push({ mesh: py1, rotX: 0.005, rotY: 0.01, floatSpeed: 0.02, floatAmp: 1.5 });

      const torusGeo = new THREE.TorusGeometry(8, 2, 16, 50);
      const torus = new THREE.Mesh(torusGeo, solidGoldMaterial);
      torus.position.set(20, -5, -25);
      scene.add(torus);
      objects.push({ mesh: torus, rotX: -0.005, rotY: -0.01, floatSpeed: 0.015, floatAmp: 2 });
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
    directionalLight.position.set(10, 20, 10);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xD4A84B, 4, 50);
    pointLight.position.set(-10, -10, 10);
    scene.add(pointLight);

    // Animation Loop
    let animationFrameId;
    let time = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      time += 1;

      objects.forEach((obj) => {
        if (obj.rotX) obj.mesh.rotation.x += obj.rotX;
        if (obj.rotY) obj.mesh.rotation.y += obj.rotY;
        if (obj.rotZ) obj.mesh.rotation.z += obj.rotZ;
        
        if (obj.baseY === undefined) obj.baseY = obj.mesh.position.y;
        obj.mesh.position.y = obj.baseY + Math.sin(time * obj.floatSpeed) * obj.floatAmp;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      
      objects.forEach(obj => {
        if(obj.mesh.geometry) obj.mesh.geometry.dispose();
      });
      goldMaterial.dispose();
      solidGoldMaterial.dispose();
      blueMaterial.dispose();
      renderer.dispose();
    };
  }, [variant]);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.8 }}
    />
  );
}