SceneManager.register("racing",{

start(){

Render.html(`

<div class="scene">

<img class="scene-bg" src="assets/locations/race_meet.png">

<h1 style="color:white;text-align:center;margin-top:200px;">
Street Racing Coming Next
</h1>

<div class="node" style="left:5%;top:5%;" onclick="SceneManager.load('world')">
<img src="assets/maps/city_map.png">
<div class="node-label">Back</div>
</div>

</div>

`)

}

})