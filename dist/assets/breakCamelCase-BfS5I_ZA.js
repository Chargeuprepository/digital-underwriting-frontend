function a(e){return e.replace(/([a-zA-Z])(\d)/g,"$1 $2").replace(/(\d)([a-zA-Z])/g,"$1 $2").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/([A-Z]+)(?=[A-Z][a-z]|\b)/g,"$1 ").trim()}export{a as b};
