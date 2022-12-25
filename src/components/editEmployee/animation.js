import gsap from "gsap";

const tl = gsap.timeline({defaults : {duration : .35, ease : 'power2.out'}});

export function hideForm(element){
    gsap.set(element, {x : '-100%'})
}
export function showForm(element, editFromHeading){
    console.log('hii i m here')
    tl.fromTo(element , {x : '-100%'}, {x : '0'})
    tl.fromTo(editFromHeading, {scale : 0}, {scale : 1, ease : "elastic.out(1, 0.3)", duration : .75}, '<30%')
}

export function resetForm(element){
    tl.to(element, {x : '-100%'})
}





