import {gsap} from "gsap";

gsap.set("#mask", {transformOrigin: "top"})
const drinkTL = gsap.timeline();
    drinkTL.to("#mask", {duration:5, y:150})

export function drinkingAnimation(){
    return drinkingAnimation
}
gsap.set("#straw", {transformOrigin:"center"})
const strawTL = gsap.timeline();
    strawTL.to("#straw", {duration: .5 , rotation:-2})