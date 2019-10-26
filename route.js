

let routes = {
        '/': Home,
        '/about': About
    }

    let contentDiv = document.getElementById('content');
    contentDiv.innerHTML = routes[window.location.pathname];

    // change route when user click on each link
    function changeRoute(pathName) {
        window.history.pushState(
            {},
            pathName,
            window.location.origin + pathName);
        contentDiv.innerHTML = routes[pathName];
        console.log(contentDiv);
    }

    // when user clicks on back it should change back to the previous route

    window.onpopstate = () => {
        contentDiv.innerHTML = routes[window.location.pathname]
    }
