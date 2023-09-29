function volume_sphere() {
    //Write your code here
		const radius = document.getElementById('radius');
        let r = parseFloat(radius.value);
        let volume1 = document.getElementById('volume');
        let ans = (4/3)*Math.PI*r*r*r;
        volume1.value = ans.toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
