/**
 * Created by Michel Llorens [@Michotastico] on 23-06-2016.
 */
Cloud = function(){
    // Create an empty container that will hold the different parts of the cloud
    this.mesh = new THREE.Object3D();
    
    var geom = new THREE.BoxGeometry(20,20,20);

    var mat = new THREE.MeshPhongMaterial({
        color:Colors.white
    });

    var nBlocs = 3+Math.floor(Math.random()*3);

    for (var i=0; i<nBlocs; i++ ){

        var m = new THREE.Mesh(geom, mat);

        m.position.x = i*15;
        m.position.y = Math.random()*10;
        m.position.z = Math.random()*10;
        m.rotation.z = Math.random()*Math.PI*2;
        m.rotation.y = Math.random()*Math.PI*2;

        var s = .1 + Math.random()*.9;
        m.scale.set(s,s,s);

        m.castShadow = true;
        m.receiveShadow = true;

        this.mesh.add(m);
    }
};


Sky = function(){
    // Create an empty container
    this.mesh = new THREE.Object3D();

    this.nClouds = 20;

    var stepAngle = Math.PI*2 / this.nClouds;

    for(var i=0; i<this.nClouds; i++){
        var c = new Cloud();

        var a = stepAngle*i;
        var h = 750 + Math.random()*200;

        c.mesh.position.y = Math.sin(a)*h;
        c.mesh.position.x = Math.cos(a)*h;

        c.mesh.rotation.z = a + Math.PI/2;

        c.mesh.position.z = -400-Math.random()*400;

        var s = 1+Math.random()*2;
        c.mesh.scale.set(s,s,s);


        this.mesh.add(c.mesh);
    }
};


var sky;

function createSky(){
    sky = new Sky();
    sky.mesh.position.y = -600;
    scene.add(sky.mesh);
}