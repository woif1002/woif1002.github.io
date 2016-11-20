var time=setInterval(a,300)
	function a(){
		document.getElementById('ap').value+=5;
	    if(document.getElementById('ap').value>=95){
		   clearInterval(time);
		   aa.style.marginTop='-10px'
		   aa.style.display='block';
		   }
	   }

var tie=setInterval(b,500)
	function b(){
		document.getElementById('bp').value+=8;
	    if(document.getElementById('bp').value>=88){
		   clearInterval(tie);
		   ab.style.marginTop='-10px';
		   ab.style.display='block';
		   }
	   }

var tim=setInterval(c,700)
	function c(){
		document.getElementById('cp').value+=9;
	    if(document.getElementById('cp').value>=72){
		   clearInterval(tim);
		   ac.style.marginTop='-10px';
		   ac.style.display='block';
		   }
	   }

var ti=setInterval(d,700)
	function d(){
		document.getElementById('dp').value+=11;
	    if(document.getElementById('dp').value>=77){
		   clearInterval(ti);
		   ad.style.marginTop='-10px';
		   ad.style.display='block';
		   }
	   }