$(document).ready(function(){
	var no_of_boxes=12;//total no of boxes/images
	function getRandom(min,max){
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function choice_between_two(choice1,choice2){
		var choice=getRandom(1,2);
		if(choice==1)
			return choice1;
		else
			return choice2;
	}
	function choice_between_three(choice1,choice2,choice3){
		var choice=getRandom(1,3);
		if(choice==1)
			return choice1;
		else if(choice==2)
			return choice2;
		else
			return choice3;
	}

    function swap_left(source,target){
        $('#gb'+source).css('transform','translateX(-100%)');
		$('#gb'+target).css('transform','translateX(100%)');
    }
    function swap_right(source,target){
        $('#gb'+source).css('transform','translateX(100%)');
		$('#gb'+target).css('transform','translateX(-100%)');
    }
    function swap_top(source,target){
        $('#gb'+source).css('transform','translateY(-100%)');
		$('#gb'+target).css('transform','translateY(100%)');
    }
    function swap_bottom(source,target){
        $('#gb'+source).css('transform','translateY(100%)');
		$('#gb'+target).css('transform','translateY(-100%)');;
    }

	function init(){
		var width=0;
		for(var i=1;i<=no_of_boxes;i++){
			$('#gb'+i).css('position','absolute');
			if(i<=6){
				$('#gb'+i).css('top','0%');
			}
			else{
				$('#gb'+i).css('top','35%');
			}
			if(i==7)
				width=0;
			$('#gb'+i).css('left',width+'%');
			width+=16;

		}
	}
	init();

	function play_boxes(position){
		var source=position;
		var target;
		switch(source){
			case 1:
			    target=choice_between_two(2,7);
			    if(target==2){
			    	//$('#gb'+source).css('left','16%');
			    	//$('#gb'+target).css('left','0%');
			    	swap_right(1,2);
			    }
			    else{
			    	//$('#gb'+source).css('top','35%');
			    	//$('#gb'+target).css('top','0%');
			    	swap_bottom(1,7);
			    }
			    break;
			case 2:
			    target=choice_between_three(1,3,8);
			    if(target==1){
			    	swap_left(2,1);
			    }
			    else if(target==3){
			    	swap_right(2,3);
			    }
			    else{
			    	swap_bottom(2,8);
			    }
			    break;
			case 3:
			    target=choice_between_three(2,4,9);
			    if(target==2){
			    	swap_left(3,2);
			    }
			    else if(target==4){
			    	swap_right(3,4);
			    }
			    else{
			    	swap_bottom(3,9);
			    }
			    break;
			case 4:
			    target=choice_between_three(3,5,10);
			    if(target==3){
			    	swap_left(4,3);
			    }
			    else if(target==5){
			    	swap_right(4,5);
			    }
			    else{
			    	swap_bottom(4,10);
			    }
			    break;
			case 5:
			    target=choice_between_three(4,6,11);
			    if(target==4){
			    	swap_left(5,4);
			    }
			    else if(target==5){
			    	swap_right(5,6);
			    }
			    else{
			    	swap_bottom(5,11);
			    }
			    break;
			case 6:
			    target=choice_between_two(5,12);
			    if(target==5){
			    	
			    	swap_left(6,5);
			    }
			    else{
			    	swap_bottom(6,12);
			    }
			    break;
			case 7:
			    target=choice_between_two(1,8);
			    if(target==1){
			    	//$('#gb'+source).css('left','16%');
			    	//$('#gb'+target).css('left','0%');
			    	swap_top(7,1);
			    }
			    else{
			    	//$('#gb'+source).css('top','35%');
			    	//$('#gb'+target).css('top','0%');
			    	swap_right(7,8);
			    }
			    break;
			case 8:
			    target=choice_between_three(7,9,2);
			    if(target==7){
			    	swap_left(8,7);
			    }
			    else if(target==9){
			    	swap_right(8,9);
			    }
			    else{
			    	swap_top(8,2);
			    }
			    break;
			case 9:
			    target=choice_between_three(8,10,3);
			    if(target==8){
			    	swap_left(9,8);
			    }
			    else if(target==10){
			    	swap_right(9,10);
			    }
			    else{
			    	swap_top(9,3);
			    }
			    break;
			case 10:
			    target=choice_between_three(9,11,4);
			    if(target==9){
			    	swap_left(10,9);
			    }
			    else if(target==11){
			    	swap_right(10,11);
			    }
			    else{
			    	swap_top(10,4);
			    }
			    break;
			case 11:
			    target=choice_between_three(10,12,5);
			    if(target==10){
			    	swap_left(11,10);
			    }
			    else if(target==12){
			    	swap_right(11,12);
			    }
			    else{
			    	swap_top(11,5);
			    }
			    break;
			case 12:
			    target=choice_between_two(11,6);
			    if(target==11){
			    	
			    	swap_left(12,11);
			    }
			    else{
			    	swap_top(12,6);
			    }
			    break;
			default:;
		}
	}
    
	var play=setInterval(function(){
		var position=getRandom(1,12);
		play_boxes(position);
	},2000);
	
    
   
});