$(document).ready(function(){
    // Declare vars
    var totalWidth = 0;
    var positions = new Array();
    
    $('#slides .slide').each(function(i){
        // Get slider widths
        positions[i] = totalWidth;
        totalWidth += $(this).width();
        
        // check widths
        if(!$(this).width()){
            
            alert('Please Add a width to your image');
            return false;
        }
        
    });
    // set width
    $('#slides').width(totalWidth);
    
    $('#menu ul li a').click(function(e,keepScroll){
        //remove active class and add inactive
        $('li.product').removeClass('active').addClass('inactive');
        //Add active class to parent
        $(this).parent().addClass('active');
        var pos = $(this).parent().prevAll('.product').length;
    
        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'}, 450);
        
        // prevent default link action
        
        e.preventDefault();
        
        // stop autoscroll
        if(!autoScroll){
            clearInterval(itvl);
        } 
    });
    
    // Make first image active
    
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');
    
    
    // Auto Scroll
    
    var current = 1;
    function autoScroll(){
        
        if(current == -1){
            return false;
        }
            $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
            current++;
    
    }
    
    // Duration for auto-scroll
    var duration = 2;
    itvl = setInterval(function(){
        
        autoScroll()
    },duration*1000);
    
});