import {gsap} from "gsap";

gsap.set("#overlay",{transformOrigin: "center"});
gsap.set("#progress",{transformOrigin: "center"});

var RAD  = Math.PI / 180;
var PI_2 = Math.PI / 2;

var clipPath = document.querySelector("#arcPath");

var arc = {  
  start: 360,
  end: 0,
  cx: 150,
  cy: 150,
  r: 80 
};

const iconTL = gsap.timeline();

iconTL.from("#overlay",{duration:0.5, scale:3, alpha:0})
        .from("#progress",{duration:0.5, alpha: 0, scale:0},"-=0.25")
        .to(arc, {duration: 3, end: 360, ease: "none", onUpdate: updatePath, repeatDelay: 0.25})
        .to("#overlay",{duration:0.5, alpha: 0, scale:3});

export function iconAnimation(){
    return iconTL;
}


//gsap.to(arc, 3, {end: 360, ease: "none", onUpdate: updatePath, repeatDelay: 0.25});

updatePath();

function updatePath() {
  clipPath.setAttribute("d", getPath(arc.cx, arc.cy, arc.r, arc.end, arc.start)); 
}

function getPath(cx, cy, r, a1, a2) {
   
  var delta = a2 - a1;
  
  if (delta === 360) {
        
    return "M " + (cx - r) + " " + cy + " a " + r + " " + r + " 0 1 0 " + r * 2 + " 0 a " + r + " " + r + " 0 1 0 " + -r * 2 + " 0z"; 
  }
  
  var largeArc = delta > 180 ? 1 : 0;
    
  a1 = a1 * RAD - PI_2;
  a2 = a2 * RAD - PI_2;

  var x1 = cx + r * Math.cos(a2);   
  var y1 = cy + r * Math.sin(a2);

  var x2 = cx + r * Math.cos(a1); 
  var y2 = cy + r * Math.sin(a1);
    
  return "M " + x1 + " " + y1 + " A " + r + " " + r + " 0 " + largeArc + " 0 " + x2 + " " + y2 + " L " + cx + " " + cy + "z";
}

