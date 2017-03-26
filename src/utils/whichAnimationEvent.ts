let whichAnimationEvent:string = undefined;

export default ():string => {
  if (whichAnimationEvent) return whichAnimationEvent;

  var t;
  var el = document.createElement('fakeelement');
  var animations = {
    'animation':'animationend',
    'OAnimation':'oAnimationEnd',
    'MozAnimation':'animationend',
    'WebkitAnimation':'webkitAnimationEnd'
  }

  for (t in animations) {
    if (el.style[t] !== undefined) {
      return whichAnimationEvent = animations[t];
    }
  }
};
