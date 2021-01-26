// Custom tooltip 

$(document).on('inserted.bs.tooltip', function(e) {
    let tooltip = $(e.target).data('bs.tooltip');
    $(tooltip.tip).addClass($(e.target).data('tooltip-custom'));
});

$('body').tooltip({ 
    selector: "[title]", 
    html: true
});

// Switch between mobile and desktop 

window.addEventListener('resize', function() {
	if (window.innerWidth <= 799) {
		window.location.href = "fe-way-mobile.html"; 
	}
});

window.addEventListener('resize', function() {
	if (window.innerWidth >= 800) {
		window.location.href = "fe-way.html"; 
	}
});


// add dropped spase for items in mobile

$( ".internet" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".html-info" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".css" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".javascript" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".git" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".security" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".package" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

$( ".css-arch" ).click(function() {
    $( this ).toggleClass( "drop-middle" );
});

$( ".css-prep" ).click(function() {
    $( this ).toggleClass( "drop-middle" );
});

$( ".build-tool" ).click(function() {
    $( this ).toggleClass( "drop-big" );
});

$( ".frameworks" ).click(function() {
    $( this ).toggleClass( "drop-middle" );
});

$( ".modern-css" ).click(function() {
    $( this ).toggleClass( "drop" );
});

$( ".web-comp" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

$( ".css-frameworks" ).click(function() {
    $( this ).toggleClass( "drop-big" );
});

$( ".testing" ).click(function() {
    $( this ).toggleClass( "drop-big" );
});

$( ".type-check" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

$( ".pwa" ).click(function() {
    $( this ).toggleClass( "drop-bigest" );
});

$( ".ssr" ).click(function() {
    $( this ).toggleClass( "drop-middle" );
});

$( ".graph" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

$( ".ssg" ).click(function() {
    $( this ).toggleClass( "drop-middle" );
});

$( ".mobile-app" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

$( ".desktop-app" ).click(function() {
    $( this ).toggleClass( "drop-small" );
});

//  Show dropped items list in mobile

function internetDrop() {
    let drop = document.getElementById("internetDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
  }

function htmlDrop() {
    let drop = document.getElementById("htmlDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function cssDrop() {
    let drop = document.getElementById("cssDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function jsDrop() {
    let drop = document.getElementById("jsDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function gitDrop() {
    let drop = document.getElementById("gitDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function securityDrop() {
    let drop = document.getElementById("securityDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function packageDrop() {
    let drop = document.getElementById("packageDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function cssArchDrop() {
    let drop = document.getElementById("cssArchDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function cssPrepDrop() {
    let drop = document.getElementById("cssPrepDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}


function buildToolDrop() {
    let drop = document.getElementById("buildToolDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function frameworksDrop() {
    let drop = document.getElementById("frameworksDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function modernCssDrop() {
    let drop = document.getElementById("modernCssDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function webCompDrop() {
    let drop = document.getElementById("webCompDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function cssFrameworksDrop() {
    let drop = document.getElementById("cssFrameworksDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function testingDrop() {
    let drop = document.getElementById("testingDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function typeCheckDrop() {
    let drop = document.getElementById("typeCheckDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function pwaDrop() {
    let drop = document.getElementById("pwaDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function ssrDrop() {
    let drop = document.getElementById("ssrDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function graphDrop() {
    let drop = document.getElementById("graphDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function ssgDrop() {
    let drop = document.getElementById("ssgDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function mobileAppDrop() {
    let drop = document.getElementById("mobileAppDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}

function desktopAppDrop() {
    let drop = document.getElementById("desktopAppDrop");
    if (drop.style.display === "block") {
      drop.style.display = "none";
    } else {
      drop.style.display = "block";
    }
}