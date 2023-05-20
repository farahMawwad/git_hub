var repositories=document.getElementById('repositories')
let input =document.getElementById('input_name')
let user =document.getElementById('user')
let value
input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
      value = input.value;
      user.innerHTML=""
    repositories.innerHTML=""
fetch(`https://api.github.com/users/${value}`)
.then((res) => res.json())
.then((data)=>{
    
    const img_user_url = data.avatar_url;
    const img_user = document.createElement('img');
    img_user.id='img_user'
    img_user.src = img_user_url;
    const name_main =document.createElement('div')
    name_main.id='name_user'
    name_main.textContent=data.name
    const name_account =document.createElement('div')
    name_account.id="name_account"
    name_account.textContent=data.login
    const career =document.createElement('h3')
    career.textContent=data.bio
    career.id='career'
    const edit =document.createElement('button')
    edit.textContent='Edit profile'
edit.id='edit'
    const followers =document.createElement('h4')
    followers.textContent= data.followers+' followers '
    followers.className='follow'
    const following =document.createElement('h4')
    following.id='following'
    const follow =document.createElement('div')
follow.id='follow'
    following.textContent= data.following+ ' following  '
    followers.id='followers'
    following.className='follow'
   

    user.appendChild(img_user)
    user.appendChild(name_main)
    user.appendChild(name_account)
    user.appendChild(career) 
    user.appendChild(edit) 
    follow.appendChild(followers) 
    follow.appendChild(following) 
    user.appendChild(follow) 
 fetch(data.repos_url).then((res) => res.json())
 .then((data)=>{
     var language =document.createElement('h4')
     var Popular_repositories =document.createElement('h2')
     Popular_repositories.textContent='Popular repositories'
     Popular_repositories.id='Popular_repositories'
     repositories.appendChild(Popular_repositories)
 for(let i = 0 ; i<6 ;i++){
var repositorie =document.createElement('div')
repositorie.className='repositorie'

var name_project =document.createElement('h4')
name_project.textContent=data[i].name
name_project.id='name_project'
var description_main =document.createElement('h5')
var description;
description_main.id='description'
if(data[i].description !==null){
    description =data[i].description
}
else if(data[i].fork == true){
    description =" forked "
}
else {
    description=""
}
description_main.textContent=description
language.id='language'
language.textContent=data[i].language
repositorie.appendChild(name_project)
repositorie.appendChild(description_main)
repositorie.appendChild(language)
repositories.appendChild(repositorie)
}
 })




})}})
let list_main =document.getElementById('list_main')
let list =document.getElementById('list')
let ul_nav_1 =document.getElementById('ul_nav_1')
list_main.addEventListener('click',()=>{
    if( ul_nav_1.style.display == 'none'){
        ul_nav_1.style.display='block';
    }
   else if( ul_nav_1.style.display=='block'){
       ul_nav_1.style.display='none';
   }

    
        
})


  
