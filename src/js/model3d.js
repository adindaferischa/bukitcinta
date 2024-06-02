import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'; 
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/examples/jsm/loaders/DRACOLoader';
import react from 'react';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
renderer.setClearColor(0xDFE9F3);
scene.fog = new THREE.Fog( 0xDFE9F3, 400, 900 );
scene.fog2 = new THREE.FogExp2( 0xDFE9F3, 0.0005 );



const camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
);

camera.position.set(0, 200, 250 ) ;
camera.lookAt(20,100, 100);


//animasi awal
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true ;
controls.dampingFactor = 0.12 ;
controls.maxDistance = 400;
controls.minDistance = 200 ;
controls.target = new THREE.Vector3(-50 , 20 ,35 );
controls.minPolarAngle = Math.PI / 6;
controls.maxPolarAngle = Math.PI / 2.4;
controls.mouseButtons.RIGHT = null;
controls.maxTargetRadius = 200;
controls.screenSpacePanning = true;
controls.enablePan = false ;
controls.autoRotate = true ;
controls.autoRotateSpeed = 0.5;

const ambientLight = new THREE.AmbientLight(0xededed, 3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1);
scene.add(directionalLight);
directionalLight.position.set(0, 50, 0);


const loading = new THREE.LoadingManager();
const progressbar = document.getElementById('progress-bar') ;

loading.onProgress = function(url, loaded,  total) {
    progressbar.value = (loaded / total) * 100;
}

const progressbarcontainer = document.querySelector('.progress-bar-container');
loading.onLoad = function() {
    progressbarcontainer.style.display = 'none'
}

const gltfLoader = new GLTFLoader(loading);

let kampus;
gltfLoader.load('./assets/scene.gltf', function(gltf) {
    const model = gltf.scene;
    scene.add(model);
    kampus = model;
});

const dloader = new DRACOLoader();
dloader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.5/');
dloader.setDecoderConfig({type: 'js'});
gltfLoader.setDRACOLoader(dloader);

function animate() {
   
    controls.update();
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);


//CURSOR

const site_wide_cursor = document.querySelector('.custom-cursor.site-wide');

document.documentElement.addEventListener('mousemove', () => {
	site_wide_cursor.style.display = 'block';
});

document.documentElement.addEventListener('mouseout', () => {
	site_wide_cursor.style.display = 'none';
});


document.addEventListener('mousemove', TrackCursor);

document.addEventListener('mousedown', () => site_wide_cursor.classList.add('active'));
document.addEventListener('mouseup', () => site_wide_cursor.classList.remove('active'));

function TrackCursor(evt) {
	const w = site_wide_cursor.clientWidth;
	const h = site_wide_cursor.clientHeight;

	site_wide_cursor.style.transform = 
		`translate(${evt.clientX - w/2}px, ${evt.clientY - h/2}px)`;
        
}
