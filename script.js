const thumb1=document.querySelector('.thumb1');
const thumb2=document.querySelector('.thumb2');
const thumb3=document.querySelector('.thumb3');
const circle=document.querySelector('.circle');
let star=document.querySelector('.starImage img');
/*thumb1.addEventListener('click',function(){
     circle.style.background='#174125';
     star.src="img1.png";
 });
thumb2.addEventListener('click',function(){
     circle.style.background='#eb7495';
     star.src="img2.png";
 });
thumb3.addEventListener('click',function(){
     circle.style.background='#d752b1';
     star.src="img3.png";
 })*/

 let thumbs = document.querySelectorAll('.thumb img');
 let colors = ['#174125', '#eb7495', '#d752b1'];
for(let i=0;i<thumbs.length;i++){

	console.log(thumbs[i]);
  	thumbs[i].addEventListener('click',function(){
  		star.src=`img${i+1}.png`;
  		circle.style.background=colors[i];
  		// if(i==0){
  		// 	 circle.style.background='#174125';
    //          star.src="img1.png";
  		// }else if(i==1){
  		// 	circle.style.background='#eb7495';
    // 		 star.src="img2.png";
  		// }else if(i==2){
  		// 	circle.style.background='#d752b1';
    //            star.src="img3.png";
  		// }
  	})
}