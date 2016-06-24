/**
 * Created by Michel Llorens [@Michotastico] on 23-06-2016.
 */




var AirPlane = function() {

    this.mesh = new THREE.Object3D();

    // Create the body
    var geomBody = new THREE.BoxGeometry(50,60,50,1,1,1);
    var matBody = new THREE.MeshPhongMaterial({color:Colors.silver, shading:THREE.FlatShading});
    var body = new THREE.Mesh(geomBody, matBody);
    body.castShadow = true;
    body.receiveShadow = true;
    this.mesh.add(body);

    // Create the shield
    var geomShield = new THREE.BoxGeometry(20,80,50,1,1,1);
    var matShield = new THREE.MeshPhongMaterial({color:Colors.gold, shading:THREE.FlatShading});
    var shield = new THREE.Mesh(geomShield, matShield);
    shield.position.x = 40;
    shield.castShadow = true;
    shield.receiveShadow = true;
    this.mesh.add(shield);

    // Create the tail
    var geomTailPlane = new THREE.BoxGeometry(30,30,5,1,1,1);
    var matTailPlane = new THREE.MeshPhongMaterial({color:Colors.pink, shading:THREE.FlatShading});
    var tailPlane = new THREE.Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(0,40,0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);

    // Create the arm
    var geomArms = new THREE.BoxGeometry(40,8,150,1,1,1);
    var matArms = new THREE.MeshPhongMaterial({color:Colors.silver, shading:THREE.FlatShading});
    var arms = new THREE.Mesh(geomArms, matArms);
    arms.castShadow = true;
    arms.receiveShadow = true;
    arms.position.set(15,15, 0)
    this.mesh.add(arms);

    // propeller
    var geomPropeller = new THREE.BoxGeometry(20,10,10,1,1,1);
    var matPropeller = new THREE.MeshPhongMaterial({color:Colors.brown, shading:THREE.FlatShading});
    this.propeller = new THREE.Mesh(geomPropeller, matPropeller);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    // blades
    var geomBlade = new THREE.BoxGeometry(1,100,20,1,1,1);
    var matBlade = new THREE.MeshPhongMaterial({color:Colors.brownDark, shading:THREE.FlatShading});

    var blade = new THREE.Mesh(geomBlade, matBlade);
    blade.position.set(8,0,0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    this.propeller.add(blade);
    this.propeller.position.set(50,0,0);
    this.mesh.add(this.propeller);
};

var airplane;

function createPlane(){
    airplane = new AirPlane();
    airplane.mesh.scale.set(.25,.25,.25);
    airplane.mesh.position.y = 70;
    scene.add(airplane.mesh);
}