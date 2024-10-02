// Create a scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a larger 3D object (e.g., a cube)
const geometry = new THREE.BoxGeometry(2, 2, 2); // Larger cube
const materials = [
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('texture1.jpg') }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('texture2.jpg') }),
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('texture1.jpg') }), // Front face
    new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('texture2.jpg') }), // Back face
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // Top face
    new THREE.MeshBasicMaterial({ color: 0xffffff })  // Bottom face
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
camera.position.z = 5;

// Lighting
const light = new THREE.AmbientLight(0xffffff); // soft white light
scene.add(light);

// Animation
let speed = 0.01; // Rotation speed
let autoRotate = true;

function animate() {
    requestAnimationFrame(animate);
    
    if (autoRotate) {
        cube.rotation.y += speed; // Rotate clockwise
    }
    
    renderer.render(scene, camera);
}

animate();

// Control rotation with arrow keys and click
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        cube.rotation.y -= speed; // Rotate left
    } else if (event.key === 'ArrowRight') {
        cube.rotation.y += speed; // Rotate right
    }
});

window.addEventListener('click', () => {
    autoRotate = !autoRotate; // Toggle auto-rotation on click
});
