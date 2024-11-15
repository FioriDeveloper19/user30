sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sap.learning.user30',
            componentId: 'EmployeeObjectPage',
            contextPath: '/Employee'
        },
        CustomPageDefinitions
    );
});