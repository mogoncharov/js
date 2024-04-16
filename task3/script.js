const trafficLights = document.querySelectorAll('.trafficLight');

let activeLightIndex = -1;

trafficLights.forEach((light, index) => {
    light.addEventListener('click', () => {
        if (activeLightIndex === -1) {
            activeLightIndex = 0;
            setLightColor(activeLightIndex, getColorForIndex(activeLightIndex));
        } else {
            setLightColor(activeLightIndex, 'black');
            activeLightIndex = (activeLightIndex + 1) % trafficLights.length;
            setLightColor(activeLightIndex, getColorForIndex(activeLightIndex));
        }
    });
});

function setLightColor(index, color) {
    trafficLights[index].style.backgroundColor = color;
}

function getColorForIndex(index) {
    switch (index) {
        case 0:
            return 'red';
        case 1:
            return 'yellow';
        case 2:
            return 'green';
        default:
            return 'black';
    }
}

function goBack() {
    window.history.back();
  }