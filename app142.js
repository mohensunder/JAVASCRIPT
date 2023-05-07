let recipeobj={
    title:"Tomato Pasta",
    imgSrc:"https://thumbs.dreamstime.com/b/fruit-background-4270990.jpg",
    ingredients:["pasta","oil","onion","salt","tomato","pasta"],
};
let heading=document.getElementById("head");
let img=document.getElementById("image").src=recipeobj.imgSrc;
let ulist=document.getElementById("ulid");
heading.textContent=recipeobj.title;
heading.className="modify";


let ing=recipeobj.ingredients;
for(var i of ing )
{
    let list=document.createElement("li");
    list.textContent=i;
    ulist.appendChild(list);
}