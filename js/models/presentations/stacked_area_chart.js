ds.models.stacked_area_chart = function(data) {
  'use strict'

  var self = limivorous.observable()
                       .extend(ds.models.item, {item_type: 'stacked_area_chart'})
                       .extend(ds.models.chart)
                       .build()

  ds.models.chart.init(self, data)
  ds.models.item.init(self, data)

  self.interactive_properties = function() {
    return ds.models.chart.interactive_properties()
             .concat(ds.models.item.interactive_properties())
  }

  self.toJSON = function() {
    return ds.models.chart.json(self, ds.models.item.json(self))
  }

  return self
}
