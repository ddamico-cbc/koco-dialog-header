define(['text!./dialog-header.html'],
    function(template) {
        'use strict';

        var DialogHeader = function(params, componentInfo) {

            var self = this;

            self.title = params.title;

        };

        return {
            viewModel: {
                createViewModel: function(params, componentInfo) {
                    return new DialogHeader(params, componentInfo);
                }
            },
            template: template
        };
    });
