SceneManager.register("downtown",{

start(){

Render.html(`

<div class="scene">

<img class="scene-bg" src="assets/locations/downtown.png">

<div class="node" style="right:10%;bottom:20%;" onclick="SceneManager.load('dealership')">
<img src="assets/locations/used_car_lot.png">
<div class="node-label">Used Car Lot</div>
</div>

<div class="node" style="left:5%;bottom:5%;" onclick="SceneManager.load('world')">
<img src="assets/maps/city_map.png">
<div class="node-label">Back to City</div>
</div>

</div>

`)

}

})