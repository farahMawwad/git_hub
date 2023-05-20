
let input_user1 =document.getElementById('input_name1')
let input_user2=document.getElementById('input_name2')
let img_user1=document.getElementById('img_user1')
let img_user2=document.getElementById('img_user2')
let result1=document.getElementById('result1')
let  result2=document.getElementById('result2')
let repos1=document.getElementById('repos1')
let  repos2=document.getElementById('repos2')
let following_user1=document.getElementById('following_user1')
let  followers_user1=document.getElementById('followers_user1')
let following_user2=document.getElementById('following_user2')
let  followers_user2=document.getElementById('followers_user2')
let button=document.getElementById('button')
let value_user1
let value_user2
let value1
let value2
let number_following_user1
let number_followers_user1
let number_followers_user2
let number_following_user2

input_user1.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
     
        value_user1 = input_user1.value
        fetch(`https://api.github.com/users/${value_user1}`)
        .then((res) => res.json())
        .then((data)=>{
            img_user1.src=data.avatar_url
            value1=data.public_repos
            number_followers_user1=data.followers
            number_following_user1=data.following
            
            result1.textContent=""
            result2.textContent=""
            following_user1.textContent=""
            followers_user1.textContent=""
            following_user2.textContent=""
            followers_user2.textContent=""
            repos1.textContent=""
            repos2.textContent=""
        })}})
        input_user2.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                
                value_user2 = input_user2.value   
                fetch(`https://api.github.com/users/${value_user2}`)
                .then((res) => res.json())
                .then((data)=>{
                    img_user2.src=data.avatar_url
                    value2=data.public_repos
                    number_followers_user2=data.followers
                    number_following_user2=data.following
                    result1.textContent=""
                    result2.textContent=""
                    following_user1.textContent=""
                    followers_user1.textContent=""
                    following_user2.textContent=""
                    followers_user2.textContent=""
                    repos1.textContent=""
                    repos2.textContent=""
                    
})}})
button.addEventListener('click',()=>{
    
    repos1.textContent="Public Repos  : "+value1
    repos2.textContent="Public Repos  : "+value2
    if(value1>value2){
        result1.textContent="Winner"
        result2.textContent="Loser"
        following_user1.textContent="following :"+ number_following_user1
        followers_user1.textContent="followers :"+number_followers_user1
        following_user2.textContent="following :"+number_following_user2
        followers_user2.textContent="followers :"+number_followers_user2
        
    }
    else{
        
        result2.textContent="Winner"
        result1.textContent="Loser"
      
        following_user1.textContent="following :"+number_following_user1
        followers_user1.textContent="followers :"+number_followers_user1
        following_user2.textContent="following :"+number_following_user2
        followers_user2.textContent="followers :"+number_followers_user2
    }
})
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