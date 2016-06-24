/**
 * Created by Michel Llorens [@Michotastico] on 23-06-2016.
 */

Sea = function(){

    //var geom = new THREE.CylinderGeometry(600,600,800,40,10);
    var geom = new THREE.SphereGeometry(650, 32, 32);

    geom.applyMatrix(new THREE.Matrix4().makeRotationX(-Math.PI/2));

    geom.mergeVertices();

    // get the vertices
    var l = geom.vertices.length;

    // create an array to store new data associated to each vertex
    this.waves = [];

    for (var i=0; i<l; i++){
        // get each vertex
        var v = geom.vertices[i];

        // store some data associated to it
        this.waves.push({y:v.y,
            x:v.x,
            z:v.z,
            // a random angle
            ang:Math.random()*Math.PI*2,
            // a random distance
            amp:5 + Math.random()*15,
            // a random speed between 0.016 and 0.048 radians / frame
            speed:0.016 + Math.random()*0.032
        });
    }


    var mat = new THREE.MeshPhongMaterial({
        color:Colors.brownDark,
        transparent:false,
        opacity:.6,
        shading:THREE.FlatShading
    });

    this.mesh = new THREE.Mesh(geom, mat);

    this.mesh.receiveShadow = true;
};

Sea.prototype.moveWaves = function (){

    // get the vertices
    var verts = this.mesh.geometry.vertices;
    var l = verts.length;

    for (var i=0; i<l; i++){
        var v = verts[i];

        // get the data associated to it
        var vprops = this.waves[i];

        // update the position of the vertex
        v.x = vprops.x + Math.cos(vprops.ang)*vprops.amp;
        v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;

        // increment the angle for the next frame
        vprops.ang += vprops.speed;

    }

    // Tell the renderer that the geometry of the sea has changed.
    // In fact, in order to maintain the best level of performance,
    // three.js caches the geometries and ignores any changes
    // unless we add this line
    this.mesh.geometry.verticesNeedUpdate=true;

    sea.mesh.rotation.z += .005;
};

var sea;

function createSea(){
    sea = new Sea();

    sea.mesh.position.y = -600;

    scene.add(sea.mesh);
}