var drawArches = () => {

  var sceneEl = document.querySelector('a-scene');
  var numArch = 13;
  var rotationLvl = (Math.PI * 2) / numArch;

  for(var i = 0; i < numArch; i++){
    var d = [];
    for(var j = i; j < observations.length; j += numArch){
      d.push(observations[j]);
    }
    var schema = {rotation: rotationLvl * i, flowers: d};
    var entityEl = document.createElement('a-entity');
    entityEl.setAttribute('arch', schema);
    sceneEl.appendChild(entityEl);

  }

  var trelisEl = document.createElement('a-entity');
  trelisEl.setAttribute('trelis', {numArch: numArch*2});
  sceneEl.appendChild(trelisEl);

};
