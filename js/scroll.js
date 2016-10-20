 $(document).ready(function(){
        $("a[href='#top']").click(function() {
            $("html, body").animate({ scrollTop: 0 }, "slow");
            return false;
        });

        $("a[href='#whats_vr']").click(function(){
            $('html, body').animate({ scrollTop:  $("#whats_vr").offset().top - 30 }, 'slow');
            return false;
        });
        $("a[href='#features']").click(function(){
            $('html, body').animate({ scrollTop:  $("#features").offset().top - 100 }, 'slow');
            return false;
        });
        $("a[href='#uses']").click(function(){
            $('html, body').animate({ scrollTop:  $("#uses").offset().top - 100 }, 'slow');
            return false;
        });
        $("a[href='#related']").click(function(){
            $('html, body').animate({ scrollTop:  $("#related").offset().top - 100 }, 'slow');
            return false;
        });

        /* For USES of VR */
        $("a[href='#ent']").click(function(){
            $('html, body').animate({ scrollTop:  $("#ent").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#edu']").click(function(){
            $('html, body').animate({ scrollTop:  $("#edu").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#art']").click(function(){
            $('html, body').animate({ scrollTop:  $("#art").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#gaming']").click(function(){
            $('html, body').animate({ scrollTop:  $("#gaming").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#real']").click(function(){
            $('html, body').animate({ scrollTop:  $("#real").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#social']").click(function(){
            $('html, body').animate({ scrollTop:  $("#social").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#psycho']").click(function(){
            $('html, body').animate({ scrollTop:  $("#psycho").offset().top - 110 }, 'slow');
            return false;
        });
        $("a[href='#tourism']").click(function(){
            $('html, body').animate({ scrollTop:  $("#tourism").offset().top - 110 }, 'slow');
            return false;
        });
 });