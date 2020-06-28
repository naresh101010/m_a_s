System.import("single-spa").then(function(singleSpa) {
        // register topbar_and_nav
        singleSpa.registerApplication(
          "shared",
          function() {
            return System.import("shared");
          },
          function(location) {
            // show on user ,  credit and dashboard
            return (
              location.pathname.startsWith("/") ||
              location.pathname.startsWith("/user-management") ||
              location.pathname.startsWith("/contract") ||
              location.pathname.startsWith("/dashboardd") 
            );
            // not show on login page
            return (
              !location.pathname.startsWith("/login") &&
              !location.pathname.startsWith("/")
            );
          }
        );

        //register user
        singleSpa.registerApplication(
          "user-management",
          function() {
            return System.import("user-management");
          },
          function(location) {
            return location.pathname.startsWith("/user-management");
          }
        );


   //register contract
        singleSpa.registerApplication(
          "contract",
          function() {
            return System.import("contract");
          },
          function(location) {
            return location.pathname.startsWith("/contract");
          }
        );


         //register mdm
        singleSpa.registerApplication(
          "mdm",
          function() {
            return System.import("mdm");
          },
          function(location) {
            return location.pathname.startsWith("/mdm");
          }
        );



        singleSpa.start();
      });