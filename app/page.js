"use client";

import { useEffect } from "react";
// Initial Setup
// Create the Scene
// Create the Camera
// Create a Visible Object
// Create the Renderer
// Render the Scene

import {
	BoxGeometry,
	Color,
	Mesh,
	MeshBasicMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Home() {
	useEffect(() => {
		// Get a reference to the container element that will hold our scene
		const container = document.querySelector("#scene-container");

		const scene = new Scene();
		// Set the background color
		scene.background = new Color("skyBlue");

		// Create a camera
		const fov = 35; // AKA Field of View
		const aspect = container?.clientWidth / container?.clientHeight;
		const near = 0.1; // the near clipping plane
		const far = 100; // the far clipping plane

		const camera = new PerspectiveCamera(fov, aspect, near, far);
		camera.position.set(0, 0, 10);

		// create a geometry
		const geometry = new BoxGeometry(2, 2, 2);
		// create a default (white) Basic material
		const material = new MeshBasicMaterial();

		// create a Mesh containing the geometry and material
		const cube = new Mesh(geometry, material);

		// add the mesh to the scene
		scene.add(cube);

		// create the renderer
		const renderer = new WebGLRenderer();

		// next, set the renderer to the same size as our container element
		renderer.setSize(container?.clientWidth, container?.clientHeight);

		// finally, set the pixel ratio so that our scene will look good on HiDPI displays
		renderer.setPixelRatio(window.devicePixelRatio);
		// add the automatically created <canvas> element to the page
		container.append(renderer.domElement);

		// render, or 'create a still image', of the scene
		renderer.render(scene, camera);
	}, [0]);

	return (
		<div className=" min-h-screen min-w-fit flex items-start justify-center bg-gray-700">
			<div className="bg-green-300   h-[400px] w-[400px] rounded-md ">
				<h1 className="text-center py-2">
					Hello World for three js
				</h1>

				<div
					id="scene-container"
					className=" min-h-[500px] w-[400px]"
				></div>
			</div>
		</div>
	);
}

