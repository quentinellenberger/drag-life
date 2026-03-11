SceneManager.register("garage",{

start(){

Render.html(`

<div class="scene">

<img class="scene-bg" src="assets/stages/parent_garage_stage.png">

<div class="node" style="left:5%;bottom:5%;" onclick="SceneManager.load('home')">
<img src="assets/locations/home_parent.png">
<div class="node-label">Back</div>
</div>

</div>

`)

}

})