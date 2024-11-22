function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");

}
async function fetchVisitorCount() {
    const response = await fetch('https://xy6l0ohu70.execute-api.us-east-1.amazonaws.com/cloud');
    const data = await response.json();
    document.getElementById('visitor-count').innerText = data.count;
}

fetchVisitorCount();
