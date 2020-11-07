window.onload = function() {
    var requests = new XMLHttpRequest();
    const search = document.getElementsByClassName("btn")[0];

    search.addEventListener('click', function(e) {
        e.preventDefault();
        var input = document.getElementById('search-box').value;
        requests.onreadystatechange = function() {
            if (requests.readyState == XMLHttpRequest.DONE && requests.status == 200) {
                var data = requests.responseText;
                var result = document.getElementById("result");
                result.innerHTML = "<h2>Result</h2><hr width = 100%>" + data;
            }
        }
        requests.open('GET', 'superheroes.php?query=' + input, true);
        requests.send();
    });
}