var loadingTimeout;
var distance; //Declaring this as a global Variable instead
var modal;
var colour = 'black';
var target = {
    latitude: 0,
    longitude: 0
};
var isViewed = false;


// Add this function at the beginning of your script
function showLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'flex';

    // Set a timeout to hide the loading screen after 2  seconds
    loadingTimeout = setTimeout(function () {
        hideLoadingScreen();
    }, 3000);
}

function hideLoadingScreen() {
    var loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';

    // Clear the timeout if it hasn't been triggered yet
    clearTimeout(loadingTimeout);  
}

function selectRed(){
    startCompass()
    target.latitude = 1.3331957;
    target.longitude = 103.9567760;

    showLoadingScreen();

    colour = 'red';
    if (document.getElementById('redOff')) {
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red');
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3331957; longitude: 103.9567760" animation-mixer/>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function showRed(){
    if (document.getElementById('redOff')){
        // Turning Red On
        document.getElementById('redOff').id = 'red';
        var content = document.getElementById('red')
        content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.3331957; longitude: 103.9567760" animation-mixer/>'
        // content.innerHTML = '<a-entity id="red" gltf-model="./static/3dModels/GLB/fireExtinguisher/fire_extinguisher.glb" scale="2 2 2" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'
    }
}

function hideRed(){
    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }
}

function selectGreen(){
    // Expo, middle, aiming at esclators: 1.3336073, 103.9567472
    startCompass()
    target.latitude = 1.3335021;
    target.longitude = 103.9568984;
    // target.latitude = 1.308356;
    // target.longitude = 103.849796; 


    showLoadingScreen();

    colour = 'green';

    if (document.getElementById('greenOff')){ 
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/signageGB.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.3335021; longitude: 103.9568984"></a-image>';
    }

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('orange')){
        // Turning orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

function showGreen(){
    if (document.getElementById('greenOff')){
        // Turning Green On
        document.getElementById('greenOff').id = 'green';
        var content = document.getElementById('green')
        content.innerHTML = '<a-image id="green" src="./static/images/2D_Assets_low_res/signageGB.png" look-at="[gps-projected-camera]" scale="10 10 10" gps-projected-entity-place="latitude: 1.3335021; longitude: 103.9568984"></a-image>';
    }
}

function hideGreen(){
    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }
}

function selectOrange(){
    // Closer to hall 1: 1.3334947, 103.9569044
    //Bicycle Park (Reimagine Active Mobility Zone)
    startCompass()
    target.latitude = 1.3334947;
    target.longitude = 103.9569044;
    // target.latitude = 1.308356;
    // target.longitude = 103.849796;
    

    showLoadingScreen();

    colour = 'orange';

    if (document.getElementById('orangeOff')) {
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange');
        content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="0.1 0.1 0.1" gps-projected-entity-place="latitude: 1.3334947; longitude: 103.9569044" animation-mixer/>'
    }
    

    if(document.getElementById('red')){
        // Turning Red Off
        document.getElementById('red').id = 'redOff';
        var content = document.getElementById('redOff')
        content.innerHTML = '<a-entity id="redOff"></a-entity>'
    }

    if(document.getElementById('green')){
        // Turning Green Off
        document.getElementById('green').id = 'greenOff';
        var content = document.getElementById('greenOff')
        content.innerHTML = '<a-entity id="greenOff"></a-entity>'
    }
}

function showOrange(){
    if (document.getElementById('orangeOff')){
        // Turning Orange On
        document.getElementById('orangeOff').id = 'orange';
        var content = document.getElementById('orange')
        content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="0.1 0.1 0.1" gps-projected-entity-place="latitude: 1.3334947; longitude: 103.9569044" animation-mixer/>'
        // content.innerHTML = '<a-entity id="orange" gltf-model="./static/3dModels/GLB/trafficCone/traffic_cone_game_ready.glb" scale="0.1 0.1 0.1" gps-projected-entity-place="latitude: 1.308356; longitude: 103.849796" animation-mixer/>'
    }
}

function hideOrange(){
    if(document.getElementById('orange')){
        // Turning Orange Off
        document.getElementById('orange').id = 'orangeOff';
        var content = document.getElementById('orangeOff')
        content.innerHTML = '<a-entity id="orangeOff"></a-entity>'
    }
}

// ##################################################################################################
var current = { latitude: null, longitude: null };
var target = { latitude: 0, longitude: 0 };
var lastAlpha = 0;
var direction = 0;
const isIOS =
    navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
    navigator.userAgent.match(/AppleWebKit/);
// const startBtn = document.querySelector(".start-btn");
const geolocationOptions = { enableHighAccuracy: true };

// function to initialize geolocation and device oroentation. runs automatically
// function to initialize geolocation and device orientation. runs automatically
function init() {
    // startBtn.addEventListener("click", startCompass);
    navigator.geolocation.watchPosition(setCurrentPosition, null, geolocationOptions);
    if (!isIOS) {
        window.addEventListener("deviceorientationabsolute", runCalculation);
    }

    // Start the UI updates
    updateUI();
}


// on clicking the start compass button, request permission to use device orientation.
// only IOS devices need to click the button
function startCompass() {
    if (isIOS) {
        DeviceOrientationEvent.requestPermission()
            .then((response) => {
            if (response === "granted") {
                window.addEventListener("deviceorientation", runCalculation);
            } else {
                alert("has to be allowed!");
            }
            })
            .catch(() => alert("not supported"));
    }
}

// takes values retrieved from th geolocation API and stores them in the current object
// for use in calculating compass direction and distance
function setCurrentPosition(position) {
    current.latitude = position.coords.latitude;
    current.longitude = position.coords.longitude;
}

// runs the calculation for getting the direction which the arrow needs to point
function runCalculation(event) {
    var alpha = Math.abs(360 - event.webkitCompassHeading) || event.alpha;

    if (alpha == null || Math.abs(alpha - lastAlpha) > 1) {
    var lat1 = current.latitude * (Math.PI / 180);
    var lon1 = current.longitude * (Math.PI / 180);
    var lat2 = target.latitude * (Math.PI / 180);
    var lon2 = target.longitude * (Math.PI / 180);

    // calculate compass direction
    var y = Math.sin(lon2 - lon1) * Math.cos(lat2);
    var x =
        Math.cos(lat1) * Math.sin(lat2) -
        Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1);
    var bearing = Math.atan2(y, x) * (180 / Math.PI);

    direction = (alpha + bearing + 360) % 360;
    direction = direction.toFixed(0);

    lastAlpha = alpha;

    var R = 6371; // Radius of the earth in km
    var dLat = lat2 - lat1; // below
    var dLon = lon2 - lon1;
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    distance = R * c; // Distance in km
    distance = distance * 1000; // Convert to meters

    var distanceElement = document.getElementById("distanceFromTarget");
    if (distance > 20000) {
        distanceElement.innerHTML = 'Please Select Destination!';
    } else if (distance <= 15){
        distanceElement.innerHTML = '';
    }else{
    // Display the actual distance
        distanceElement.innerHTML = Math.floor(distance) + "m to destination!";
    }
        

    if (colour != 'black') {
        switch (colour) {
            case 'red':
                if (distance > 1000000){
                    toggleEModal();
                    hideRed();
                } else if (distance > 3000){
                    toggleOModal();
                    hideRed();
                }else if (distance <= 3000){
                    isViewed = false;
                    showRed();
                    colour = 'red2';
                    break;
                }
            case 'red2':
                if (distance < 15){ 
                    hideRed();
                    if(isViewed == false){
                        toggleModalRed15();
                        isViewed = true;
                    }
                } else if (distance >= 15){
                    showRed();
                }
                break;
            case 'green':
                if (distance > 1000000){
                    hideGreen();
                    toggleEModal();
                } else if (distance > 3000){
                    hideGreen();
                    toggleOModal();
                }else if (distance <= 3000){
                    showGreen();
                    isViewed = false;
                    colour = 'green2';
                }
                break;
            case 'green2':
                if (distance < 15){ 
                    hideGreen();
                    if(isViewed == false){
                        toggleModalGreen15();
                        isViewed = true; 
                    }
                } else if (distance >= 15){
                    showGreen();
                }
                break;
            case 'orange':
                if (distance > 1000000){
                    hideOrange();
                    toggleEModal();
                } else if (distance > 3000){
                    hideOrange();
                    toggleOModal();
                }else if (distance <= 3000){
                    showOrange();
                    colour = 'orange2';
                    isViewed = false;
                }
                break;
            case 'orange2':
                if (distance < 15){ 
                    hideOrange();
                    if(isViewed == false){
                       toggleModalOrange15(); 
                        isViewed = true;
                    }
                }else if (distance >= 15){
                    showOrange();
                }
                break;
            default:
                break;
        }
    }
    }
}   

//Start Introduction Modal
    function toggleLModal(){
        //Get the modal
        modalL = document.getElementById("modalL");
        modalL.style.zIndex = "6000";
        modalL.style.display="block";
    }

    function closeModalL(){
        modalL = document.getElementById("modalL");
        modalL.style.display='none';
    }

    document.getElementsByClassName("closeL")[0].onclick = function () {
        modalL.style.display = "none";
    };
//End Introduction Modal


//Start Map Modal
    function toggleMModal(){
        //Get the modal
        modalMap = document.getElementById("modalMap");
        modalMap.style.display="block";
    }

    function closeModal(){
        modalMap = document.getElementById("modalMap");
        modalMap.style.display='none';
    }

    document.getElementsByClassName("closeM")[0].onclick = function () {
        modalMap.style.display = "none";
    };
//End Map Modal

//Start location turn on Modal
    function toggleEModal(){
        //Get the modal
        modalE = document.getElementById("modalE");
        modalE.style.display="block";
    }

    function closeModalE(){
        modalE = document.getElementById("modalE");
        modalE.style.display='none';
    }

    document.getElementsByClassName("closeE")[0].onclick = function () {
        modalE.style.display = "none";
    };
//End location turn on modal

//Start outside range modal
    function toggleOModal(){
        //Get the modal
        modalO = document.getElementById("modalO");
        modalO.style.display="block";
    }

    function closeModalO(){
        modalO = document.getElementById("modalE");
        modalO.style.display='none';
    }

    document.getElementsByClassName("closeO")[0].onclick = function () {
        modalO.style.display = "none";
    };
//End outside range modal

// Start of Individual Modals
    //Fire Extinguisher Modal

        function toggleModalRed15() {
            var modalRed15 = document.getElementById("modalRed15");
            modalRed15.style.display = 'block';
        }

        // Function to close the red modal
        function closeRedModal15() {
            var modalRed15 = document.getElementById("modalRed15");
            modalRed15.style.display = 'none';
        }

        // span.onclick for the red modal
        document.getElementById("modalRedClose15").onclick = function () {
            closeRedModal15();
        };
    //End of Fire Extinguisher Modal

    // Helmet Modal
        function toggleModalGreen15() {
            var modalGreen15 = document.getElementById("modalGreen15");
            modalGreen15.style.display = 'block';
        }

        // Function to close the Green modal
        function closeGreenModal15() {
            var modalGreen15 = document.getElementById("modalGreen15");
            modalGreen15.style.display = 'none';
        }
        
        // span.onclick for the Green modal
        document.getElementById("modalGreenClose15").onclick = function () {
            closeGreenModal15();
        };
    //End of helmet modal

    // Cone Modal
        function toggleModalOrange15() {
            var modalOrange15 = document.getElementById("modalOrange15");
            modalOrange15.style.display = 'block';
        }
        // Function to close the Orange modal
        function closeOrangeModal15() {
            var modalOrange15 = document.getElementById("modalOrange15");
            modalOrange15.style.display = 'none';
        }
        
        // span.onclick for the Orange modal
        document.getElementById("modalOrangeClose15").onclick = function () {
            closeOrangeModal15();
        };
    //End of Cone Modal

function toggleCircles() {
    var additionalCircles = document.getElementById("additionalCircles");
    var threeLines = document.getElementById("threeLines");

    if (additionalCircles.style.display === "none") {
        additionalCircles.style.display = "flex";
        threeLines.style.background = "url('./static/images/icons/cross.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    } else {
        additionalCircles.style.display = "none";
        threeLines.style.background = "url('./static/images/icons/menu.png') center no-repeat";
        threeLines.style.backgroundSize = "contain";
    }
}

// starts updating the UI.
function updateUI() {
    // Update arrow rotation
    const arrow = document.querySelector(".arrow");
    arrow.style.transform = `translate(-50%, -50%) rotate(${direction}deg)`;
    requestAnimationFrame(updateUI);
}

init();