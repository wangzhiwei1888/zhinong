pest = new Meteor.Collection('pest');
pestSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function(data) {
     if (data.userId !== null && data.userId !== undefined) {
       return data.userId;
     }
     if (this.isInsert) {
       return Meteor.userId();
     } else if (this.isUpsert) {
       return {
         $setOnInsert: Meteor.userId()
       };
     } else {
       this.unset();
     }
   },
   denyUpdate: true,
  },
  situationId:  {
    type: String,
    optional: false
  },
  pestName: {
    type: String,
    label: "Pest Name",
    optional: false,
  },
  // pestType: {
  //   type: String,
  //   label: "Pest Type",
  //   allowedValues: ["Weeds", "Insects", "Desense"],
  //   optional: false,
  // },
  pestType: {
    type: String,
    label: "Pest Type",
    autoform: {
      type: "select-multiple",
      options: function () {
        return [
          {label: "Weeds", value: 1},
          {label: "Insects", value: 2},
          {label: "Desense", value: 3}
        ];
      }
    },
    optional: false,
  },
  Images: {
    type: Array,
    optional: true
  },
  "Images.$": {
    type: String,
  },
  Leavrs: {
    type: Array,
    optional: true
  },
  "Leavrs.$": {
    type: String,
  },
  "Leavrs.$.image": {
    type: String,
  },
  Flowers: {
    type: Array,
    optional: true
  },
  "Flowers.$": {
    type: String,
  },
  "Flowers.$.image": {
    type: String,
  },
  Root: {
    type: Array,
    optional: true
  },
  "Root.$": {
    type: String,
  },
  "Root.$.image": {
    type: String,
  },
  Insects: {
    type: Array,
    optional: true
  },
  "Insects.$": {
    type: String,
  },
  "Insects.$.image": {
    type: String,
  },
  Eggs: {
    type: Array,
    optional: true
  },
  "Eggs.$": {
    type: String,
  },
  "Eggs.$.image": {
    type: String,
  },
  Desease: {
    type: Array,
    optional: true
  },
  'Desease.$': {
    type: String,
  },
  'Desease.$.image': {
    type: String,
  },
  createdAt: {
    type: Date,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Must remember to attach the schema to the collection
pest.attachSchema(pestSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
pest.simpleSchema().messages({
  required: "[label]is Required",
  minString: "[label]不能少于[min]个字符",
  maxString: "[label]不能超过[max]个字符",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});
