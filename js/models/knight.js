/**
 * Created by Michel Llorens [@Michotastico] on 23-06-2016.
 */




var AirPlane = function() {

    this.mesh = new THREE.Object3D();

    // Create the body
    var geomBody = new THREE.BoxGeometry(40,60,50,1,1,1);
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

    // Create the head
    var geomHead = new THREE.BoxGeometry(30,30,5,1,1,1);
    var matHead = new THREE.MeshPhongMaterial({color:Colors.pink, shading:THREE.FlatShading});
    var head = new THREE.Mesh(geomHead, matHead);
    head.position.set(0,40,0);
    head.castShadow = true;
    head.receiveShadow = true;
    this.mesh.add(head);

    // Create arms
    var geomArms = new THREE.BoxGeometry(40,8,150,1,1,1);
    var matArms = new THREE.MeshPhongMaterial({color:Colors.silver, shading:THREE.FlatShading});
    var arms = new THREE.Mesh(geomArms, matArms);
    arms.castShadow = true;
    arms.receiveShadow = true;
    arms.position.set(15,15, 0)
    this.mesh.add(arms);

    // Create the sword
    var geomSword = new THREE.BoxGeometry(70,8,5,1,1,1);
    var matSword = new THREE.MeshPhongMaterial({color:Colors.blue, shading:THREE.FlatShading});
    var sword = new THREE.Mesh(geomSword, matSword);
    sword.castShadow = true;
    sword.receiveShadow = true;
    sword.position.set(55,15, 0)
    this.mesh.add(sword);

    // Create legs
    var geomLegs = new THREE.BoxGeometry(15, 40, 150, 1, 1, 1);
    var matLegs = new THREE.MeshPhongMaterial({color:Colors.silver, shading:THREE.FlatShading});
    this.legs = new THREE.Mesh(geomLegs, matLegs);
    this.legs.castShadow = true;
    this.legs.receiveShadow = true;
    this.legs.position.set(0, -35, 0);
    this.mesh.add(this.legs);

};

var airplane;

function createPlane(){
    airplane = new AirPlane();
    airplane.mesh.scale.set(.25,.25,.25);
    airplane.mesh.position.y = 70;
    scene.add(airplane.mesh);
}