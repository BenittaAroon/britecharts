define(function(require) {
    'use strict';

    var _ = require('underscore'),
        jsonOneSource;

        // This works on tests:
        jsonOneSource = require('json!./sparklineOneSource.json');

        // This works on demos:
        // jsonOneSource = require('json!/test/fixtures/sparklineOneSource.json');

    function SparklineDataBuilder(config){
        this.Klass = SparklineDataBuilder;

        this.config = _.defaults({}, config);

        this.with1Source = function(){
            var attributes = _.extend({}, this.config, jsonOneSource);

            return new this.Klass(attributes);
        };

        this.build = function() {
            return this.config;
        };
    }

    return {
        SparklineDataBuilder: SparklineDataBuilder
    };

});
