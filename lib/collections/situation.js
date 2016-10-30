situation = new Meteor.Collection('situation');
situationSchema = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function(data) {
      // console.log('data=============>', data);
     if (data.userId !== null && data.userId !== undefined) {
       return data.userId;
     }
     // if (data.userId === null) {
     //   return "nulluser111";
     // }
     if (this.isInsert) {
      //  console.log('this===========>', this);
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
  cropName: {
    type: String,
    label: "Crops Name",
    optional: false,
  },
  // receipt: {
  //   type: Boolean,
  //   optional: true
  // },


  // workExperience: {
  //  type: String,
  //  label: "工作经历",
  //  max: 6000,
  //  optional: false,
  //  autoform: {
  //     rows: 5
  //  }
  // },

  // mobilePhone: {
  //   type: Number,
  //   label:"您的手机号",
  //   optional: false,
  //   autoform: {
  //     afFieldInput: {
  //       type: "tel"
  //     }
  //   }
  // },
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
situation.attachSchema(situationSchema);

// Custom validation messages with SimpleSchema. Remove if not needed
situation.simpleSchema().messages({
  required: "[label]是必填项",
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
