game.resources = [

    { name : "texture", type : "json",  src : "data/texture/texture.json" },
    { name : "texture", type : "image", src : "data/texture/texture.png" },

	 //level tileset
    {name: "branches-01",  type:"image", src: "data/map/branches-01.png"},
    {name: "branches-02",  type:"image", src: "data/map/branches-02.png"},
    {name: "branches-03",  type:"image", src: "data/map/branches-03.png"},
   
    // // our metatiles
    // {name: "collision-tiles",  type:"image", src: "data/map/collision-tiles.png"},

    //background
    {name: "bg",  type:"image", src: "data/map/bg.png"},
    
    //walking spritesheet
    //big one
    {name: "walk",  type:"image", src: "data/img/clover/walk/all.png"},
    {name: "eat",  type:"image", src: "data/img/clover/eat/eat.png"},

    // //blah, dont use probably?
    // {name: "walk-b",  type:"image", src: "data/img/clover/walk/b.png"},
    // {name: "walk-br",  type:"image", src: "data/img/clover/walk/br.png"},
    // {name: "walk-g",  type:"image", src: "data/img/clover/walk/g.png"},
    // {name: "walk-o",  type:"image", src: "data/img/clover/walk/o.png"},      
    // {name: "walk-r",  type:"image", src: "data/img/clover/walk/r.png"},
    // {name: "walk-v",  type:"image", src: "data/img/clover/walk/v.png"},
    // {name: "walk-w",  type:"image", src: "data/img/clover/walk/w.png"},
    // {name: "walk-y",  type:"image", src: "data/img/clover/walk/y.png"}, 
    // //eating     
    // {name: "eat-b",  type:"image", src: "data/img/clover/eat/b.png"},
    // {name: "eat-g",  type:"image", src: "data/img/clover/eat/g.png"},
    // {name: "eat-o",  type:"image", src: "data/img/clover/eat/o.png"},
    // {name: "eat-r",  type:"image", src: "data/img/clover/eat/r.png"},
    // {name: "eat-v",  type:"image", src: "data/img/clover/eat/v.png"},
    // {name: "eat-y",  type:"image", src: "data/img/clover/eat/y.png"},
    //end
    {name: "end",  type:"image", src: "data/img/clover/end.png"},

    //leaf sprites
    {name: "leaf-b",  type:"image", src: "data/img/leaf/b.png"}, //w: 190
    {name: "leaf-g",  type:"image", src: "data/img/leaf/g.png"},//w: 154
    {name: "leaf-o",  type:"image", src: "data/img/leaf/o.png"},//w: 154
    {name: "leaf-r",  type:"image", src: "data/img/leaf/r.png"},//w: 155
    {name: "leaf-v",  type:"image", src: "data/img/leaf/v.png"},//w: 154
    {name: "leaf-y",  type:"image", src: "data/img/leaf/y.png"},//w: 154

    
    //font
    {name: "32x32_font", type:"image", src: "data/img/font.png"},

    // Maps
    {name: "level-01", type: "tmx", src: "data/level-01.tmx"},
    {name: "level-02", type: "tmx", src: "data/level-02.tmx"},
    {name: "level-03", type: "tmx", src: "data/level-03.tmx"},
    {name: "level-04", type: "tmx", src: "data/level-04.tmx"},

	
    // Background Music
	{name: "bg", type: "audio", src: "data/bgm/"},
    {name: "eat", type: "audio", src: "data/sfx/"},

    
    // Title Screen
    {name: "title_screen", type: "image", src: "data/img/gui/title_screen.png"}
	
];
