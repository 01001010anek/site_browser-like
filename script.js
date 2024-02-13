document.addEventListener("DOMContentLoaded", function() {
    openTab('o_mnie');
});

function openTab(tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    document.querySelector("[onclick*='" + tabName + "']").classList.add("active");
}

function closeWindow() {
    window.close();
}

function minimizeWindow() {
    // Do something to minimize the window
}

function maximizeWindow() {
    // Do something to maximize the window
}
