SceneManager.register("world",{

start(){

Render.html(`

<div class="scene">

<img class="scene-bg" src="assets/maps/city_map.png">

<div class="node" style="left:75%;top:25%;" onclick="SceneManager.load('home')">
<img src="assets/locations/home_parent.png">
<div class="node-label">Home</div>
</div>

<div class="node" style="left:50%;top:45%;" onclick="SceneManager.load('downtown')">
<img src="assets/locations/downtown.png">
<div class="node-label">Downtown</div>
</div>

<div class="node" style="left:50%;bottom:8%;" onclick="SceneManager.load('racing')">
<img src="assets/locations/race_meet.png">
<div class="node-label">Street Racing</div>
</div>

</div>

`)

}

})