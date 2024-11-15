sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/learning/user30/test/integration/FirstJourney',
		'sap/learning/user30/test/integration/pages/EmployeeList',
		'sap/learning/user30/test/integration/pages/EmployeeObjectPage'
    ],
    function(JourneyRunner, opaJourney, EmployeeList, EmployeeObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/learning/user30') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheEmployeeList: EmployeeList,
					onTheEmployeeObjectPage: EmployeeObjectPage
                }
            },
            opaJourney.run
        );
    }
);