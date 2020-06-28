System.import("single-spa").then(function (singleSpa) {
    // ================================= register apps
    //  topbar_and_nav
        singleSpa.registerApplication(
            "shared",
            function () {
                return System.import("shared");
            },
            function (location) {
                return (
                    isStartWith("/user-management") ||
                    isStartWith("/contract") ||
                    isStartWith("/mdm") ||
                    isStartWith("/booking") ||
                    isStartWith("/asso_booking-contract") ||
                    isStartWith("/asso_network-contract") ||
                    isStartWith("/prc-contract") ||
                    isStartWith("/retail-contract") ||
                    isStartWith("/login") ||
                    isStartWith("/dashboard") ||
                    isStartWith("/customer") ||
                    isStartWith("/associate") 
                );
            }
        );

        // user
        singleSpa.registerApplication(
            "user-management",
            function () {
                return System.import("user-management");
            },
            function (location) {
                return isStartWith("/user-management");
            }
        );

        // contract
        singleSpa.registerApplication(
            "contract",
            function () {
                return System.import("contract");
            },
            function (location) {
                return isStartWith("/contract");
            }
        );

        // mdm
        singleSpa.registerApplication(
            "mdm",
            function () {
                return System.import("mdm");
            },
            function (location) {
                return isStartWith("/mdm");
            }
        );

        // booking
        singleSpa.registerApplication(
            "booking",
            function () {
                return System.import("booking");
            },
            function (location) {
                return isStartWith("/booking");
            }
        );

        // associate booking
           singleSpa.registerApplication(
            "asso_booking-contract",
            function () {
                return System.import("asso_booking-contract");
            },
            function (location) {
                return isStartWith("/asso_booking-contract");
            }
        );
            // associate network
            singleSpa.registerApplication(
                "asso_network-contract",
                function () {
                    return System.import("asso_network-contract");
                },
                function (location) {
                    return isStartWith("/asso_network-contract");
                }
            );

        // prc 
        singleSpa.registerApplication(
            "prc-contract",
            function () {
                return System.import("prc-contract");
            },
            function (location) {
                return isStartWith("/prc-contract");
            }
         );

        // retail contract 
        singleSpa.registerApplication(
            "retail-contract",
            function () {
                return System.import("retail-contract");
            },
            function (location) {
                return isStartWith("/retail-contract");
            }
         );


        function isStartWith(path) {                  
        if(window.location.pathname !== "/login"){ // if 
                if(!sessionStorage.getItem('access-token')){ // token not persist
                    window.location.href = '/login'
                    return false;
                }
        }
            return location.pathname.startsWith(path);
        }

        singleSpa.start();

        window.addEventListener(
            "single-spa:before-routing-event",
            function () {
                // const originalEvent = evt.detail;
                // console.log("single-spa event", originalEvent);
            }
        );
    // ================================= end register apps

    // ================================= navigate to login when load
        if (window.location.pathname == "/") {
            singleSpa.navigateToUrl("/login");
        }
    // ================================= end navigate to login  when load






















    // ================================= app overlay
        window.addEventListener(
            "single-spa:before-routing-event",
            function () {
                overlay("block");                                          
                    
            }
        );
        window.addEventListener("single-spa:app-change",  function () {
                overlay("none");
        });
        window.addEventListener("single-spa:no-app-change",  function () {
                overlay("none");
        });
        function overlay(state) {
            document.getElementById(
                "overlayMain"
            ).style.display = state;
        }
    // ================================= end app overlay
});