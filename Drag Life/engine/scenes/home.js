SceneManager.register("home",{

start(){

Render.html(`

<div class="scene">

<img class="scene-bg" src="assets/locations/home_parent.png">

<div class="node" style="left:63%;top:58%;" onclick="SceneManager.load('garage')">
<img src="assets/stages/parent_garage_stage.png">
<div class="node-label">Garage</div>
</div>

<div class="node" style="left:50%;bottom:5%;" onclick="SceneManager.load('world')">
<img src="assets/maps/city_map.png">
<div class="node-label">Back to City</div>
</div>

</div>

`)

}

})