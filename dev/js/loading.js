import {gsap} from "gsap";

gsap.set("#mask", {transformOrigin: "top"})
const drinkTL = gsap.timeline();
    drinkTL.to("#mask", {duration:4, y:155})

export function drinkingAnimation(){
    return drinkingAnimation
}
gsap.set("#straw", {transformOrigin:"center"})
const strawTL = gsap.timeline();
    strawTL.to("#straw", {duration: 3 , rotation:3, ease: "elastic.out(1, 0.3)"})