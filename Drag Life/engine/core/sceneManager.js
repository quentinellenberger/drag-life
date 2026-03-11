const SceneManager = {

scenes:{},

register(name, scene){
this.scenes[name] = scene
},

load(name){

if(!this.scenes[name]){
Render.html(`<h1>Scene Missing</h1><p>${name}</p>`)
return
}

this.scenes[name].start()

}

}