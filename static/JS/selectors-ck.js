function reset(){$("#content").animate({opacity:0},100);$();$("#nameHeader").css("opacity","0");$(".alpha li").addClass("passiveAlpha");cycle=!0;$("#sideMenu").html(default_menu).toggleClass("flexspread flexmiddle");$("#back").addClass("inactive");$("#back").removeClass("active");setCyc()}function bioNav(){$(".right li").click(function(){if($(this).hasClass("active")){var e=parseInt($(this).attr("dir")),t=$("#bio");bioPage+=e;bioPage<bioCols-1?$("#bion").addClass("active"):$("#bion").removeClass("active");bioPage!=0?$("#biop").addClass("active"):$("#biop").removeClass("active");var n=contWidth*bioPage*-1;t.animate({marginLeft:n},1e3)}})}function linkName(){function e(e){console.log("enter");var t=$(e.currentTarget);t.addClass("hover")}console.log("binding");var t=function(e){var t=$(e.currentTarget);t.removeClass("hover")},n=function(e){bioselect=!0;console.log("nameup");$("#names li").addClass("passiveName");Boolean(Number($("#content").css("opacity")))||$("#content").animate({opacity:1},1e3);var t=$(this),n=$(this).find("a");t.removeClass("hover passiveName").addClass("activeName");var r=n.attr("href");r=r.split("#")[1];$("#full").animate({opacity:0,"margin-left":300},100,"linear",function(){$(this).load(aj_bio+r,{id:r,readable:~~readable},function(){bioCols=0;bioPage=0;$bio=$(this).find("#bio");var e=$bio[0].scrollHeight,t=$bio.height();contWidth=$bio.width();bioCols=Math.ceil(e/t);if(bioCols>1){var n=contWidth*bioCols;$bio.css({"-webkit-column-count":String(bioCols),width:String(n)})}else $("#bioPage").remove()})}).animate({opacity:1,"margin-left":0},500,bioNav)};$("#names > li").bind({mouseenter:e,mouseleave:t,mouseup:n})}var aj_bio="../Bio/",default_menu=$("#sideMenu").html(),bioCols=0,bioPage=0,contWidth=0,bioselect=!1,aj_name="../Name/",positionTooltip=function(e){cycle=!1;var t=$(e.target);if(e.which&&t.is("li")){$("div.tooltip").toggleClass("active inactive");var n=t.find("a").attr("href")[1],r=t.offset(),i=t.width(),s=$(".tooltip"),o=s.css("visibility");o==="hidden"&&s.toggleClass("active inactive");s.find("h3").html(n);var u=r.left-i*1.5,a=r.top;s.css({top:a,left:u})}else hideTooltip()},showTooltip=function(e){positionTooltip(e)},hideTooltip=function(){$(".tooltip").removeClass("active");$(".tooltip").addClass("inactive")};$(".alpha li").bind({mouseenter:positionTooltip,mouseleave:hideTooltip,mousedown:showTooltip});var clicked=function(e){console.log("clicked");var t=$(e.target);t.is("li")&&alphaSelected(t)};$(".alpha").bind({mouseup:clicked,mouseleave:hideTooltip});var alphaSelected=function(e){hideTooltip();$("#back").removeClass("inactive");$("#back").addClass("active");$(".alpha li").addClass("passiveAlpha");var t=e,n=t.find("a");t.removeClass("passiveAlpha").addClass("activeAlpha");var r=n.attr("href")[1];$("#nameHeader").css("opacity","1");$("#backLetter").html(r);$("#sideMenu").animate({opacity:0,"margin-left":-200},100,"linear",function(){$(this).load(aj_name+r,{letter:r},nameReset)}).animate({opacity:1,"margin-left":0},linkName)};$("#back").click(function(){reset()});$("#access").click(function(){console.log("readability triggered");$(this).toggleClass("buttondown buttonup");readable=!readable;$(".half").toggleClass("readable",readable)});