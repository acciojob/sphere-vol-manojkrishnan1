function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius');
        let r = parseFloat(radius.value);
        let volume = documnet.getElementById('volume');
        let ans = (4/3)*Math.PI*r*r*r;
        volume.value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
